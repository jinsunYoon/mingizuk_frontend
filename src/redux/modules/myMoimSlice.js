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
        [myMoimCreateMD.fulfilled]: (state, {payload}) => {
            state.my_moim = payload.data.allMyMoim
            console.log(state.my_moim,'???????????????')
        },
        [myMoimCreateMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },

        [myMoimJoinMD.fulfilled]: (state, { payload }) => {
            state.my_join = payload.data.allMyMoim 
            console.log(state.my_join,'join??????')
        },
        [myMoimJoinMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
        },

        [myMoimLikeMD.fulfilled]: (state, { payload }) => {
            console.log(payload, 'mylikeMD?RF')
            state.my_like = payload.data.myLikes
        },
        [myMoimLikeMD.rejected]: (state, { payload }) => {
            console.log('errormsg')
            console.log(payload, 'mylikeMD?RF')

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
