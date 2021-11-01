import React, { useState } from 'react'
import {
    ButtonFill,
    ButtonOutlined,
    FlexColumn,
    FlexRow,
    Img,
    Input,
    SubTitle,
    Text,
    Title,
} from '../elements/index'
import { useDispatch, useSelector } from 'react-redux'
import { signupMD } from '../redux/async/user'
import dotenv from 'dotenv'
import { Autorenew } from '@material-ui/icons'
// import { actionCreator as userActions } from '../redux/modules/user'
import styled from 'styled-components'

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
        dispatch(signupMD(data));

    }

    const handleKeypress = (e) => {
        if (e.key === 'Enter') onClickSignup()
    }
        return (
        <FlexRow _width="100vw" _justify="center" _border="none">
            <FlexColumn _width="70vw" _height="100vh" _border="none">
                <SubTitle _margin="0 0 1rem 0">회원가입</SubTitle>
                <Text _margin="2rem 0 1rem">닉네임</Text>
                <Input
                    _width="100%"
                    _ph="어떻게 불러드릴까요?"
                    _onChange={(e) => setNickName(e.target.value)}
                />

                <Text _margin="1rem 0 0.3rem">이메일</Text>
                <Input
                    _width="100%"
                    _ph="로그인할 이메일을 입력해주세요."
                    _onChange={(e) => setEmail(e.target.value)}
                />

                <Text _margin="1rem 0 0.3rem">비밀번호</Text>
                <Input
                    _width="100%"
                    _type="password"
                    _ph="비밀번호를 입력해주세요."
                    _onChange={(e) => setUserPw(e.target.value)}
                />

                <Text _margin="1rem 0 0.3rem">비밀번호 재확인</Text>
                <Input
                    _width="100%"
                    _type="password"
                    _ph="비밀번호를 다시 입력해주세요."
                    _onChange={(e) => setUserPwChk(e.target.value)}
                />
        
                <ButtonFill
                    _width="100%"
                    _margin="3rem"
                    _padding="0.8rem"
                    _onClick={onClickSignup}
                    _bgColor="#333"
                >
                    회원가입하기
                </ButtonFill>
            </FlexColumn>
        </FlexRow>
    )
}

export default Signup
