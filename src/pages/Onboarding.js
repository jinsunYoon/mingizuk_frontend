import React from 'react'
import clsx from 'clsx'
import '../styles/auth/onboarding.scss'
import { history } from '../redux/store'

const Onboarding = () => {
    const [touchStart, setTouchStart] = React.useState(0)
    const [pageState, setPageState] = React.useState(0)
    const movePage = (num) => {
        if (touchStart - 150 > num) {
            setPageState(pageState < 5 ? pageState + 1 : pageState)
        } else if (touchStart - 150 < num) {
            setPageState(pageState > 0 ? pageState - 1 : pageState)
        }
    }

    const title = [
        'Mingizuk',
        '사소한 운동 습관부터',
        '귀여운 친구들을 모아보세요 !',
        '액션과 루틴 기록을 한 눈에!',
        '지역 기반 모임 참여',
        '같이 밍기적을 일으키러 가볼까요 ?',
    ]
    const desc = [
        '',
        '거창한 운동일 필요 없어요 우리에게 필요한건 작은 밍기적 쉽고 사소한 운동 습관부터 길러보세요!',
        '운동을 함께 해줄 밍기적 캐릭터와 함께 습관을 길러보세요!',
        '세번째세번째',
        '혼자 하기 힘들다면 모임에 참여해서 운동 습관을 길러보세요',
        '',
    ]
    const img = ['', '1', '2', '3', '4', '5']

    return (
        <>
            <div className="onBoarding-warp">
                <section
                    className="onBoarding-container"
                    onTouchStart={(e) =>
                        pageState !== 5 &&
                        setTouchStart(e.changedTouches[0].clientX)
                    }
                    onTouchEnd={(e) =>
                        pageState !== 5 && movePage(e.changedTouches[0].clientX)
                    }
                >
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
                        <button
                            className={clsx(
                                '',
                                pageState === 4 && 'act-on-btn'
                            )}
                        />
                        <button
                            className={clsx(
                                '',
                                pageState === 5 && 'act-on-btn'
                            )}
                        />
                    </div>
                    <article className="onBoarding-group" ontouche>
                        <h1>{title[pageState]}</h1>
                        <p>{desc[pageState]}</p>
                        {/* <img src={img[pageState]} /> */}
                        {pageState !== 0 && <div>임시</div>}
                    </article>
                    {pageState === 5 && (
                        <button
                            className="getting-start"
                            onClick={() => {
                                history.push('/login')
                                console.log('<>')
                            }}
                        >
                            시작하기
                        </button>
                    )}
                </section>
            </div>
        </>
    )
}

export default Onboarding
