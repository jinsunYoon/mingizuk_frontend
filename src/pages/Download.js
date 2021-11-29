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
    return (
        <div className="onBoarding-warp">
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
                        {supported() && !isInstalled() && (
                            <button
                                className="install-btn"
                                type="button"
                                onClick={handleClick}
                            >
                                다운받기 ( 앱으로만 이용 하실 수 있어요. )
                            </button>
                        )}
                        {!supported() && (
                            <button
                                className="install-btn"
                                type="button"
                                onClick={handleClick}
                            >
                                아이폰은 Safari , 안드로이드 / 데스크탑은 :
                                chorme을 이용해주세요.
                            </button>
                        )}
                        {isInstalled() && (
                            <button
                                className="install-btn"
                                type="button"
                                onClick={handleClick}
                            >
                                이미 기기에 밍기적이 있어요.
                            </button>
                        )}
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Downlaod
