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
        [myMoimCreateMD.rejected]: (state, { payload }) => {},

        [myMoimJoinMD.fulfilled]: (state, { payload }) => {
            state.my_joins = payload.data.allMyMoims
        },
        [myMoimJoinMD.rejected]: (state, { payload }) => {},

        [myMoimLikeMD.fulfilled]: (state, { payload }) => {
            state.my_likes = payload.data.likedMoims
        },
        [myMoimLikeMD.rejected]: (state, { payload }) => {},

        [myMoimCommentMD.fulfilled]: (state, { payload }) => {
            state.my_comments = payload.data.myCommentList
        },
        [myMoimCommentMD.rejected]: (state, { payload }) => {},
    },
})

export default myMoimSlice
