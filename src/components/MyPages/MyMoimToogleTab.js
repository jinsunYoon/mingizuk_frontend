import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ActiveUnderLine, FlexRow } from '../../elements';
import MyCreate from '../MyPages/MyCreate';
import MyJoin from '../MyPages/MyJoin';
import MyLike from '../MyPages/MyLike';
import MyComment from '../MyPages/MyComment'
import { myMoimCreateMD, myMoimJoinMD, myMoimLikeMD, myMoimCommentMD } from '../../redux/async/myMoim';

const MyMoimToogleTab = () => {
    const [tabState,setTabState] = useState('')
    const dispatch = useDispatch()
    

    return(
        <>
            <ToogleBox>
                {
                    tabState === 'a'
                    ?
                    <ActiveUnderLine  active={true} _onClick={()=>{setTabState('a') && dispatch(myMoimCreateMD())}}>
                    내가 개설한 모임
                    </ActiveUnderLine>
                    :
                    <ActiveUnderLine  _onClick={()=>{setTabState('a')}}>
                    내가 개설한 모임
                    </ActiveUnderLine>
                }
                {
                    tabState === 'b'
                    ?
                    <ActiveUnderLine active={true} _onClick={()=>{setTabState('b')}}>
                        내가 참가한 모임
                    </ActiveUnderLine>
                    :
                    <ActiveUnderLine _onClick={()=>{setTabState('b')}}>
                        내가 참가한 모임
                    </ActiveUnderLine> 
                }
                {
                    tabState === 'c'
                    ?
                    <ActiveUnderLine active={true} _onClick={()=>{setTabState('c')}}>
                        좋아요 한 모임
                    </ActiveUnderLine>
                    :
                    <ActiveUnderLine  _onClick={()=>{setTabState('c')}}>
                        좋아요 한 모임
                    </ActiveUnderLine>
                }
                {
                    tabState === 'd'
                    ?
                    <ActiveUnderLine  active={true} _onClick={()=>{setTabState('d') && dispatch(myMoimCreateMD()) }}>
                        내가 단 댓글
                    </ActiveUnderLine>
                    :
                    <ActiveUnderLine _onClick={()=>{setTabState('d')}}>
                        내가 단 댓글
                    </ActiveUnderLine>
                }
            </ToogleBox>
            <div style={{zIndex:10}}>
                {tabState === 'a' && <MyCreate/>}
                {tabState === 'b' && <MyJoin/>}
                {tabState === 'c' && <MyLike/>}
                {tabState === 'd' && <MyComment/> }
            </div>
        </>
    )
}

const ToogleBox = styled.div`
    display:flex;
    width:100vw;
`

export default MyMoimToogleTab;