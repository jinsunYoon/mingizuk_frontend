import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { getToken } from '../../shared/utils'
import {
    signupMD,
    loginMD,
    logoutMD,
    loginCheckMD,
    userInfoMD,
} from '../async/user'
import { history } from '../store'

const initialState = {
    isLogin: false,
    userInfo: {
        nickName: '',
        userPw: '',
        userID: '',
        charUrl: '',
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        userReducer: (state, { payload }) => {
            state.isLogin = payload
            //일반 리덕스
        },
    },

    extraReducers: {
        // * login
        [loginMD.fulfilled]: (state, { payload }) => {
            const accessToken = payload.data.accessToken
            const refreshToken = payload.data.refreshToken
            sessionStorage.setItem('accessToken', accessToken)
            sessionStorage.setItem('refreshToken', refreshToken)
            state.isLogin = true
        },

        // * logout
        [logoutMD.fulfilled]: (state, { payload }) => {
            const accessToken = getToken().accessToken
            const refreshToken = getToken().refreshToken
            sessionStorage.removeItem('accessToken')
            sessionStorage.removeItem('refreshToken')
            state.isLogin = false
        },

        // * loginCheck
        [loginCheckMD.fulfilled]: (state, { payload }) => {
            state.isLogin = true
            state.userInfo.userEmail = payload?.data?.user?.userEmail
            state.userInfo.nickName = payload?.data?.user?.nickName
            state.userInfo.userPw = payload?.data?.user?.userPw
            state.userInfo.userID = payload?.data?.user?.id
            if (payload?.data?.character?.characterName === '라이온') {
                state.userInfo.charUrl =
                    'https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png'
            } else if (payload?.data?.character?.characterName === '제이지') {
                state.userInfo.charUrl =
                    'https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1_1+1.png'
            } else if (payload?.data?.character?.characterName === '무지') {
                state.userInfo.charUrl =
                    'https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_2_1+1.png'
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
    },
})

export const { userReducer } = userSlice.actions
export default userSlice
