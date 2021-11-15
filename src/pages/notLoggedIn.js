import React from 'react'
import { history } from '../redux/store'
import '../styles/shared/auth.scss'

const notLoggedIn = () => {
    return (
        <>
            <div className="a-warp">
                <section className="unknown-container">
                    <p>
                        로그인이 필요합니다. <br /> 로그인을 해주세요.
                    </p>
                    <button onClick={() => history.push('./login')}>
                        로그인 하러 가기
                    </button>
                </section>
            </div>
        </>
    )
}

export default notLoggedIn
