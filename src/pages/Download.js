import React from 'react'
import '../styles/auth/onboarding.scss'
import { useReactPWAInstall } from 'react-pwa-install'
import myLogo from './logo192.png'

const Downlaod = () => {
    const { pwaInstall, supported, isInstalled } = useReactPWAInstall()
    const handleClick = () => {
        pwaInstall({
            title: '밍기적 다운받기',
            logo: myLogo,
        })
    }
    React.useEffect(() => {
        if (supported() && !isInstalled()) {
            handleClick()
        }
    }, [])
    const rionImg = {
        width: '6.7rem',
        height: 'auto',
    }

    const installEvent = () => {
        if (supported() && !isInstalled()) {
            handleClick()
        } else return
    }

    return (
        <div className="pleaz">
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
                    <div>
                        <div className="install-btn-warp">
                            <button
                                className="install-btn"
                                type="button"
                                onClick={() => installEvent()}
                            >
                                다운받기 - 앱으로만 이용 하실 수 있어요 : )
                            </button>
                            <h2>버튼이 안눌린다면?</h2>
                            <p className="install-desc">
                                1. 아이폰은 Safari , <br /> 안드로이드 /
                                데스크탑은 : chorme을 이용해주세요. <br />
                                (시크릿탭 제외)
                            </p>
                            <p className="install-desc">
                                2. 앱이 이미 깔려있다면 지우고 다시 깔아주세요.
                            </p>
                            <p className="install-desc">
                                3. 10초정도 기다렸다가 다시 눌러주세요.
                            </p>
                            <p className="install-desc">
                                * 오류 문의 : Mingizuk@gmail.com
                            </p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Downlaod
