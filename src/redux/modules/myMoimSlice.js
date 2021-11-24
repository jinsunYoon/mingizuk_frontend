import { createSlice } from '@reduxjs/toolkit'
import {
    myMoimCreateMD,
    myMoimJoinMD,
    myMoimLikeMD,
    myMoimCommentMD,
} from '../async/myMoim'

const initialState = {
    my_moim: [],
    my_like: [],
    my_comment_list: [],
}

const myMoimSlice = createSlice({
    name: 'myMoim',
    initialState: initialState,
    reducers: {},

    extraReducers: {
        [myMoimCreateMD.fulfilled]: (state, { payload }) => {
            state.my_moim = payload.data.allMyMoim
        },
        [myMoimCreateMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },

        [myMoimJoinMD.fulfilled]: (state, { payload }) => {
            state.my_join = payload.data.allMyMoim
        },
        [myMoimJoinMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },

        [myMoimLikeMD.fulfilled]: (state, { payload }) => {
            state.my_like = payload.data.myLikes
            console.log('>>>', 'like', payload)
        },
        [myMoimLikeMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },

        [myMoimCommentMD.fulfilled]: (state, { payload }) => {
            state.my_comment_list = payload.data.myCommentList
        },
        [myMoimCommentMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },
    },
})

export default myMoimSlice
