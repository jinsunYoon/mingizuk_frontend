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
        [myMoimCreateMD.fulfilled]: (state, action) => {
            console.log('>>>>>>>>>>')
            state.my_moim = action.payload
        },
        [myMoimCreateMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },

        [myMoimJoinMD.fulfilled]: (state, { payload }) => {},
        [myMoimJoinMD.rejected]: (state, { payload }) => {},

        [myMoimLikeMD.fulfilled]: (state, { payload }) => {
            console.log(payload, 'mylikemd 잘넘어오나?')
            state.my_like = payload.data.myLikes
        },
        [myMoimLikeMD.rejected]: (state, { payload }) => {},

        [myMoimCommentMD.fulfilled]: (state, { payload }) => {
            console.log('<><>')
            state.my_comment_list = payload.data.myCommentList
        },
        [myMoimCommentMD.rejected]: (state, { payload }) => {},
    },
})

export default myMoimSlice
