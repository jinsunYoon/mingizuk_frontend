import React, { useState } from 'react'
//* 컴포넌트, 엘리먼트
import { Header, NavBar, MyMoimToogleTab } from '../../components'
import { ActiveUnderLine } from '../../elements'
//* 페이지
import MyCreateMoim from '../../components/MyPages/MyCreatedMoims'
import MyJoinMoim from '../../components/MyPages/MyJoinedMoims'
import MyLikeMoim from '../../components/MyPages/MyLikedMoims'
import MyCommentMoim from '../../components/MyPages/MyCommentMoims'
// *스타일
import '../../styles/mypage/mymoim.scss'

const MyMoim = () => {
    const [tabState, setTabState] = useState('')

    return (
        <>
            <div className="mymoim-layout">
                <Header name="내모임" />
                <div className="toogle-layout">
                    <div className="toogle-container">
                        {tabState === 'a' ? (
                            <ActiveUnderLine
                                active={true}
                                _onClick={() => {
                                    setTabState('a')
                                }}
                            >
                                내가 개설한 모임
                            </ActiveUnderLine>
                        ) : (
                            <ActiveUnderLine
                                _onClick={() => {
                                    setTabState('a')
                                }}
                            >
                                내가 개설한 모임
                            </ActiveUnderLine>
                        )}
                        {tabState === 'b' ? (
                            <ActiveUnderLine
                                active={true}
                                _onClick={() => {
                                    setTabState('b')
                                }}
                            >
                                내가 참가한 모임
                            </ActiveUnderLine>
                        ) : (
                            <ActiveUnderLine
                                _onClick={() => {
                                    setTabState('b')
                                }}
                            >
                                내가 참가한 모임
                            </ActiveUnderLine>
                        )}
                        {tabState === 'c' ? (
                            <ActiveUnderLine
                                active={true}
                                _onClick={() => {
                                    setTabState('c')
                                }}
                            >
                                좋아요 한 모임
                            </ActiveUnderLine>
                        ) : (
                            <ActiveUnderLine
                                _onClick={() => {
                                    setTabState('c')
                                }}
                            >
                                좋아요 한 모임
                            </ActiveUnderLine>
                        )}
                        {tabState === 'd' ? (
                            <ActiveUnderLine
                                active={true}
                                _onClick={() => {
                                    setTabState('d')
                                }}
                            >
                                내가 단 댓글
                            </ActiveUnderLine>
                        ) : (
                            <ActiveUnderLine
                                _onClick={() => {
                                    setTabState('d')
                                }}
                            >
                                내가 단 댓글
                            </ActiveUnderLine>
                        )}
                    </div>
                </div>
                <div className="mymoim-list">
                    {tabState === 'a' && <MyCreateMoim />}
                    {tabState === 'b' && <MyJoinMoim />}
                    {tabState === 'c' && <MyLikeMoim />}
                    {tabState === 'd' && <MyCommentMoim />}
                </div>
            </div>
        </>
    )
}

export default MyMoim
