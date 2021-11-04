import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import Icon from '../../components/icons/Icon';
import { Text } from '../../elements/index'
import { NavBar } from '../../components/index'
import { myMoimLikeMD } from '../../redux/async/myMoim';


const MyLike = () => {
    const dispatch = useDispatch()
    const like_list = useSelector((state)=>state.myMoim.my_like)
    console.log(like_list , '좋아요 따른 리스트')

   React.useEffect(()=>{
        dispatch(myMoimLikeMD())
    },[])

    
    // 모임좋아요기능 끝나면, 마이모임좋아요기능 추가하기!
    return(
         <>
        <PostBox>
            <TitleBox>
                <div>
                    <Text 
                        _fontSize="16px"
                    >
                        {data.title}
                    </Text>
                    <Text 
                        _fontSize="11px" 
                        _color="#8f8f8f"
                        _align="left"
                        >
                        {data.publisedDate} 
                        {data.writer}
                    </Text>
                </div>
                <Text _fontSize="11px">참여자 : {data.people}</Text>
            </TitleBox>
        
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
        </PostBox>
        <NavBar/>
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


export default MyLike;