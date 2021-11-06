import { createSlice } from '@reduxjs/toolkit'
import {
    moimCreateMD,
    moimReadMD,
    moimUpdateMD,
    moimDeleteMD,
    moimLikeMD,
    moimUnlikeMD,
    moimJoinMD,
    moimDetailMD,
    moimReviewCreateMD,
    moimDeleteReviewMD,
    moimUpdateReviewMD,
} from '../async/moim'

const initialState = {
    moim_all: {},
    moim_detail: {},
    moim_ref_update: {},
    marker: '',
    addressName: '',
}

const moimSlice = createSlice({
    name: 'moim',
    initialState: initialState,
    reducers: {
        moimUpdate: (state, action) => {
            state.moim_ref_update = action.payload
        },
        setMarker: (state, action) => {
            state.marker = action.payload
        },
        setAddressName: (state, action) => {
            state.addressName = action.payload
        },
    },
    extraReducers: {
        [moimCreateMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
        },
        [moimCreateMD.rejected]: (state, { payload }) => {
            console.log(payload)
        },
        [moimReadMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.moim_all = payload.data.allMoims
        },
        [moimReadMD.rejected]: (state, { payload }) => {
            console.log(payload)
        },
        [moimUpdateMD.fulfilled]: (state, { payload }) => {
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
            console.log(payload)
        },
        [moimLikeMD.fulfilled]: (state, action) => {
            const likeUser = action.payload.data.msg.slice(0, 1)
            state.moim_detail.Likes.push({ userId: Number(likeUser) })
            // state.moim_detail.Likes.push(likeUser)
        },
        [moimUnlikeMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
            console.log(state, '<><><><>')
        },
        [moimJoinMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
        },
        [moimReviewCreateMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.moim_detail.Comments.push({
                contents: payload.data.contents,
                id: payload.response.data.newCommentId,
            })
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
export const { moimUpdate, setMarker, setAddressName } = moimSlice.actions

//* slice export
export default moimSlice
