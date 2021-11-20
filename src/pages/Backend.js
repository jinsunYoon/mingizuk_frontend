import React from 'react'
import {
    SubTitle,
    Text,
    ButtonOutlined,
    FlexRow,
    FlexColumn,
} from '../elements/index'
import { history } from '../redux/store'

const Backend = () => {
    return (
        <>
            <FlexColumn _width="100vw" _height="100vh" _border="none">
                <SubTitle>
                    백엔드의 행복한
                    <br /> 테스트 공간
                </SubTitle>
                <Text>행복한 테스트 시간 가지시기 바랍니다.</Text>
                <ButtonOutlined
                    _onClick={() => {
                        console.log('행복한 백엔드의 테스트 버튼')
                    }}
                >
                    테스트 버튼
                </ButtonOutlined>
            </FlexColumn>
        </>
    )
}

export default Backend
