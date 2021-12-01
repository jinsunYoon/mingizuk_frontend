import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { kakaoLoginMD, loginMD } from '../redux/async/user'
import { history } from '../redux/store'
import clsx from 'clsx'
import '../styles/auth/auth.scss'
import { toast } from '../shared/utils'

const Login = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState('')
    const [pwd, setPwd] = useState('')

    const emailLogin = () => {
        if (id === '') {
            toast(1000, false, 'error', '아이디를 입력해주세요.')
            return
        } else if (pwd === '') {
            toast(1000, false, 'error', '비밀번호를 입력해주세요.')
            return
        } else {
            const data = {
                userEmail: id,
                userPw: pwd,
            }
            dispatch(loginMD(data))
        }
    }

    // enter키 이벤트
    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            emailLogin()
        }
    }

    return (
        <>
            <div className="auth-layout">
                <section className="contents">
                    <div className="login-title">
                        <img src="https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png" />
                        <h1 className="logo">Mingizuk</h1>
                    </div>
                    <div className="login-container">
                        <input
                            placeholder="이메일을 입력하세요."
                            onChange={(e) => setId(e.target.value)}
                        />
                        <input
                            placeholder="비밀번호를 입력하세요."
                            onChange={(e) => setPwd(e.target.value)}
                            type="password"
                            onKeyPress={onKeyPress}
                        />
                    </div>
                    <div className="btn-container">
                        <button
                            className={clsx(
                                {
                                    'dis-btn': id === '' || pwd === '',
                                },
                                {
                                    'signup-btn': id !== '' && pwd !== '',
                                }
                            )}
                            onClick={emailLogin}
                        >
                            로그인하기
                        </button>
                        <button
                            className="login-btn"
                            onClick={() => history.push('/signup')}
                        >
                            회원가입하기
                        </button>

                        <div className="slogin-title">
                            <hr />
                            <h3>간편 로그인</h3>
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
