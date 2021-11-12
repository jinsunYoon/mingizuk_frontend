import React from 'react'
import Header from '../../components/Header'
import { history } from '../../redux/store'
import { NavBar } from '../../components'
import { LikeBtn } from '../../elements'
import styled from 'styled-components'
import Icon from '../../components/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import {
    moimDetailMD,
    moimReviewCreateMD,
    moimDeleteMD,
    moimJoinMD,
    moimLikeMD,
} from '../../redux/async/moim'
import MoimReview from '../../components/Moim/MoimReview'
import { moimUpdate } from '../../redux/modules/moimSlice'
import '../../styles/moim/moim-detail.scss'
import 'moment/locale/ko'
import moment from 'moment'

const MoimDetail = (props) => {
    const post_id = props.match.params.id
    const dispatch = useDispatch()

    const user_nick = useSelector((state) => state.user.userInfo.nickName)
    const post_data = useSelector((state) => state.moim.moim_detail)
    const like_id = useSelector((state) => state.user.userInfo.userID)

    React.useEffect(() => {
        dispatch(moimDetailMD(post_id))
        post_data?.Likes?.length
    }, [])

    // * post delete
    const deletePost = (data) => {
        swal({
            title: '게시글을 지우시겠습니까 ?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(moimDeleteMD(data))
                swal('게시글이 지워졌습니다.', {
                    icon: 'success',
                })
                history.push('/moim')
            } else return
        })
    }

    // * commnet create
    const [contents, setContents] = React.useState('')
    const commitsubmit = () => {
        const data = {
            moimId: post_id,
            contents,
        }
        dispatch(moimReviewCreateMD(data))
        setContents('')
    }

    // * join Moim
    const join = (data) => {
        dispatch(moimJoinMD(data))
    }

    return (
        <>
            <Header name="모임" type="back" />
            <article className="detail-layout">
                {/* <TitleBox>
                    {Object.keys(post_data).length > 0 &&
                        post_data.MoimUsers[0].User.nickName === user_nick && (
                            <div>
                                <CloseBtn
                                    onClick={() => {
                                        deletePost(post_data?.id)
                                    }}
                                >
                                    x
                                </CloseBtn>
                                <button
                                    onClick={() => {
                                        dispatch(moimUpdate(post_data))
                                        history.push('/moim/update')
                                    }}
                                >
                                    u
                                </button>
                            </div>
                        )}
                </TitleBox> */}
                <article className="moim-detail-article">
                    <p className="detail-location">서울특별시 강남구 역삼동</p>
                    <h6>{post_data?.title}</h6>
                    <article className="img-desc-container">
                        {post_data?.imgSrc !== null && (
                            <img src={post_data?.imgSrc} />
                        )}
                        <p className="detail-desc">{post_data?.contents}</p>
                    </article>
                    {Object.keys(post_data).length > 0 &&
                        user_nick !==
                            post_data?.MoimUsers[0]?.User.nickName && (
                            <button
                                onClick={() => {
                                    const data = {
                                        moimId: post_data?.id,
                                        userId: post_data?.MoimUsers[0]?.userId,
                                    }
                                    join(data)
                                }}
                            >
                                모임참여하기
                            </button>
                        )}
                    <section className="detail-post-info">
                        <span>
                            작성자 :{' '}
                            {Object.keys(post_data).length > 0 &&
                                post_data?.MoimUsers[0]?.User.nickName}
                        </span>
                        <span>{moment(post_data?.createdAt).fromNow()}</span>
                        <span>참여자 : {post_data?.MoimUsers?.length}</span>
                    </section>
                </article>
                <section className="detail-option">
                    <div className="option-child">
                        <LikeBtn
                            moim_id={post_data?.id}
                            likeUsers={post_data?.Likes}
                        />
                        좋아요 {post_data?.Likes?.length}개
                    </div>
                    <div className="option-child">
                        <Icon icon={'message'} size="20px" />
                        댓글 {post_data?.Comments?.length}개
                    </div>
                </section>
            </article>
            <div style={{ marginBottom: '60px', width: '100vw' }}>
                <MoimReview moimId={post_id} />
            </div>
            <section className="review-input-container">
                <ReviewInput
                    placeholder="댓글을 입력해주세요"
                    onChange={(e) => {
                        setContents(e.target.value)
                    }}
                    value={contents}
                ></ReviewInput>
                <SubmitBtn
                    onClick={() => {
                        commitsubmit()
                    }}
                >
                    등록
                </SubmitBtn>
            </section>
        </>
    )
}

const ReviewInput = styled.input`
    width: 280px;
    height: 40px;
    padding-left: 10px;
`

const SubmitBtn = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-left: 5px;
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

export default MoimDetail
