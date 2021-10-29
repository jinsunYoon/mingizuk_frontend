import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { getToken } from '../../shared/utils'
import { signupMD, loginMD, logoutMD, loginCheckMD } from '../async/user'
import { history } from '../store'
import { useDispatch } from 'react-redux'

const initialState = {
    isLogin: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        userReducer: (state, { payload }) => {
            state.isLogin = payload
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
        },

        [loginMD.pending]: (state, { payload }) => {},
        [loginMD.rejected]: (state, { payload: errorMessage }) => {},
        [signupMD.fulfilled]: (state, { payload }) => {},
    },
})

export const { userReducer } = userSlice.actions
export default userSlice
