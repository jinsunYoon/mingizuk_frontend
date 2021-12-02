import { createSlice } from '@reduxjs/toolkit'
import {
    moimCreateMD,
    moimReadMD,
    moimUpdateMD,
    moimDeleteMD,
    moimLikeMD,
    moimUnlikeMD,
    moimJoinMD,
    moimLeaveMD,
    moimDetailMD,
    moimReviewCreateMD,
    moimDeleteReviewMD,
    moimUpdateReviewMD,
    moimLocationMD,
    moimScrollMD,
    moimLocationScrollMD,
} from '../async/moim'
import { toast } from '../../shared/utils'

const initialState = {
    moim_all: {},
    moim_detail: '',
    moim_ref_update: {},
    address: '',
    place: '',
    filter: {},
    chat_host: '',
    detail_loading: false,
    moim_scroll: [],
    moim_filter_scroll: {},
}

const moimSlice = createSlice({
    name: 'moim',
    initialState: initialState,
    reducers: {
        moimUpdate: (state, action) => {
            state.moim_ref_update = action.payload
        },
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setPlace: (state, action) => {
            state.place = action.payload
        },
        setChatHost: (state, { payload }) => {
            state.chat_host = payload
        },
        setLoadingFalse: (state, { payload }) => {
            state.detail_loading = false
        },
        clearFilter: (state, { payload }) => {
            state.filter = undefined
        },
    },
    extraReducers: {
        [moimCreateMD.fulfilled]: (state, { payload }) => {
            toast(600, false, 'success', '모임 글이 게시되었습니다.')
        },
        [moimCreateMD.rejected]: (state, { payload }) => {},
        [moimReadMD.fulfilled]: (state, { payload }) => {
            state.moim_all = payload.data.allMoims
        },
        [moimReadMD.rejected]: (state, { payload }) => {},
        [moimUpdateMD.fulfilled]: (state, { payload }) => {},
        [moimDeleteMD.fulfilled]: (state, { payload }) => {
            const ref_moim_post = state.moim_all.filter(
                (post) => post.id !== payload
            )
            state.moim_all = ref_moim_post
        },
        [moimDetailMD.fulfilled]: (state, { payload }) => {
            state.moim_detail = payload.data.targetMoim
            state.detail_loading = true
        },
        [moimLikeMD.fulfilled]: (state, { payload }) => {
            const likeUser = payload.data.msg.split(' ')[0]
            const likePost = payload.data.msg.split(' ')[2]

            if (state.moim_detail !== '') {
                state.moim_detail.Likes.push({ userId: Number(likeUser) })
                if (state.moim_all?.length !== undefined) {
                    state.moim_all.filter(
                        (post) =>
                            post.id === Number(likePost) &&
                            post.Likes.push({ userId: Number(likeUser) })
                    )
                }
            } else {
                state.moim_all.filter(
                    (post) =>
                        post.id === Number(likePost) &&
                        post.Likes.push({ userId: Number(likeUser) })
                )
            }
        },
        [moimUnlikeMD.fulfilled]: (state, { payload }) => {
            const unlikeUser = payload.data.msg.split(' ')[0]
            const unlikePost = payload.data.msg.split(' ')[2]
            if (state.moim_detail !== '') {
                const result = state.moim_detail.Likes.filter(
                    (likeUser) => likeUser.userId !== Number(unlikeUser)
                )
                state.moim_detail.Likes = result

                if (state?.moim_all?.length !== undefined) {
                    state.moim_all.map((post) => {
                        if (post.id === Number(unlikePost)) {
                            const temp = post.Likes.filter(
                                (like) => like.userId !== Number(unlikeUser)
                            )
                            post.Likes = temp
                        }
                    })
                }
            } else {
                state.moim_all.map((post) => {
                    if (post.id === Number(unlikePost)) {
                        const temp = post.Likes.filter(
                            (like) => like.userId !== Number(unlikeUser)
                        )
                        post.Likes = temp
                    }
                })
            }
        },
        [moimJoinMD.fulfilled]: (state, { payload }) => {
            state.moim_detail.MoimUsers.push({
                User: { nickName: payload?.nickName },
            })
        },
        [moimLeaveMD.fulfilled]: (state, { payload }) => {
            const refUser = payload.user
            const moimUsers = state.moim_detail.MoimUsers.filter(
                ({ User }) => User.nickName
            )
            const result = moimUsers.filter(
                ({ User }) => User.nickName !== refUser
            )
            state.moim_detail.MoimUsers = result
        },
        [moimReviewCreateMD.fulfilled]: (state, { payload }) => {
            state.moim_detail.Comments.push({
                contents: payload.data.contents,
                id: payload.response.data.newCommentId,
                User: { nickName: payload.data.writer },
            })
        },
        [moimDeleteReviewMD.fulfilled]: (state, { payload }) => {
            const refReviews = state.moim_detail.Comments.filter(
                (comment) => comment.id !== payload.reviewId
            )
            state.moim_detail.Comments = refReviews
            toast(600, false, 'success', '댓글을 삭제하였어요.')
        },
        [moimUpdateReviewMD.fulfilled]: (state, { payload }) => {
            const refIdx = state.moim_detail.Comments.findIndex(
                (comment) => comment.id === payload.commentId
            )
            state.moim_detail.Comments[refIdx].contents = payload.contents
            toast(600, false, 'success', '댓글을 수정했어요.')
        },
        [moimLocationMD.fulfilled]: (state, { payload }) => {
            state.filter = payload.data.filterMoims
        },
        [moimScrollMD.fulfilled]: (state, { payload }) => {
            state.moim_scroll.push(payload.data.moreMoims)
        },
        [moimLocationScrollMD.fulfilled]: (state, { payload }) => {
            state.moim_filter_scroll = payload.data
        },
    },
})

//* reducer export
export const {
    moimUpdate,
    setAddress,
    setPlace,
    setChatHost,
    setLoadingFalse,
    clearFilter,
} = moimSlice.actions

//* slice export
export default moimSlice
