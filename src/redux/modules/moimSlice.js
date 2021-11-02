import { createSlice } from '@reduxjs/toolkit'
import {
    moimCreateMD,
    moimReadMD,
    moimDeleteMD,
    moimDetailMD,
    moimReviewCreateMD,
    moimDeleteReviewMD,
    moimUpdateReviewMD,
} from '../async/moim'

const initialState = {
    moim_all: {},
    moim_detail: {},
}

const moimSlice = createSlice({
    name: 'moim',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [moimCreateMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
        },
        [moimCreateMD.rejected]: (state, { payload }) => {
            console.log(payload)
        },
        [moimReadMD.fulfilled]: (state, { payload }) => {
            state.moim_all = payload.data.allMoims
        },
        [moimReadMD.rejected]: (state, { payload }) => {
            console.log(payload)
        },
        [moimDeleteMD.fulfilled]: (state, { payload }) => {
            const ref_moim_post = state.moim_all.filter(
                (post) => post.id !== payload
            )
            state.moim_all = ref_moim_post
        },
        [moimDetailMD.fulfilled]: (state, { payload }) => {
            state.moim_detail = payload.data.targetMoim
        },
        [moimReviewCreateMD.fulfilled]: (state, { payload }) => {
            state.moim_detail.Comments.push({ contents: payload.contents })
        },
        [moimDeleteReviewMD.fulfilled]: (state, { payload }) => {
            const refReviews = state.moim_detail.Comments.filter(
                (comment) => comment.id !== payload.reviewId
            )
            state.moim_detail.Comments = refReviews
        },
        [moimUpdateReviewMD.fulfilled]: (state, { payload }) => {
            const refIdx = state.moim_detail.Comments.findIndex(
                (comment) => comment.id === payload.commentId
            )
            state.moim_detail.Comments[refIdx].contents = payload.contents
        },
    },
})

//* reducer export
// export const {}

//* slice export
export default moimSlice
