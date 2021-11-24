import { createSlice } from '@reduxjs/toolkit'
import {
    myMoimCreateMD,
    myMoimJoinMD,
    myMoimLikeMD,
    myMoimCommentMD,
} from '../async/myMoim'

const initialState = {
    my_moims: [],
    my_joins: [],
    my_likes: [],
    my_comments: [],
}

const myMoimSlice = createSlice({
    name: 'myMoim',
    initialState: initialState,
    reducers: {},

    extraReducers: {
        [myMoimCreateMD.fulfilled]: (state, { payload }) => {
            state.my_moims = payload.data.allMyMoims
        },
        [myMoimCreateMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },

        [myMoimJoinMD.fulfilled]: (state, { payload }) => {
            state.my_joins = payload.data.allMyMoims
        },
        [myMoimJoinMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },

        [myMoimLikeMD.fulfilled]: (state, { payload }) => {
            state.my_likes = payload.data.likedMoims
        },
        [myMoimLikeMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },

        [myMoimCommentMD.fulfilled]: (state, { payload }) => {
            state.my_comments = payload.data.myCommentList
        },
        [myMoimCommentMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },
    },
})

export default myMoimSlice
