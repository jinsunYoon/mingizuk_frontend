import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import styled from 'styled-components'
import { FlexRow, Text } from '../../elements/index'
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
            {review?.map((rev, idx) => (
                <ScrollY>
                    <ReviewBox key={idx}>
                        {loginNickName === rev?.User?.nickName && (
                            <div>
                                <UpdateBtn
                                    onClick={() => {
                                        updateReview(rev?.id)
                                    }}
                                >
                                    u
                                </UpdateBtn>
                                <CloseBtn
                                    onClick={() => {
                                        deleteReview(rev?.id)
                                    }}
                                >
                                    X
                                </CloseBtn>
                            </div>
                        )}

                        <Text>{rev?.User?.nickName}</Text>
                        <Text>{rev?.contents}</Text>
                    </ReviewBox>
                </ScrollY>
            ))}
        </>
    )
}

const ReviewBox = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 15px;
    border: 1px solid lightgray;
`

const CloseBtn = styled.button`
    position: absolute;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    right: 20px;
    margin: 10px;
`
const UpdateBtn = styled.button`
    position: absolute;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    right: 50px;
    margin: 10px;
`

const ScrollY = styled.div`
    display: grid;
    height: 50px;
    --column-count: 1;
    overflow-y: auto;
    grid-template-rows: repeat(1, auto);
    scroll-padding: 0px 24px;
    scroll-snap-type: y mandatory;
    grid-auto-flow: row;
    gap: 12px;
    row-gap: 12px;
    column-gap: 12px;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

export default MoimReview
