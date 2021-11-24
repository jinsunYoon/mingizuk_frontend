import React, { useState } from 'react'
//* 리덕스, 데이터
import { useDispatch } from 'react-redux'
import { myMoimCreateMD } from '../../redux/async/myMoim'
//* 컴포넌트, 엘리먼트
import { ActiveUnderLine } from '../../elements'
//* 페이지
import MyCreateMoim from '../../components/MyPages/MyCreatedMoims'
import MyJoinMoim from '../../components/MyPages/MyJoinedMoims'
import MyLikeMoim from '../../components/MyPages/MyLikedMoims'
import MyCommentMoim from '../../components/MyPages/MyCommentMoims'
// * 스타일
import '../../styles/mypage/mymoim.scss'

const MyMoim = () => {
    const [tabState, setTabState] = useState('')
    const dispatch = useDispatch()
    // const state = useSelector((state) => state?>)
    React.useEffect(() => {
        setTabState('a')
    }, [])
    return (
        <>
            <div className="mymoim-layout">
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
