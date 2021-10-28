import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { signupMD, loginMD } from '../async/user'
import { history } from '../store'

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
            state.isLogin = true
        },
        [loginMD.pending]: (state, { payload }) => {},
        [loginMD.rejected]: (state, { payload: errorMessage }) => {},
        [signupMD.fulfilled]: (state, { payload }) => {},
    },
})

export const { userReducer } = userSlice.actions
export default userSlice
