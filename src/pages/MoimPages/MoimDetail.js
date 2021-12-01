import React from 'react'
import { history } from '../../redux/store'
import { LikeBtn } from '../../elements'
import Icon from '../../components/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import {
    moimDetailMD,
    moimReviewCreateMD,
    moimDeleteMD,
    moimJoinMD,
    moimLeaveMD,
} from '../../redux/async/moim'
import MoimReview from '../../components/Moim/MoimReview'
import {
    moimUpdate,
    setChatHost,
    setLoadingFalse,
} from '../../redux/modules/moimSlice'
import '../../styles/moim/moim-detail.scss'
import 'moment/locale/ko'
import moment from 'moment'
import Swal from 'sweetalert2'
import Loading from '../../components/Loading'
import { changeNav } from '../../redux/modules/userSlice'
import { loginCheckMD } from '../../redux/async/user'
import { toast } from '../../shared/utils'

const MoimDetail = () => {
    const post_id = history?.location?.pathname?.split('/').slice(-1)
    const dispatch = useDispatch()
    const user_nick = useSelector((state) => state?.user?.userInfo?.nickName)
    const post_data = useSelector((state) => state?.moim?.moim_detail)
    const user_id = useSelector((state) => state?.user?.userInfo?.userID)
    const join_useres = post_data?.MoimUsers?.map(({ User }) => User.nickName)
    const is_loading = useSelector((state) => state?.moim?.detail_loading)
    const [optModalStatus, setOptModalStatus] = React.useState(false)

    React.useEffect(() => {
        dispatch(loginCheckMD())
        dispatch(changeNav('routine'))
    }, [])

    React.useEffect(() => {
        dispatch(moimDetailMD(post_id))
        return () => {
            dispatch(setLoadingFalse(false))
        }
    }, [])

    const checkIsFinsih = () => {
        return new Date(post_data?.finishAt).getTime() - new Date().getTime()
    }

    // * post delete
    const deletePost = (data) => {
        Swal.fire({
            text: '게시글을 지우시겠습니까 ?',
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
                dispatch(moimDeleteMD(data))
                Toast.fire({
                    icon: 'success',
                    title: '게시글이 지워졌습니다.',
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
        if (contents.length > 50) {
            toast(1000, true, 'error', '리뷰는 50자까지 가능합니다')
            return
        } else if (contents.length === 0) {
            toast(1000, true, 'error', '댓글 내용을 입력해주세요')

            return
        } else {
            dispatch(moimReviewCreateMD(data))
            setContents('')
        }
    }

    // * join Moim
    const join = (data) => {
        {
            Swal.fire({
                title: '모임에 참여 신청하기',
                text: '참여하시면 모임 참여자 채팅방에 참여 가능해요.',
                showCancelButton: true,
                confirmButtonColor: '#6B76FF',
                cancelButtonColor: '#DEDEDE',
                confirmButtonText: '참여',
                cancelButtonText: '취소',
                width: '30rem',
                height: '15rem',
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(moimJoinMD(data))
                }
            })
        }
    }

    // * leave Moim
    const leave = () => {
        const data = { moimId: Number(post_id), user: user_nick }

        Swal.fire({
            title: '모임을 그만하시겠어요 ?',
            text: '더 이상 모임 채팅방에 참여할 수 없어요.',
            showCancelButton: true,
            confirmButtonColor: '#6B76FF',
            cancelButtonColor: '#DEDEDE',
            confirmButtonText: '그만하기',
            cancelButtonText: '취소',
            width: '30rem',
            height: '15rem',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(moimLeaveMD(data))
            }
        })
    }

    return !is_loading ? (
        <p>
            <Loading />
        </p>
    ) : (
        <div>
            <article className="detail-layout">
                <article className="moim-detail-article">
                    <div className="location-btn">
                        <p className="detail-location">
                            {' '}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Icon
                                    icon="place"
                                    size="20px"
                                    color="#6B76FF"
                                />
                                {post_data?.location}
                            </div>
                        </p>
                        {Object.keys(post_data).length > 0 &&
                            post_data?.MoimUsers[0]?.User?.nickName ===
                                user_nick && (
                                <div
                                    className="opt-icon"
                                    onClick={() => {
                                        setOptModalStatus(true)
                                    }}
                                >
                                    <Icon icon={'opt-btn'} size="20px" />
                                </div>
                            )}
                    </div>
                    <h6>{post_data?.title}</h6>
                    <article className="img-desc-container">
                        {post_data?.imgSrc !== null && (
                            <div
                                className="divimg"
                                style={{
                                    backgroundImage: `url(${post_data?.imgSrc})`,
                                    marginTop: '1rem',
                                }}
                            ></div>
                        )}
                        <p className="detail-desc">{post_data?.contents}</p>
                    </article>

                    {!join_useres?.includes(user_nick) && (
                        <div>
                            {checkIsFinsih() > 0 ? (
                                <button
                                    className="post-detail-btn"
                                    onClick={() => {
                                        const data = {
                                            moimId: post_data?.id,
                                            userId: post_data?.MoimUsers[0]
                                                ?.userId,
                                            nickName: user_nick,
                                        }
                                        join(data)
                                    }}
                                >
                                    모임 참여하기
                                </button>
                            ) : (
                                <button className="not-allowed post-detail-btn">
                                    이미 종료된 모임입니다
                                </button>
                            )}
                        </div>
                    )}
                    {join_useres?.includes(user_nick) && (
                        <div>
                            {checkIsFinsih() > 0 ? (
                                <div className="join-user-container">
                                    <button
                                        className="join post-detail-btn"
                                        onClick={() => {
                                            history.push(
                                                `/moim/chat/${post_id}`
                                            )
                                            dispatch(
                                                setChatHost(join_useres[0])
                                            )
                                        }}
                                    >
                                        <Icon
                                            icon="message"
                                            size="24px"
                                            color="white"
                                        />
                                        채팅방 참여하기
                                    </button>
                                    {join_useres[0] !== user_nick && (
                                        <button
                                            className="post-detail-btn"
                                            onClick={() => {
                                                leave()
                                            }}
                                        >
                                            모임 그만하기
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <button className="not-allowed post-detail-btn">
                                    이미 종료된 모임입니다
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
                            user_id={user_id}
                        />
                        좋아요 {post_data?.Likes?.length}개
                    </div>
                    <div className="option-child">
                        <Icon icon={'message'} size="20px" />
                        댓글 {post_data?.Comments?.length}개
                    </div>
                </section>
                <div style={{ width: '100vw', maxWidth: '768px' }}>
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
                        <Icon icon={'right-tri'} size="20px" />
                    </button>
                </section>
            </article>
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
                                    dispatch(moimUpdate(post_data))
                                    history.push('/moim/update')
                                }}
                            >
                                <Icon icon="ic_edit" size="24px" />
                                <span>수정</span>
                            </button>
                            <button
                                onClick={() => {
                                    deletePost(post_data?.id)
                                }}
                            >
                                <Icon icon="Trash_light" size="24px" />
                                <span>삭제</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MoimDetail
