import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { history } from '../../redux/store'

import styled from 'styled-components'
import { Text } from '../../elements/index'
import { NavBar } from '../index'

import { myMoimCommentMD } from '../../redux/async/myMoim'

import '../../styles/mypage/mymoim.scss'

const MyComment = () => {
    const dispatch = useDispatch()
    const comment_list = useSelector((state) => state.myMoim.my_comment_list)
    console.log('><', comment_list)

    React.useEffect(() => {
        dispatch(myMoimCommentMD())
    }, [])

    return (
        <>
            {comment_list?.map((comment_list, idx) => (
                <PostBox
                    onClick={() => history.push(`/moim/detail/${i.moimId}`)}
                    key={idx}
                >
                    <ContentBox>
                        <span className="title">
                            {comment_list?.Moim?.title}
                        </span>
                        <span className="contents">
                            {comment_list?.contents.slice(0, 5) + '...'}
                        </span>
                        <span className="nickname">
                            작성자 {comment_list?.User?.nickName}
                        </span>
                        <span className="date">
                            {comment_list?.createdAt?.split(['T'])[0]}
                        </span>
                    </ContentBox>
                </PostBox>
            ))}
            <NavBar />
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
