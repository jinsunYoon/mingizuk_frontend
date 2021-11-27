import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import { history } from '../redux/store'
import { signupMD } from '../redux/async/user'
import '../styles/auth/auth.scss'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 500,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
})

const Signup = () => {
    const dispatch = useDispatch()

    const [nickName, setNickName] = useState(false)
    const [userEmail, setEmail] = useState(false)
    const [userPw, setUserPw] = useState(false)
    const [userPwChk, setUserPwChk] = useState(false)

    let emailExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    let pwExp =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/

    const onChangeCheck = (el, exp) => {
        return exp.test(el)
    }

    const onClickSignup = () => {
        if (
            userEmail === false ||
            userPw === false ||
            nickName === false ||
            userPwChk === false
        ) {
            Toast.fire({
                icon: 'error',
                title: '빈칸을 전부 채워주세요.',
            })
            return
        } else if (userEmail.length > 30) {
            Toast.fire({
                icon: 'error',
                title: '이메일은 30자 이하로 채워주세요.',
            })
        } else if (nickName.length > 8) {
            Toast.fire({
                icon: 'error',
                title: '닉네임은 8자 이하로 채워주세요.',
            })
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
            <section className="contents">
                <div className="input-container">
                    <label htmlFor="email">아이디 (이메일 주소)</label>
                    <input
                        className={clsx(
                            '',
                            userEmail === '' && 'input-warning'
                        )}
                        id="email"
                        placeholder="name@example.com"
                        onChange={(e) =>
                            onChangeCheck(e.target.value, emailExp)
                                ? setEmail(e.target.value)
                                : setEmail('')
                        }
                    />
                    {userEmail === '' && (
                        <p className="auth-warning">
                            이메일 형식에 맞춰서 입력해주세요.
                        </p>
                    )}
                    <label htmlFor="password">비밀번호</label>
                    <input
                        className={clsx('', userPw === '' && 'input-warning')}
                        id="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        onChange={(e) =>
                            onChangeCheck(e.target.value, pwExp)
                                ? setUserPw(e.target.value)
                                : setUserPw('')
                        }
                    />
                    {userPw === '' && (
                        <p className="auth-warning">
                            특수문자, 영문, 숫자로 8자 이상이 필요합니다.
                        </p>
                    )}
                    <label htmlFor="passwordConfirm">비밀번호 확인</label>
                    <input
                        id="passwordConfirm"
                        type="password"
                        placeholder="비밀번호를 확인해주세요."
                        onChange={(e) =>
                            e.target.value === userPw
                                ? setUserPwChk(e.target.value)
                                : setUserPwChk('')
                        }
                    />
                    {userPwChk !== false && !userPwChk && (
                        <p className="auth-warning">
                            비밀번호가 일치하지 않아요. 다시 확인해주세요.
                        </p>
                    )}
                    <label htmlFor="nick">닉네임</label>
                    <input
                        id="nick"
                        placeholder="닉네임을 입력해주세요."
                        onChange={(e) => setNickName(e.target.value)}
                        onKeyPress={onKeyPress}
                    />
                </div>
                <div className="btn-container">
                    <button
                        className={clsx(
                            {
                                'dis-btn':
                                    !userEmail ||
                                    !nickName ||
                                    !userPw ||
                                    !userPwChk,
                            },
                            {
                                'signup-btn':
                                    !!userEmail &&
                                    !!nickName &&
                                    !!userPw &&
                                    !!userPwChk,
                            }
                        )}
                        onClick={onClickSignup}
                    >
                        가입하기
                    </button>
                    <button
                        className="main-btn"
                        onClick={() => {
                            history.push('/login')
                        }}
                    >
                        메인으로 돌아가기
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Signup
