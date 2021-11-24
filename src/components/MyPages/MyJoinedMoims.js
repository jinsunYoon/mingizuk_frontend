import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'

import Icon from '../icons/Icon'
import { myMoimJoinMD } from '../../redux/async/myMoim'

const MyJoin = () => {
    const dispatch = useDispatch()
    const join_list = useSelector((state) => state.myMoim.my_joins)
    const loginuserNick = useSelector(
        (state) => state.user.userInfo.userNickname
    )
    console.log('>>>', 'join', join_list)
    React.useEffect(() => {
        dispatch(myMoimJoinMD())
    }, [])

    return (
        <>
            <section className="mymoim-contents">
                {join_list === undefined ? (
                    <div className="contents-none">
                        <p>
                            내가 참여한 모임이 없네요!
                            <br />
                            모임게시판에서 새로운 모임에 참가해보세요.
                        </p>
                        <button onClick={() => history.push('/moim')}>
                            모임게시판 바로가기
                        </button>
                    </div>
                ) : (
                    <>
                        {join_list?.map((i, idx) => (
                            <div
                                className="postbox"
                                onClick={() => {
                                    history.push(`/moim/detail/${i?.id}`)
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
                                        {i?.location}
                                    </span>
                                    <div className="titlebox">
                                        <span className="title">
                                            {i?.title}
                                        </span>
                                    </div>

                                    <div className="etcbox">
                                        <div>
                                            <span className="writer">
                                                {
                                                    i?.MoimUsers[0]?.User
                                                        ?.nickName
                                                }
                                            </span>
                                            <span className="date">
                                                {i?.createdAt?.split(['T'])[0]}
                                            </span>
                                        </div>
                                        <span className="join">
                                            <Icon
                                                icon="user-person"
                                                size="20px"
                                                color="#A5ABB0"
                                            />
                                            {i?.MoimUsers?.length}
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
                                            {i?.Likes?.length}개
                                        </span>
                                    </div>
                                    <div className="icon-text">
                                        <Icon
                                            icon={'message'}
                                            size="20px"
                                            color="#A5ABB0"
                                        />
                                        <span>댓글{i?.Comments?.length}개</span>
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

export default MyJoin
