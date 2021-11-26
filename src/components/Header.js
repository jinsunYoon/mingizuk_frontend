import React from 'react'

import {
    ButtonOutlined,
    FlexRow,
    GoBack,
    GoMain,
    Text,
} from '../elements/index'

import { MenuModal } from '../components/index'

import { history } from '../redux/store'

const Header = (props) => {
    const { name, type } = props
    return (
        <React.Fragment>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    aligmItems: 'center',
                    width: '100vw',
                    height: '3rem',
                    borderTop: '1px solid #B8B8B8',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'fixed',
                    top: 0,
                    zIndex: 5,
                    backgroundColor: 'white',
                }}
            >
                <FlexRow
                    _width={'100%'}
                    _height={'100%'}
                    _border={'none'}
                    _others={'position:relative;max-width: 48rem;'}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '0.5rem',
                            left: '1rem',
                        }}
                    >
                        {type === 'menu' && <div />}
                        {type === 'back' && <GoBack />}
                        {type === 'goMain' && <GoMain />}
                    </div>
                    <ButtonOutlined
                        _border={'none'}
                        _width={'false'}
                        _others={'position: fixed, top:0;'}
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
