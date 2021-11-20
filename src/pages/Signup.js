import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { history } from '../redux/store'
import { signupMD } from '../redux/async/user'
import dotenv from 'dotenv'
import '../styles/auth/auth.scss'

const Signup = (props) => {
    dotenv.config()
    const dispatch = useDispatch()

    const [nickName, setNickName] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPw, setUserPw] = useState('')
    const [userPwChk, setUserPwChk] = useState('')

    const onClickSignup = () => {
        let emailExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.-]+)/
        let pwExp =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/

        if (
            userEmail === '' ||
            userPw === '' ||
            nickName === '' ||
            userPwChk === ''
        ) {
            window.alert('빈칸이 있습니다! 다 채워주세요!')
            return
        }
        if (emailExp.test(userEmail)) {
            window.alert('아이디가 이메일 형식에 맞지않습니다. 확인해주세요!')
            return
        }

        if (userPw.length < 8 || userPw.length > 17) {
            window.alert('비밀번호는 8~16자 사용하세요!')
        } else if (!pwExp.test(userPw)) {
            window.alert('영문 소문자, 숫자, 특수문자를 사용하세요!')
            return
        }

        if (userPw !== userPwChk) {
            alert('비밀번호가 틀립니다. 확인해주세요!')
            return
        }

        const data = {
            userEmail: userEmail,
            nickName: nickName,
            userPw: userPw,
            userPwChk: userPwChk,
        }
        dispatch(signupMD(data))
    }

    // enter키 이벤트
    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            onClickSignup()
        }
    }

    return (
        <div className="auth-layout">
            <h1 className="logo">Minggijeok</h1>
            <section className="contents">
                <div className="input-container">
                    <input
                        placeholder="닉네임을 입력하세요."
                        onChange={(e) => setNickName(e.target.value)}
                    />
                    <input
                        placeholder="이메일을 입력해주세요."
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        onChange={(e) => setUserPw(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호를 다시 입력해주세요."
                        onKeyPress={onKeyPress}
                        onChange={(e) => setUserPwChk(e.target.value)}
                    />
                </div>
                <div className="btn-container">
                    <button className="signup-btn" onClick={onClickSignup}>
                        회원가입하기
                    </button>
                    <button
                        className="main-btn"
                        onClick={() => {
                            history.push('/login')
                        }}
                    >
                        로그인 하기
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Signup
