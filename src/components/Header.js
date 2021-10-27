import React from 'react'
import {ButtonFill, ButtonOutlined, FlexColumn, FlexRow, Img, Input, SubTitle, Text, Title} from '../elements/index'

const Header = () => {
    return (
        <>
            <FlexRow _justify="space-between">
                <div>로고</div>
                <ButtonOutlined>메뉴바</ButtonOutlined>
            </FlexRow>
        </>
    )
}

export default Header
