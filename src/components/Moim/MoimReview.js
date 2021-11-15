import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import {
    moimReviewCreateMD,
    moimDeleteReviewMD,
    moimUpdateReviewMD,
} from '../../redux/async/moim'

const MoimReview = (props) => {
    const dispatch = useDispatch()
    const loginNickName = useSelector((state) => state.user.userInfo.nickName)
    const review = useSelector((state) => state.moim.moim_detail.Comments)
    const { moimId } = props

    const deleteReview = (reviewId) => {
        const data = {
            moimId: moimId,
            reviewId: reviewId,
        }
        Swal.fire({
            title: '리뷰를 삭제하시겠습니까 ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(moimDeleteReviewMD(data))
            } else return
        })
    }

    const updateReview = (reviewId) => {
        Swal.fire({
            title: '수정할 댓글을 입력해주세요.',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off',
            },
            showCancelButton: true,
            confirmButtonText: '수정하기',
            showLoaderOnConfirm: true,
            preConfirm: (text) => {
                const data = {
                    moimId: moimId,
                    commentId: reviewId,
                    contents: text,
                }
                dispatch(moimUpdateReviewMD(data))
            },
        })
    }

    return (
        <>
            {review?.length === 0 && (
                <p className="empty-review">
                    아직 작성된 댓글이 없습니다.
                    <br />이 모임에 관심이 있다면 댓글을 남겨보세요 !{' '}
                </p>
            )}
            {review?.map((rev, idx) => (
                <section className="post-review-container" key={idx}>
                    <div className="post-review-box">
                        <span>{rev?.User?.nickName}</span>
                        <p>{rev?.contents}</p>
                        {loginNickName === rev?.User?.nickName && (
                            <div className="review-btn-container">
                                <button
                                    onClick={() => {
                                        updateReview(rev?.id)
                                    }}
                                >
                                    수정
                                </button>
                                <button
                                    onClick={() => {
                                        deleteReview(rev?.id)
                                    }}
                                >
                                    삭제
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            ))}
        </>
    )
}

export default MoimReview
