import React from 'react'
import clsx from 'clsx'
import '../styles/auth/onboarding.scss'
import { history } from '../redux/store'

const Onboarding = () => {
    const [touchStart, setTouchStart] = React.useState(0)
    const [pageState, setPageState] = React.useState(-1)
    const movePage = (num) => {
        if (touchStart - 150 > num) {
            setPageState(pageState < 3 ? pageState + 1 : pageState)
        } else if (touchStart - 150 < num) {
            setPageState(pageState > -1 ? pageState - 1 : pageState)
        }
    }

    const rionImg = {
        width: '6.7rem',
        height: 'auto',
    }

    const slideContent = [
        {
            title: '작은 운동 습관부터',
            desc: '거창한 운동일 필요 없어요. 밍기적과 함께 매일 소소한 건강 루틴을 함께해요.',
            src: 'https://test-pwa-kyuung.s3.ap-northeast-2.amazonaws.com/on1.png',
        },
        {
            title: '귀여운 친구들을 모아보세요',
            desc: '밍기적 캐릭터와 함께 밍기적 습관을 기르세요! 루틴을 완료할 때마다 포인트가 쌓여 레벨업 합니다.',
            src: 'https://test-pwa-kyuung.s3.ap-northeast-2.amazonaws.com/on2.png',
        },
        {
            title: '액션과 루틴 기록을 한눈에!',
            desc: '밍기적 캐릭터와 함께 밍기적 습관을 기르세요! 루틴을 완료할 때마다 포인트가 쌓여 성장합니다.',
            src: 'https://test-pwa-kyuung.s3.ap-northeast-2.amazonaws.com/on3.png',
        },
        {
            title: '지역 기반 모임 참여',
            desc: '원하는 지역에서 건강한 습관 만들기 모임을 참여해보세요.',
            src: 'https://test-pwa-kyuung.s3.ap-northeast-2.amazonaws.com/on4.png',
        },
    ]
    return (
        <>
            <div className="onBoarding-warp">
                <section
                    className="onBoarding-container"
                    onTouchStart={(e) =>
                        setTouchStart(e.changedTouches[0].clientX)
                    }
                    onTouchEnd={(e) => movePage(e.changedTouches[0].clientX)}
                >
                    {pageState !== -1 && (
                        <div className="onBoarding-btn-container">
                            <button
                                className={clsx(
                                    '',
                                    pageState === 0 && 'act-on-btn'
                                )}
                            />
                            <button
                                className={clsx(
                                    '',
                                    pageState === 1 && 'act-on-btn'
                                )}
                            />
                            <button
                                className={clsx(
                                    '',
                                    pageState === 2 && 'act-on-btn'
                                )}
                            />
                            <button
                                className={clsx(
                                    '',
                                    pageState === 3 && 'act-on-btn'
                                )}
                            />
                        </div>
                    )}
                    {pageState === -1 && (
                        <article
                            className="rion-main"
                            onClick={() => setPageState(1)}
                        >
                            <img
                                style={rionImg}
                                src="https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png"
                            />
                            <h1>Mingizuk</h1>
                        </article>
                    )}
                    {pageState !== -1 && (
                        <article className="onBoarding-group">
                            <h1>{slideContent[pageState].title}</h1>
                            <p>{slideContent[pageState].desc}</p>
                            <div>
                                <img src={slideContent[pageState].src} />
                            </div>
                        </article>
                    )}
                </section>
                {pageState !== -1 && pageState !== 3 && (
                    <div className="onBoarding-btn-box">
                        <button
                            onClick={() => {
                                setPageState(3)
                            }}
                        >
                            건너뛰기
                        </button>
                        <button
                            onClick={() =>
                                setPageState(
                                    pageState < 3 ? pageState + 1 : pageState
                                )
                            }
                        >
                            다음
                        </button>
                    </div>
                )}
                {pageState === 3 && (
                    <div className="onBoarding-btn-box">
                        <button
                            style={{
                                width: '100vw',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            onClick={() => {
                                history.push('/signup')
                            }}
                        >
                            밍기적 시작하기
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Onboarding
