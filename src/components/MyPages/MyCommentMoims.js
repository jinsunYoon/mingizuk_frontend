import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { history } from '../../redux/store'

import styled from 'styled-components'
import { Text } from '../../elements/index'
import { NavBar } from '../index'

import { myMoimCommentMD } from '../../redux/async/myMoim'

const MyComment = () => {
    const dispatch = useDispatch()
    const comment_list = useSelector((state) => state.myMoim.my_comment_list)
    console.log(comment_list, 'comment_list state에서 가져오는값')

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
                    <TitleBox>
                        <div>
                            <Text
                                _fontSize="11px"
                                _color="#8f8f8f"
                                _align="left"
                            >
                                모임: {comment_list?.Moim?.title}
                            </Text>
                            <Text _fontSize="16px" _margin='10px 0 0'>
                                {comment_list?.contents}
                            </Text>
                        </div>
                        <Text _fontSize="11px">
                            {comment_list?.createdAt?.split(['T'])[0]}
                        </Text>
                    </TitleBox>
                </PostBox>
            ))}
            <NavBar />
        </>
    )
}

const TitleBox = styled.div`
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