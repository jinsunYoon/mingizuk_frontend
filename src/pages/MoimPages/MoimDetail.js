import React from 'react'
import Header from '../../components/Header'
import { history } from '../../redux/store'
import { NavBar } from '../../components'
import { LikeBtn } from '../../elements'
import Icon from '../../components/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import {
    moimDetailMD,
    moimReviewCreateMD,
    moimDeleteMD,
    moimJoinMD,
    moimLikeMD,
    moimLeaveMD,
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
    const join_useres = post_data?.MoimUsers?.map(({ User }) => User.nickName)

    React.useEffect(() => {
        dispatch(moimDetailMD(post_id))
        // post_data?.Likes?.length
    }, [])

    console.log('><>', post_data)

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
            writer: user_nick,
        }
        dispatch(moimReviewCreateMD(data))
        setContents('')
    }

    // * join Moim
    const join = (data) => {
        const result = window.confirm('모임에 참여하시겠습니까?')
        if (result) {
            dispatch(moimJoinMD(data))
        } else return
    }

    // * leave Moim
    const leave = () => {
        const data = { moimId: Number(post_id), user: user_nick }
        const result = window.confirm('모임에 취소하시겠습니까?')
        if (result) {
            dispatch(moimLeaveMD(data))
        } else return
    }

    return (
        <>
            <Header name="모임" type="back" />
            <article className="detail-layout">
                <article className="moim-detail-article">
                    <div className="location-btn">
                        <p className="detail-location">
                            서울특별시 강남구 역삼동
                        </p>
                        {Object.keys(post_data).length > 0 &&
                            post_data?.MoimUsers[0]?.User?.nickName ===
                                user_nick && (
                                <div className="post-detail-btns-container">
                                    <button
                                        onClick={() => {
                                            deletePost(post_data?.id)
                                        }}
                                    >
                                        삭제
                                    </button>
                                    <button
                                        onClick={() => {
                                            dispatch(moimUpdate(post_data))
                                            history.push('/moim/update')
                                        }}
                                    >
                                        수정
                                    </button>
                                </div>
                            )}
                    </div>
                    <h6>{post_data?.title}</h6>
                    <article className="img-desc-container">
                        {post_data?.imgSrc !== null && (
                            <img src={post_data?.imgSrc} />
                        )}
                        <p className="detail-desc">{post_data?.contents}</p>
                    </article>
                    {!join_useres?.includes(user_nick) && (
                        <button
                            onClick={() => {
                                const data = {
                                    moimId: post_data?.id,
                                    userId: post_data?.MoimUsers[0]?.userId,
                                    nickName: user_nick,
                                }
                                join(data)
                            }}
                        >
                            모임참여하기
                        </button>
                    )}
                    {join_useres?.includes(user_nick) && (
                        <div className="join-user-container">
                            <button className="join" onClick={() => {}}>
                                <Icon
                                    icon="message"
                                    size="24px"
                                    color="white"
                                />
                                채팅방 참여하기
                            </button>
                            {join_useres[0] !== user_nick && (
                                <button
                                    className="leave"
                                    onClick={() => {
                                        leave()
                                    }}
                                >
                                    모임 그만하기
                                </button>
                            )}
                        </div>
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
                <div style={{ width: '100vw' }}>
                    <MoimReview moimId={post_id} />
                </div>
                <section className="review-input-container">
                    <input
                        placeholder="댓글을 입력해주세요"
                        onChange={(e) => {
                            setContents(e.target.value)
                        }}
                        value={contents}
                    />
                    <button
                        onClick={() => {
                            commitsubmit()
                        }}
                    >
                        등록
                    </button>
                </section>
            </article>
        </>
    )
}

export default MoimDetail
