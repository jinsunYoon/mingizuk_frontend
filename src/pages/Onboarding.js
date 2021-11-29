import React from 'react'
import clsx from 'clsx'
import '../styles/auth/onboarding.scss'
import { history } from '../redux/store'

const Onboarding = () => {
    const [touchStart, setTouchStart] = React.useState(0)
    const [pageState, setPageState] = React.useState(-1)
    const movePage = (num) => {
        if (touchStart !== num && touchStart - 150 > num) {
            setPageState(pageState < 3 ? pageState + 1 : pageState)
        } else if (touchStart !== num && touchStart - 150 < num) {
            setPageState(pageState > 0 ? pageState - 1 : pageState)
        }
    }

    React.useEffect(() => {
        pageState === -1 &&
            setTimeout(() => {
                setPageState(0)
            }, 1000)
    }, [])

    const rionImg = {
        width: '6.7rem',
        height: 'auto',
    }

    const slideContent = [
        {
            title: '작은 운동 습관부터',
            desc: '밍기적과 함께 매일 소소한 건강 루틴을 함께해요.',
            src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/1-2.png',
        },
        {
            title: '귀여운 친구들을 모아보세요',
            desc: '루틴을 완료할 때마다 포인트가 쌓여 레벨업 합니다.',
            src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/2-2.png',
        },
        {
            title: '동작과 루틴 기록을 한눈에!',
            desc: '데일리 통계와 달성 현황을 제공합니다.',
            src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/3-2.png',
        },
        {
            title: '지역 기반 모임 참여',
            desc: '원하는 지역에서 건강한 습관 만들기 모임에 참여해보세요.',
            src: 'https://my-speak-app.s3.ap-northeast-2.amazonaws.com/4-2.png',
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
                        <article className="rion-main">
                            <img
                                style={rionImg}
                                src="https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png"
                            />
                            <h1
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                }}
                            >
                                Mingizuk
                            </h1>
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
