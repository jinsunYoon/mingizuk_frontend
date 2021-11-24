import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { history } from '../../redux/store'

import styled from 'styled-components'
import { Text } from '../../elements/index'
import { NavBar } from '../index'

import { myMoimCommentMD } from '../../redux/async/myMoim'

import '../../styles/mypage/mymoim.scss'
import Icon from '../icons/Icon'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const MyComment = () => {
    const dispatch = useDispatch()
    const comment_list = useSelector((state) => state.myMoim.my_comments)
    console.log('><', 'comment', comment_list)

    React.useEffect(() => {
        dispatch(myMoimCommentMD())
    }, [])

    return (
        <>
            <section className="mymoim-contents">
                {comment_list === undefined ? (
                    <div className="contents-none">
                        <p>
                            내가 댓글을 단 모임이 없네요!
                            <br />
                            모임게시판에서 댓글을 달아보세요.
                        </p>
                        <button onClick={() => history.push('/moim')}>
                            모임게시판 바로가기
                        </button>
                    </div>
                ) : (
                    <>
                        {comment_list?.map((i, idx) => (
                            <div
                                className="postbox"
                                onClick={() =>
                                    history.push(`/moim/detail/${i?.moimId}`)
                                }
                                key={idx}
                            >
                                <div className="mycomment-titlebox">
                                    <span className="title">
                                        {i?.Moim?.title}

                                        <MoreVertIcon />
                                    </span>
                                    <span className="comments">
                                        내 댓글 : {i?.contents}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </>
                )}
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
