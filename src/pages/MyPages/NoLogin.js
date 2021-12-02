import React from 'react'
import { history } from '../../redux/store'
import { Header } from '../../components'

const NoLogin = () => {
    return (
        <>
            <Header name="마이페이지" />
            <div className="contents">
                <p>
                    로그인이필요합니다.
                    <br />
                    로그인을해주세요
                </p>

                <button onClick={history.push('/login')}>
                    로그인 하러 가기
                </button>
            </div>
        </>
    )
}

export default NoLogin
