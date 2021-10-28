import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { signupMD, loginMD, logoutMD } from '../async/user'

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
        },
        // * logout
        [logoutMD.fulfilled]: (state,{ payload }) => {
            const accessToken = payload.data.accessToken
            const refreshToken = payload.data.refreshToken
            sessionStorage.removeItem('accessToken', accessToken)
            sessionStorage.removeItem('refreshToken', refreshToken)
        },
        [loginMD.pending]: (state, { payload }) => {},
        [loginMD.rejected]: (state, { payload: errorMessage }) => {},
    },
})

export const { userReducer } = userSlice.actions
export default userSlice;
