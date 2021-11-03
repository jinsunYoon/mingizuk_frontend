import React from 'react'

import {
    ButtonFill,
    ButtonOutlined,
    FlexColumn,
    FlexRow,
    GoBack,
    Text,
    Title,
} from '../elements/index'

import { MenuModal } from '../components/index'

import { history } from '../redux/store'

const Header = (props) => {
    const { name, type } = props
    return (
        <React.Fragment>
            <div
                style={{
                    width: '100vw',
                    height: '2.85rem',
                    borderBottom: '1px solid black',
                    borderTop: '1px solid black',
                    position: 'sticy',
                    top: '0',
                    left: '0',
                    zIndex: 3,
                }}
            >
                <FlexRow _width={'100%'} _height={'100%'} _border={'none'}>
                    {type === 'menu' && <MenuModal />}
                    {type === 'back' && <GoBack />}
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
                </FlexRow>
            </div>
        </React.Fragment>
    )
}

Header.defaultProps = {
    name: '밍기적',
    type: 'menu',
}

export default Header
