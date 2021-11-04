import { createSlice } from '@reduxjs/toolkit';
import { 
    myMoimCreateMD, 
    myMoimJoinMD, 
    myMoimLikeMD, 
    myMoimCommentMD 
} from '../async/myMoim';

const initialState = {
    my_moim: {},
    my_like: [],
    my_comment_list: [],
}

const myMoimSlice = createSlice({
    name:'myMoim',
    initialState: initialState,
    reducers: {
    },

    extraReducers: {
        [myMoimCreateMD.fulfilled]: (state, { payload }) => {
        },
        [myMoimCreateMD.rejected]: (state, { payload }) => {
        },

        [myMoimJoinMD.fulfilled]: (state, { payload }) => {
        },
        [myMoimJoinMD.rejected]: (state, { payload }) => {
        },

        [myMoimLikeMD.fulfilled]: (state, { payload }) => {
            state.my_like = payload.data.myLikes
        },
        [myMoimLikeMD.rejected]: (state, { payload }) => {
        },

        [myMoimCommentMD.fulfilled]: (state, { payload }) => {
            state.my_comment_list = payload.data.myCommentList
        },
        [myMoimCommentMD.rejected]: (state,{ payload }) => {
        }
    }   
})


export default myMoimSlice;