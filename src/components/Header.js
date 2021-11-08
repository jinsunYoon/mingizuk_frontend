import React from 'react'

import { ButtonOutlined, FlexRow, GoBack, Text } from '../elements/index'

import { MenuModal } from '../components/index'

import { history } from '../redux/store'

const Header = (props) => {
    const { name, type } = props
    return (
        <React.Fragment>
            <div
                style={{
                    width: '100vw',
                    height: '3rem',
                    borderTop: '1px solid #B8B8B8',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    zIndex: '5',
                }}
            >
                <FlexRow _width={'100vw'} _height={'100%'} _border={'none'}>
                    {type === 'menu' && <MenuModal />}
                    {type === 'back' && <GoBack />}
                    <ButtonOutlined
                        _others={'position: fixed;'}
                        _border={'none'}
                        _width={'70%'}
                        _onClick={() => {
                            history.push('/')
                        }}
                    >
                        <Text
                            _fontSize={'1rem'}
                            _fontWeight={'700'}
                            _color={'#6B76FF'}
                            _font={"'Montserrat', sans-serif"}
                        >
                            {name}
                        </Text>
                    </ButtonOutlined>
                </FlexRow>
            </div>
        </React.Fragment>
    )
}

Header.defaultProps = {
    name: 'Mingizuk',
    type: 'menu',
}

export default Header
