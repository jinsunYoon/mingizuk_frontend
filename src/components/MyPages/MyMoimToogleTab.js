import React from 'react'
import { ActiveUnderLine, FlexRow } from '../../elements'
import MyCreate from './MyCreatedMoims'
import MyJoin from './MyJoinedMoims'
import MyLike from './MyLikedMoims'
import MyComment from './MyCommentMoims'
import '../../styles/mypage/mymoim.scss'

const MyMoimToogleTab = () => {
    return (
        <>
            <div className="toogle-layout">
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
                        내가 좋아요한 모임
                    </ActiveUnderLine>
                ) : (
                    <ActiveUnderLine
                        _onClick={() => {
                            setTabState('c')
                        }}
                    >
                        내가 좋아요한 모임
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
            <div className="mymoim-list" style={{ zIndex: 10 }}>
                {tabState === 'a' && <MyCreate />}
                {tabState === 'b' && <MyJoin />}
                {tabState === 'c' && <MyLike />}
                {tabState === 'd' && <MyComment />}
            </div>
        </>
    )
}

export default MyMoimToogleTab
