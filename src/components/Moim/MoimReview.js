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
            {review?.map((review, idx) => (
                <ReviewBox key={idx}>
                    <UpdateBtn
                        onClick={() => {
                            updateReview(review?.id)
                        }}
                    >
                        u
                    </UpdateBtn>
                    <CloseBtn
                        onClick={() => {
                            deleteReview(review?.id)
                            console.log('deleteid', review?.id)
                        }}
                    >
                        X
                    </CloseBtn>
                    <Text>리뷰 작성자</Text>
                    <Text>{review?.contents}</Text>
                </ReviewBox>
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

export default MoimReview
