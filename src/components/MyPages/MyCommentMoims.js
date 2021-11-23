import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { history } from '../../redux/store'

import styled from 'styled-components'
import { Text } from '../../elements/index'
import { NavBar } from '../index'

import { myMoimCommentMD } from '../../redux/async/myMoim'

import '../../styles/mypage/mymoim.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

const MyComment = () => {
    const dispatch = useDispatch()
    const comment_list = useSelector((state) => state.myMoim.my_comment_list)
    console.log('><', 'comment', comment_list)

    React.useEffect(() => {
        dispatch(myMoimCommentMD())
    }, [])

    return (
        <>
            <section className="mymoim-contents">
                {comment_list?.map((comment_list, idx) => (
                    <div
                        className="postbox"
                        onClick={() =>
                            history.push(`/moim/detail/${comment_list?.moimId}`)
                        }
                        key={idx}
                    >
                        <div className="contentsBox">
                            <span className="location">
                                
                            </span>
                            <div className="titlebox">
                                <span className="title">
                                    {comment_list?.Moim?.title}
                                </span>
                                <span className="comments">
                                    내 댓글 : {comment_list?.contents}
                                </span>
                            </div>

                            <div className="etcbox">
                                <span className="writer">
                                    작성자 {comment_list?.User?.nickName}
                                </span>
                                <span className="date">
                                    {comment_list?.createdAt?.split(['T'])[0]}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                <NavBar />
            </section>
        </>
    )
}

const ContentBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
`

const PostBox = styled.div`
    margin: 5vw auto;
    width: 90vw;
    height: auto;
    border: 1px solid #c4c4c4;
    position: relative;
`

export default MyComment
