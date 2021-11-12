import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../components/Header'
import { kakaoLoginMD, loginMD } from '../redux/async/user'
import { history } from '../redux/store'
import '../styles/auth/auth.scss'

const Login = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState()
    const [pwd, setPwd] = useState()
    //const [disabled, setDisabled] = useState(true)

    const emailLogin = () => {
        const data = {
            userEmail: id,
            userPw: pwd,
        }
        dispatch(loginMD(data))
    }
    /* 로그인 버튼 비활성화(미완)
    
    useEffect(() => {
        if(id !== '' && pwd !==''){
            return setDisabled(false);
        }
            setDisabled(true)
        }, []);
    */

    // enter키 이벤트
    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            emailLogin()
        }
    }

    return (
        <>
            <div className="auth-layout">
                <h1 className="logo">Minggijuk</h1>
                <section className="contents">
                    <div className="input-container">
                        <input
                            placeholder="이메일를 입력해주세요."
                            onChange={(e) => setId(e.target.value)}
                        />
                        <input
                            placeholder="비밀번호를 입력해주세요."
                            onChange={(e) => setPwd(e.target.value)}
                            type="password"
                            onKeyPress={onKeyPress}
                        />
                    </div>
                    <div className="btn-container">
                        <button className="login-btn" onClick={emailLogin}>
                            로그인하기
                        </button>

                        <div className="slogin-title">
                            <hr />
                            <h3>소셜로그인</h3>
                            <hr />
                        </div>

                        <a
                            href="https://mingijuk.shop/api/auth/kakao"
                            className="kakao-btn"
                        >
                            카카오톡으로 로그인하기
                        </a>
                        <a
                            href="https://mingijuk.shop/api/auth/naver"
                            className="naver-btn"
                        >
                            네이버로 로그인하기
                        </a>
                        <a
                            href="https://mingijuk.shop/api/auth/google"
                            className="google-btn"
                        >
                            구글로 로그인하기
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login
