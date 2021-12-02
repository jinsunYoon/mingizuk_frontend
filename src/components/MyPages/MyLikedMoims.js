import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'
import Icon from '../icons/Icon'

import { myMoimLikeMD } from '../../redux/async/myMoim'

const MyLike = () => {
    const dispatch = useDispatch()
    const like_list = useSelector((state) => state.myMoim.my_likes)
    const loginuserNick = useSelector(
        (state) => state.user.userInfo.userNickname
    )
    console.log('<>', like_list?.length)

    React.useEffect(() => {
        dispatch(myMoimLikeMD())
    }, [])

    return (
        <>
            <section className="mymoim-contents">
                {like_list?.length === 0 ? (
                    <div className="contents-none">
                        <p>
                            내가 좋아요한 모임이 없네요!
                            <br />
                            모임게시판에서 새로운 모임을 찾아보세요.
                        </p>
                        <button onClick={() => history.push('/moim')}>
                            모임게시판 바로가기
                        </button>
                    </div>
                ) : (
                    <>
                        {like_list?.map((i, idx) => (
                            <div
                                className="postbox"
                                onClick={() => {
                                    history.push(`/moim/detail/${i?.moimId}`)
                                }}
                                key={idx}
                            >
                                <div className="contentsbox">
                                    <span className="location">
                                        <Icon
                                            icon="place"
                                            size="20px"
                                            color="#6B76FF"
                                        />
                                        {i?.Moim?.location}
                                    </span>
                                    <div className="titlebox">
                                        <span className="title">
                                            {i?.Moim?.title}
                                        </span>
                                    </div>

                                    <div className="etcbox">
                                        <div>
                                            <span className="writer">
                                                {
                                                    i?.Moim?.MoimUsers[0]?.User
                                                        ?.nickName
                                                }
                                            </span>
                                            <span className="date">
                                                {
                                                    i?.Moim?.createdAt?.split([
                                                        'T',
                                                    ])[0]
                                                }
                                            </span>
                                        </div>
                                        <span className="join">
                                            <Icon
                                                icon="user-person"
                                                size="20px"
                                                color="#A5ABB0"
                                            />
                                            {i?.Moim?.MoimUsers?.length}
                                        </span>
                                    </div>
                                </div>
                                <div className="commentbox">
                                    <div>
                                        {i?.Likes?.findIndex(
                                            (User) =>
                                                User?.nickname === loginuserNick
                                        ) === -1 ? (
                                            <Icon
                                                icon="heart"
                                                size="1rem"
                                                color="lightgray"
                                            />
                                        ) : (
                                            <Icon
                                                icon="heart"
                                                size="1rem"
                                                color="#FD8787"
                                            />
                                        )}
                                        <span>
                                            좋아요
                                            {i?.Moim?.Likes?.length}개
                                        </span>
                                    </div>
                                    <div className="icon-text">
                                        <Icon
                                            icon={'message'}
                                            size="20px"
                                            color="#A5ABB0"
                                        />
                                        <span>
                                            댓글{i?.Moim?.Comments?.length}개
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </section>
        </>
    )
}

export default MyLike
