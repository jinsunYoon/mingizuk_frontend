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
import { loginMD } from '../redux/async/user'

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
            <FlexRow _width="100%" _justify="center" _border="none">
                <FlexColumn _width="360px" _height="" _border="none">
                    <SubTitle _margin="3rem">로그인</SubTitle>
                    <div>
                        <Text _margin="1rem">아이디</Text>
                        <Input
                            _ph="아이디를 입력해주세요."
                            _onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <div>
                        <Text _margin="1rem">비밀번호</Text>
                        <Input
                            _ph="비밀번호를 입력해주세요."
                            _onChange={(e) => setPwd(e.target.value)}
                            _type="password"
                        />
                    </div>
                    <ButtonFill
                        _width="91%"
                        _margin="5rem 0 0.5rem"
                        _padding="1rem"
                        _onClick={emailLogin}
                    >
                        이메일로 로그인하기
                    </ButtonFill>
                    <ButtonFill _width="91%" _margin="0.5rem" _padding="1rem">
                        카카오톡으로 로그인하기
                    </ButtonFill>
                    <ButtonFill _width="91%" _margin="0.5rem" _padding="1rem">
                        페이스북으로 로그인하기
                    </ButtonFill>
                </FlexColumn>
            </FlexRow>
        </>
    )
}

export default Login
