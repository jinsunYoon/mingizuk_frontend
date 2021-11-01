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

import { history } from '../redux/store'

const Header = (props) => {
    const { name } = props
    return (
        <React.Fragment>
            <div
                style={{
                    width: '100vw',
                    height: '2.85rem',
                    borderBottom: '1px solid black',
                    borderTop: '1px solid black',
                    position: 'sticky',
                    top: '0',
                    left: '0',
                    zIndex: 3,
                }}
            >
                <FlexColumn _width={'100%'} _height={'100%'} _border={'none'}>
                    <MenuModal />
                    <ButtonOutlined
                        _border={'none'}
                        _onClick={() => {
                            history.push('/')
                        }}
                        _width="200px"
                    >
                        <Text _fontSize={'1rem'} _fontWeight={'700'}>
                            {name}
                        </Text>
                    </ButtonOutlined>
                </FlexColumn>
            </div>
        </React.Fragment>
    )
}

Header.defaultProps = {
    name: '밍기적',
}

export default Header
