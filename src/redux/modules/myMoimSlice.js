import { createSlice } from '@reduxjs/toolkit';
import { myMoimCreateMD, myMoimJoinMD, myMoimLikeMD, myMoimCommentsMD } from '../async/myMoim';

const initialState = {

}

const myMoimSlice = createSlice({
    name:'myMoim',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [myMoimCreateMD.fulfilled]: (state, { payload }) => {
            console.log(state, 'mymoimcreate state값 잘 넘어가??')
            console.log(payload, 'mymoimcreate payload값 잘 넘어가??')
        },
        [myMoimJoinMD.fulfilled]: (state, { payload }) => {
            console.log(state, 'mymoimjoin')
            console.log(payload, '페이로드')
        },
        [myMoimLikeMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
        },
        [myMoimCommentsMD.fulfilled]: (state,{payload}) => {
            console.log(payload)
        }
    }   
})


