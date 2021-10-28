import React from 'react'
import {ButtonFill, ButtonOutlined, FlexColumn, FlexRow, Img, Input, SubTitle, Text, Title} from '../elements/index'


const Login = () => {
    return (
        <>
        <FlexRow _width="100%" _justify="center"  _border="none">  
            <FlexColumn _width="360px" _height="" _border="none" _padding="50px 0">
                <SubTitle _margin="0 0 50px">
                    로그인
                </SubTitle>
                <div>
                    <Text _margin="30px 0 20px 0" _fontSize="1rem">
                        아이디
                    </Text>
                    <Input _ph="아이디를 입력해주세요."/>
                </div>
                <div>
                    <Text _margin="50px 0 20px 0">
                        비밀번호
                    </Text>
                    <Input _ph="비밀번호를 입력해주세요."/>
                </div>
                <ButtonFill _width="91%" _margin="6rem 0 0.5rem" _padding="1rem">
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
