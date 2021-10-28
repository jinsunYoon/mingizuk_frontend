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
// import { actionCreator as userActions } from '../redux/modules/user'

const Signup = (props) => {
    const dispatch = useDispatch()

    const [nickName, setNickName] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPw, setUserPw] = useState('')
    const [userPwChk, setUserPwChk] = useState('')

    const onClickSignup = () => {
        //유효성검사
        let emailExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.-]+)/

        let pwExp = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/

        if (
            userEmail === '' ||
            userPw === '' ||
            nickName === '' ||
            userPwChk === ''
        ) {
            window.alert('빈칸이 있습니다! 다 채워주세요!')
            return
        }
        if(emailExp.test(userEmail)){
            window.alert('아이디가 이메일 형식에 맞지않습니다. 확인해주세요!')
            return;
        }

        if(7< userPw.length<17 ,pwExp.test(userPw)){
            window.alert('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요!')
            return;
        }

        if(userPw !== userPwChk){
            alert('비밀번호가 틀립니다. 확인해주세요!')
            return;
        }

        dispatch(userActions.user.getSignup(userEmail, nickName, userPw, userPwChk))        
    }
    /*(미완)
    //값이 입력되지 않았을시, 버튼 비활성화
        if(
            state.nickName !== '' &&
            state.userEmail !== '' &&
            state.userPw !== '' &&
            state.userpwChk !== ''
        ){
            dispatch(userActions.getSignup)
        }  
    };
    */

    return (
        <>
        <FlexRow _width="100%" _justify="center">  
            <FlexColumn _width="360px" _height="">
                <SubTitle>회원가입</SubTitle>

                <div>
                    <Text _margin="0">닉네임</Text>
                    <Input
                        _ph="어떻게 불러드릴까요?"
                        _onChange={(e) => setNickName(e.target.value)}
                    />
                </div>

                <div>
                    <Text _margin="30px 0 0 0">이메일</Text>
                    <Input
                        _ph="로그인할 이메일을 입력해주세요!"
                        _onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <Text _margin="30px 0 0 0">비밀번호</Text>
                    <Input
                        _type="password"
                        _ph="비밀번호를 입력해주세요!"
                        _onChange={(e) => setUserPw(e.target.value)}
                    />
                </div>

                <div>
                    <Text _margin="30px 0 0 0">비밀번호 재확인</Text>
                    <Input
                        _ph="비밀번호를 다시 해주세요!"
                        _onChange={(e) => setUserPwChk(e.target.value)}
                    />
                </div>

                <ButtonFill
                    _width="90%"
                    _margin="5rem"
                    _padding="1rem"
                    _onClick={onClickSignup}
                >
                    회원가입하기
                </ButtonFill>
            </FlexColumn>
        </FlexRow>
        </>
    )
}

export default Signup
