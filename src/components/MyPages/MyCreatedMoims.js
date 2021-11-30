import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'
import Icon from '../icons/Icon'
import { myMoimCreateMD } from '../../redux/async/myMoim'

const MyCreatedMoims = () => {
    const dispatch = useDispatch()
    const create_list = useSelector((state) => state.myMoim.my_moims)
    const loginuserNick = useSelector(
        (state) => state.user.userInfo.userNickname
    )
    useEffect(() => {
        dispatch(myMoimCreateMD())
    }, [])

    return (
        <>
            <section className="mymoim-contents">
                {create_list === undefined ? (
                    <div className="contents-none">
                        <p>
                            내가 생성한 모임이 없네요!
                            <br />
                            모임게시판에서 새로운 모임을 만들어보세요.
                        </p>
                        <button onClick={() => history.push('/moim')}>
                            모임게시판 바로가기
                        </button>
                    </div>
                ) : (
                    <>
                        {create_list?.map((i, idx) => (
                            <div
                                className="postbox"
                                onClick={() =>
                                    history.push(`/moim/detail/${i?.moimId}`)
                                }
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
                                    <div class="etcbox">
                                        <div>
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
                                        {i?.Moim?.Likes?.findIndex(
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
export default MyCreatedMoims
