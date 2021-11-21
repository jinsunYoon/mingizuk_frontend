import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import Icon from '../../components/icons/Icon'
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
    const [optModalStatus, setOptModalStatus] = React.useState(false)

    const deleteReview = (reviewId) => {
        const data = {
            moimId: moimId,
            reviewId: reviewId,
        }
        Swal.fire({
            text: '댓글을 삭제하시겠어요 ?',
            showCancelButton: true,
            confirmButtonColor: '#6B76FF',
            cancelButtonColor: '#DEDEDE',
            confirmButtonText: '삭제',
            cancelButtonText: '취소',
            width: '30rem',
            height: '15rem',
            reverseButtons: true,
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
                            <div className="review-opt-warp">
                                <div
                                    className="opt-icon"
                                    onClick={() => {
                                        setOptModalStatus(true)
                                    }}
                                >
                                    <Icon icon={'opt-btn'} size="20px" />
                                </div>
                            </div>
                        )}
                        {optModalStatus && (
                            <div
                                className="option-background"
                                onClick={() => {
                                    setOptModalStatus(false)
                                }}
                            >
                                <div className="opt-warp">
                                    <div
                                        className="option-container"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            onClick={() => {
                                                updateReview(rev?.id)
                                            }}
                                        >
                                            <Icon icon="ic_edit" size="24px" />
                                            <span>수정</span>
                                        </button>
                                        <button
                                            onClick={() => {
                                                deleteReview(rev?.id)
                                            }}
                                        >
                                            <Icon
                                                icon="Trash_light"
                                                size="24px"
                                            />
                                            <span>삭제</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            ))}
        </>
    )
}

export default MoimReview
