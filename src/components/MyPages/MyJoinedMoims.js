import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'

import Icon from '../icons/Icon'
import styled from 'styled-components'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import { Text } from '../../elements/index'
import { NavBar } from '../index'
import { myMoimJoinMD } from '../../redux/async/myMoim'

const MyJoin = () => {
    const dispatch = useDispatch()
    const join_list = useSelector((state) => state.myMoim.my_join)
    console.log('><', 'join', join_list)
    React.useEffect(() => {
        dispatch(myMoimJoinMD())
    }, [])

    return (
        <>
            <section className="mymoim-contents">
                {join_list?.map((i, idx) => (
                    <div
                        className="postbox"
                        onClick={() => {
                            history.push(`/moim/detail/${i?.moimId}`)
                        }}
                        key={idx}
                    >
                        <div className="contentsbox">
                            <span>서울특별시 강남구 역삼동</span>
                            <div>
                                <span className="title">{i?.Moim?.title}</span>
                                <span className="date">
                                    {i?.createdAt?.split(['T'])[0]}
                                </span>
                            </div>
                            <span _align="left">
                                {i?.Moim.MoimUsers[0]?.User?.nickName}
                            </span>
                        </div>
                        <div className="commentbox">
                            <div>
                                <FavoriteBorderIcon />
                                좋아요 {(i?.Moim?.Likes).length}
                            </div>
                            <div>
                                <ChatBubbleOutlineIcon />
                                댓글 {(i?.Moim?.Comments).length}개
                            </div>
                        </div>
                    </div>
                ))}
                <NavBar />
            </section>
        </>
    )
}

export default MyJoin
