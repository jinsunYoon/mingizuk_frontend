import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { kakaoLoginMD, loginMD, signupMD } from '../redux/async/user'
import { history } from '../redux/store'
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined'

const Login = () => {
    const dispatch = useDispatch()
    const [id, setId] = React.useState()
    const [pwd, setPwd] = React.useState()
    const emailLogin = () => {
        const data = {
            userEmail: id,
            userPw: pwd,
        }
        dispatch(loginMD(data))
    }

    return (
        <>
            <FlexRow _width="100vw" _justify="center" _border="none">
                <FlexColumn _width="70vw" _height="100vh" _border="none">
                    <SubTitle _margin="0 0 1rem 0">로그인</SubTitle>
                    <Text _margin="1rem">아이디</Text>
                    <Input
                        _width="100%"
                        _ph="아이디를 입력해주세요."
                        _onChange={(e) => setId(e.target.value)}
                    />
                    <Text _margin="1rem">비밀번호</Text>
                    <Input
                        _width="100%"
                        _ph="비밀번호를 입력해주세요."
                        _onChange={(e) => setPwd(e.target.value)}
                        _type="password"
                    />
                    <ButtonFill
                        _bgColor="#333"
                        _width="100%"
                        _margin="2rem 0 0.5rem 0"
                        _padding="0.8rem"
                        _onClick={() => {
                            history.push('/signup')
                        }}
                    >
                        회원가입 하러가기
                    </ButtonFill>
                    <ButtonFill
                        _width="100%"
                        _margin="0.3rem"
                        _bgColor="#333"
                        _padding="0.8rem"
                        _onClick={emailLogin}
                    >
                        로그인하기
                    </ButtonFill>
                    <ButtonFill
                        _width="100%"
                        _margin="0.3rem"
                        _padding="0.8rem"
                        _bgColor="#fef01b"
                        _color="#964b00"
                        _onClick={() => dispatch(kakaoLoginMD())}
                    >
                        카카오톡으로 로그인하기
                    </ButtonFill>
                    <ButtonFill
                        _width="100%"
                        _margin="0.3rem"
                        _padding="0.8rem"
                        _bgColor="#3b5998"
                    >
                        페이스북으로 로그인하기
                    </ButtonFill>
                </FlexColumn>
            </FlexRow>
        </>
    )
}

export default Login
