import React from 'react'
import '../styles/auth/onboarding.scss'
import { useReactPWAInstall } from 'react-pwa-install'
import myLogo from './logo192.png'
import Loading from '../components/Loading'

const Downlaod = () => {
    const { pwaInstall, supported, isInstalled } = useReactPWAInstall()
    const [isLoading, setIsLoading] = React.useState(false)
    const [isSupport, setIsSupport] = React.useState(supported())
    const [descModal, setDescModal] = React.useState(false)

    const handleClick = () => {
        pwaInstall({
            title: '밍기적 다운받기',
            logo: myLogo,
        })
    }

    let checkInterver = setInterval(() => {
        console.log('**************************************************')
        setIsSupport(supported())
        let temp = supported()
        if (temp) {
            setIsSupport(supported())
            clearInterval(checkInterver)
        }
        setIsLoading(true)
    }, 2500)

    const rionImg = {
        width: '6.7rem',
        height: 'auto',
    }

    return (
        <>
            {!isLoading && <Loading />}
            {isLoading && (
                <div
                    className="onBoarding-warp"
                    onClick={() => setDescModal(false)}
                >
                    <section className="onBoarding-container">
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

                            <div onClick={(e) => e.stopPropagation()}>
                                {isSupport && !isInstalled() && (
                                    <div className="install-btn-warp">
                                        <button
                                            className="install-btn"
                                            type="button"
                                            onClick={handleClick}
                                        >
                                            다운받기 : 앱으로만 이용 하실 수
                                            있어요 ❤️
                                        </button>
                                    </div>
                                )}
                                {!isSupport && (
                                    <div className="install-btn-warp">
                                        <button
                                            className="install-btn"
                                            type="button"
                                            onClick={() => setDescModal(true)}
                                        >
                                            다운 받을 수 없습니다. ( 왜요 ? )
                                        </button>
                                    </div>
                                )}
                            </div>
                        </article>
                    </section>
                    {descModal && (
                        <div className="mingi-modal-container">
                            <p className="install-desc">
                                앱이 이미 깔려있다면{' '}
                                <strong>지우고 다시 깔아주세요</strong>
                                <br /> <br />
                                아이폰은 Safari , 안드로이드 / 데스크탑은 :
                                chorme을 이용해주세요. (시크릿탭 제외)
                                <br /> <br /> 위 조건을 모두 충족한다면, 약
                                10초만 기다려주세요. 밍기적이 버튼이 곧
                                바꿀거에요 !
                                <p className="error">
                                    오류 문의 : mingizuk@gmail.com
                                </p>
                            </p>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Downlaod
