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
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 500,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
})

const initialState = {
    moim_all: {},
    moim_detail: '',
    moim_ref_update: {},
    address: '',
    place: '',
    filter: {},
    chat_host: '',
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
            console.log('setAddress', action.payload)
        },
        setPlace: (state, action) => {
            state.place = action.payload
            console.log('setPlace', action.payload)
        },
        setChatHost: (state, { payload }) => {
            state.chat_host = payload
        },
    },
    extraReducers: {
        [moimCreateMD.fulfilled]: (state, { payload }) => {
            Toast.fire({
                icon: 'success',
                title: '모임 글이 게시되었습니다.',
            })
        },
        [moimCreateMD.rejected]: (state, { payload }) => {
            console.log(payload)
        },
        [moimReadMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.moim_all = payload.data.allMoims
        },
        [moimReadMD.rejected]: (state, { payload }) => {},
        [moimUpdateMD.fulfilled]: (state, { payload }) => {},
        [moimDeleteMD.fulfilled]: (state, { payload }) => {
            console.log('<<', state.moim_all)
            const ref_moim_post = state.moim_all.filter(
                (post) => post.id !== payload
            )
            state.moim_all = ref_moim_post
        },
        [moimDetailMD.fulfilled]: (state, { payload }) => {
            state.moim_detail = payload.data.targetMoim
            console.log(payload)
        },
        [moimLikeMD.fulfilled]: (state, { payload }) => {
            const likeUser = payload.data.msg.split(' ')[0]
            const likePost = payload.data.msg.split(' ')[2]

            if (state.moim_detail !== '') {
                state.moim_detail.Likes.push({ userId: Number(likeUser) })
                state.moim_all.filter(
                    (post) =>
                        post.id === Number(likePost) &&
                        post.Likes.push({ userId: Number(likeUser) })
                )
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

                const result2 = state.moim_all.filter(
                    (post) => post.id === Number(unlikePost)
                )
                // state.moim_all = result2
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
            console.log(payload)
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
            Toast.fire({
                icon: 'success',
                title: '댓글을 삭제하였어요.',
            })
        },
        [moimUpdateReviewMD.fulfilled]: (state, { payload }) => {
            const refIdx = state.moim_detail.Comments.findIndex(
                (comment) => comment.id === payload.commentId
            )
            state.moim_detail.Comments[refIdx].contents = payload.contents
            Toast.fire({
                icon: 'success',
                title: '댓글을 수정했어요.',
            })
        },
        [moimLocationMD.fulfilled]: (state, { payload }) => {
            console.log('>>필터', payload)
            state.filter = payload.data.filterMoims
        },
        [moimScrollMD.fulfilled]: (state, { payload }) => {
            console.log('>>>>>datapayload', payload)
            state.moim_scroll.push(payload.data.moreMoims)
        },
        [moimLocationScrollMD.fulfilled]: (state, { payload }) => {
            console.log('>>무한스크롤모임필터데이터', payload)
            state.moim_filter_scroll = payload.data
        },
    },
})

//* reducer export
export const { moimUpdate, setAddress, setPlace, setChatHost } =
    moimSlice.actions

//* slice export
export default moimSlice
