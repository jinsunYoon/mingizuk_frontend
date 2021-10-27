import React from 'react'
import styled from 'styled-components'
import { FlexColumn, FlexRow, Text, ButtonOutlined } from '../elements'
import { AccountCircleRounded } from '@material-ui/icons'
import { Footer } from '../components/index'

const MenuModal = () => {
    const [modalStatus, setModalStatue] = React.useState(false)
    return (
        <React.Fragment>
            {modalStatus && (
                <FlexRow _border={'none'}>
                    <div
                        style={{
                            width: '100vw',
                            height: '100vh',
                            padding: '1rem',
                            boxSizing: 'border-box',
                            backgroundColor: 'black',
                            opacity: '0.3',
                            position: 'fixed',
                            top: '46px',
                            left: '0rem',
                        }}
                        onClick={() => {
                            {
                                modalStatus && setModalStatue(false)
                            }
                        }}
                    ></div>
                    <div
                        style={{
                            width: '200px',
                            height: '100vh',
                            padding: '1rem',
                            boxSizing: 'border-box',
                            backgroundColor: '#fff',
                            position: 'fixed',
                            top: '46px',
                            left: '0rem',
                        }}
                    >
                        <FlexColumn
                            _border={'none'}
                            _width={'100%'}
                            _height={'100%'}
                            _justify={'start'}
                        >
                            <FlexRow
                                _justify={'start'}
                                _border={'none'}
                                _others={
                                    'padding-bottom:5px; border-bottom:1px solid #dbdbdb'
                                }
                            >
                                <AccountCircleRounded
                                    style={{
                                        marginRight: '10px',
                                        color: '#6dddd0',
                                        fontSize: '27px',
                                        background: '#fff',
                                        borderRadius: '50px',
                                    }}
                                />
                                <Text _margin={'0px'} _padding={'0px'}>
                                    <span style={{ fontWeight: '700' }}>
                                        밍기적
                                    </span>{' '}
                                    님
                                </Text>
                            </FlexRow>
                            <FlexColumn
                                _height={'100vh'}
                                _align={'start'}
                                _justify={'space-between'}
                                _border={'none'}
                            >
                                <FlexColumn
                                    _height={'false'}
                                    _align={'start'}
                                    _border={'none'}
                                >
                                    <Text
                                        _fontSize={'0.9rem'}
                                        _fontWeight={'700'}
                                        _padding={'1rem 0px 0px 0px'}
                                        _margin={'0px'}
                                    >
                                        마이페이지
                                    </Text>
                                    <Text
                                        _fontSize={'0.9rem'}
                                        _fontWeight={'700'}
                                        _padding={'1rem 0px 0px 0px'}
                                        _margin={'0px'}
                                    >
                                        어쩌고저쩌고
                                    </Text>
                                    <Text
                                        _fontSize={'0.9rem'}
                                        _fontWeight={'700'}
                                        _padding={'1rem 0px 0px 0px'}
                                        _margin={'0px'}
                                    >
                                        다른메뉴
                                    </Text>
                                </FlexColumn>
                                <Footer />
                            </FlexColumn>
                        </FlexColumn>
                    </div>
                </FlexRow>
            )}
            <ButtonOutlined
                navIcon
                _icon={'nav-menu'}
                _onClick={() => {
                    {
                        modalStatus
                            ? setModalStatue(false)
                            : setModalStatue(true)
                    }
                }}
            />
        </React.Fragment>
    )
}

export default MenuModal
