import React from 'react'
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
import { MenuModal } from '../components/index'

const Header = () => {
    return (
        <React.Fragment>
            <div
                style={{
                    width: '100vw',
                    height: '2.85rem',
                    borderBottom: '1px solid black',
                    borderTop: '1px solid black',
                }}
            >
                <FlexColumn _width={'100%'} _height={'100%'} _border={'none'}>
                    <MenuModal />
                    <Text _fontSize={'1rem'} _fontWeight={'700'}>
                        밍기적
                    </Text>
                </FlexColumn>
            </div>
        </React.Fragment>
    )
}

export default Header
