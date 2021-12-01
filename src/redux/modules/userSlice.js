import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { getToken } from '../../shared/utils'
import Swal from 'sweetalert2'
import {
    signupMD,
    loginMD,
    logoutMD,
    loginCheckMD,
    userInfoMD,
    byeMD,
} from '../async/user'
import { history } from '../store'

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
})

const initialState = {
    isLogin: false,
    userInfo: {
        nickName: '',
        userPw: '',
        userID: '',
        charUrl: '',
    },
    nav: {
        home: false,
        routine: false,
        moim: false,
        historyI: false,
        mypage: false,
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        userReducer: (state, { payload }) => {
            state.isLogin = payload
        },
        changeNav: (state, { payload }) => {
            state.nav.home = false
            state.nav.routine = false
            state.nav.moim = false
            state.nav.historyI = false
            state.nav.mypage = false
            state.nav[payload] = true
        },
    },

    extraReducers: {
        // * login
        [loginMD.fulfilled]: (state, { payload }) => {
            if (payload !== undefined) {
                const accessToken = payload?.data?.accessToken
                const refreshToken = payload?.data?.refreshToken
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken)
                state.isLogin = true
            } else if (payload === undefined) {
                Toast.fire({
                    icon: 'error',
                    title: '아이디나 비밀번호를 다시 확인해주세요.',
                })
            }
        },

        // * logout
        [logoutMD.fulfilled]: (state, { payload }) => {
            const accessToken = getToken().accessToken
            const refreshToken = getToken().refreshToken
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            state.isLogin = false
        },

        // * loginCheck
        [loginCheckMD.fulfilled]: (state, { payload }) => {
            if (payload?.data?.result === true) {
                state.isLogin = true
                state.userInfo.userEmail = payload?.data?.user?.userEmail
                state.userInfo.nickName = payload?.data?.user?.nickName
                state.userInfo.userPw = payload?.data?.user?.userPw
                state.userInfo.userID = payload?.data?.user?.id
                if (payload?.data?.character?.characterName === '라이온') {
                    state.userInfo.charUrl =
                        'https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png'
                } else if (
                    payload?.data?.character?.characterName === '제이지'
                ) {
                    state.userInfo.charUrl =
                        'https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1_1+1.png'
                } else if (payload?.data?.character?.characterName === '무지') {
                    state.userInfo.charUrl =
                        'https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_2_1+1.png'
                }
            } else if (payload?.data?.msg === 'accessToken 재발급') {
                state.isLogin = false
                localStorage.setItem('accessToken', payload.data.accessToken)
                state.isLogin = true
                console.log('<<access재발급')
                window.location.reload()
            } else if (payload?.data?.msg === 'refreshToken 재발급') {
                state.isLogin = false
                localStorage.setItem('refreshToken', payload.data.refreshToken)
                state.isLogin = true
                console.log('<<refresh재발급')
                window.location.reload()
            }
        },
        [loginCheckMD.rejected]: (state, { payload }) => {
            state.isLogin = false
        },

        [loginMD.pending]: (state, { payload }) => {}, //response NO!
        [loginMD.rejected]: (state, { payload: errorMessage }) => {},
        [signupMD.fulfilled]: (state, { payload }) => {},

        // * userInfo
        [userInfoMD.fulfilled]: (state, { payload }) => {
            state.userInfo.nickName = payload.newNickName
            state.userInfo.userPw = payload.userPw
            state.userInfo.userID = payload.userID
        },

        [byeMD.fulfilled]: (state, { payload }) => {
            console.log('바이풀필드', payload)
            const accessToken = getToken().accessToken
            const refreshToken = getToken().refreshToken
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            state.isLogin = false
        },
    },
})

export const { userReducer, changeNav } = userSlice.actions
export default userSlice
