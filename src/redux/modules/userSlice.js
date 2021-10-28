import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { signupMD } from '../async/user'

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
        [signupMD.fulfilled]: (state, { payload }) => {
            state.isLogin = true
        },
        [signupMD.pending]: (state, { payload }) => {
            state.isFetching = true
        },
        [signupMD.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false
            state.errorMessage = errorMessage
            console.log(payload)
        },
    },
})

export const { userReducer } = userSlice.actions
export default userSlice
