import React from 'react'
import {ButtonFill, ButtonOutlined, FlexColumn, FlexRow, Img, Input, SubTitle, Text, Title} from '../elements/index'

const Signup = () => {
    return (
        <>
            <FlexColumn _width="360px" _height="">
                <SubTitle >
                    회원가입
                </SubTitle>
                <div>
                    <Text _margin="0" _padding="0" _align="">
                        닉네임
                    </Text>
                    <Input _ph="이름를 입력해주세요."/>
                </div>
                <div>
                    <Text _margin="30px 0 0 0" _padding="0" _align="">
                        이메일
                    </Text>
                    <Input _ph="아이디를 입력해주세요."/>
                </div>
                <div>
                    <Text _margin="30px 0 0 0" _padding="0" _align="">
                        비밀번호
                    </Text>
                    <Input _ph="비밀번호를 입력해주세요."/>
                </div>
                <div>
                    <Text _margin="30px 0 0 0" _padding="0" _align="">
                        비밀번호 재확인
                    </Text>
                    <Input _ph="비밀번호를 재확인해주세요."/>
                </div>
                <ButtonFill _width="91%" _margin="5rem" _padding="1rem">
                    회원가입하기
                </ButtonFill>
            </FlexColumn>
        </>
    )
}

export default Signup
