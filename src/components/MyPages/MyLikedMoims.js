import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'

import styled from 'styled-components'
import Icon from '../icons/Icon'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import { Text } from '../../elements/index'
import { NavBar } from '../index'
import { myMoimLikeMD } from '../../redux/async/myMoim'

const MyLike = () => {
    const dispatch = useDispatch()
    const like_list = useSelector((state) => state.myMoim.my_likes)
    console.log('>>>', like_list)
    console.log

    React.useEffect(() => {
        dispatch(myMoimLikeMD())
    }, [])

    // 모임좋아요기능 끝나면, 마이모임좋아요기능 추가하기!
    return (
        <>
            <section className="mymoim-contents">
                {like_list === undefined ? (
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
                                                작성자
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
                                        <FavoriteBorderIcon />
                                        좋아요 {i?.Likes?.length}
                                    </div>
                                    <div>
                                        <ChatBubbleOutlineIcon />
                                        댓글 {i?.Comments?.length}개
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
