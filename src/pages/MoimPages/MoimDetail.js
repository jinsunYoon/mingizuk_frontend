import React from 'react'
import Header from '../../components/Header'
import { NavBar } from '../../components'
import { Text } from '../../elements'
import styled from 'styled-components'
import Icon from '../../components/icons/Icon'



    const data = {
        title: '주 2회 공원 걷기 모임',
        writer: 'kyuung',
        people: 8,
        publisedDate: '2021.10.11',
        likeCount: 5,
        commentCount: 3,
        contents:'서울 한강에서 매주 수,금 걷기운동 하실분 구합니다!'
    }

const MoimDetail = () => {
    return (
        <>
            <Header name="모임"/>
            <DetailBox>
                <TitleBox>
                    <div>
                        <Text _fontSize='16px'>
                            {data.title}
                        </Text>
                        <Text _fontSize="11px" _color="#8f8f8f">
                            {data.publisedDate}  {data.writer}
                        </Text>
                    </div>
                    <Text _fontSize="11px">
                        참여자 : {data.people}
                    </Text>
                </TitleBox>
                <ContentBox>
                    <Text _fontSize="14px">
                        {data.contents}
                    </Text>
                </ContentBox>
                <JoinBtn>
                    모임참여하기
                </JoinBtn>
                <EtcBox>
                <SmallBox>
                    <Icon icon={'favorite'} size="20px" /> 좋아요
                    {data.likeCount}개
                </SmallBox>
                <SmallBox>
                    <Icon icon={'message'} size="20px" />
                    댓글 {data.commentCount}개
                </SmallBox>
            </EtcBox>
            </DetailBox>
            <NavBar/>
        </>
    )
}

const TitleBox = styled.div`
    display:flex;
    justify-content: space-between;
    padding:10px
`

const ContentBox = styled.div`
    height:50vh;
    padding:10px;
`

const JoinBtn = styled.button`
    width:101px;
    height:29px;
    background-color:#c4c4c4;
    margin:0 auto;
    border:none;
    font-size:11px;
    position:absolute;
    left: 15px;
    top: 273px
`

const DetailBox = styled.div`
    margin:5vw auto;
    width:90vw;
    height:80vh;
    border:1px solid #c4c4c4;
    position:relative;
`
const SmallBox = styled.div`
    display: flex;
    height: inherit;
    margin:0 10px 0;
    justify-content: center;
    align-items: center;
    font-size:11px;
    color: #8f8f8f;
`

const EtcBox = styled.div`
    display: flex;
    flex-direction:row;
    text-align:left;
    width: 90vw;
    height: 45px;
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;
    margin-bottom: 10px;
`




export default MoimDetail
