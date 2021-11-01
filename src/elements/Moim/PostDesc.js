import React from 'react'
import styled from 'styled-components'
import { Text, FlexRow } from '..'
import Icon from '../../components/icons/Icon'

const PostDesc = () => {
    const data = {
        title: '주 2회 공원 걷기 모임',
        writer: 'kyuung',
        people: 8,
        publisedDate: '2021.10.11',
        likeCount: 5,
        commentCount: 3,
    }
    return (
        <>
            <PostDescBox>
                <Text _fontWeight="700" _fontSize="16px">
                    {data.title}
                </Text>
                <TextBox>{data.writer}</TextBox>
                <TextBox>{data.publisedDate}</TextBox>
                <TextBox>참여자 {data.people}명</TextBox>
            </PostDescBox>
            <EtcBox>
                <SmallBox>
                    <Icon icon={'favorite'} size="20px" /> 좋아요
                    {data.likeCount}개
                </SmallBox>
                <SmallBox>
                    <Icon icon={'message'} size="20px" />
                    댓글{data.commentCount}개
                </SmallBox>
            </EtcBox>
        </>
    )
}

const PostDescBox = styled.article`
    display: grid;
    grid-template-columns: 7fr 2fr;
    justify-items: start;
    align-items: center;
    width: 90vw;
    height: 90px;
    padding: 5px 20px;
    border: 1px solid lightgray;
`

const EtcBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 90vw;
    height: 45px;
    border: 1px solid lightgray;
    border-top: none;
    margin-bottom: 10px;
`

const SmallBox = styled.div`
    display: flex;
    height: inherit;
    justify-content: center;
    align-items: center;
`

const TextBox = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    color: lightgray;
    font-size: 14px;
`

export default PostDesc
