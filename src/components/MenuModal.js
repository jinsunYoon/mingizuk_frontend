import React from 'react'
import { FlexColumn, FlexRow, Text, ButtonOutlined } from '../elements'
import { AccountCircleRounded } from '@material-ui/icons'
import { ExitToAppRounded } from '@material-ui/icons'

import { Footer } from '../components/index'

import { history } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { logoutMD } from '../redux/async/user'

const MenuModal = () => {
    const dispatch = useDispatch()
    const is_login = useSelector((state) => state.user.isLogin)
    const logout = () => {
        if (window.confirm('로그아웃 하시겠습니까 ?')) {
            dispatch(logoutMD())
        } else {
            return
        }
    }
    const [modalStatus, setModalStatue] = React.useState(false)
    const nickName = useSelector((state) => state.user.userInfo.nickName)

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
                            position: 'absolute',
                            top: '2.5rem',
                            left: '-1rem',
                            maxWidth: '48rem',
                        }}
                        onClick={() => {
                            {
                                modalStatus && setModalStatue(false)
                            }
                        }}
                    ></div>
                    <div
                        style={{
                            width: '12.5rem',
                            height: '100vh',
                            padding: '1rem',
                            boxSizing: 'border-box',
                            backgroundColor: '#fff',
                            position: 'absolute',
                            top: '2rem',
                            left: '-1rem',
                        }}
                    >
                        <FlexColumn
                            _border={'none'}
                            _width={'100%'}
                            _height={'100%'}
                            _justify={'start'}
                        >
                            <FlexRow
                                _justify={'space-between'}
                                _border={'none'}
                                _others={
                                    'padding-bottom:0.313rem; border-bottom:1px solid #dbdbdb'
                                }
                            >
                                <FlexRow
                                    _border={'none'}
                                    _width={'false'}
                                    _justify={'start'}
                                >
                                    <AccountCircleRounded
                                        style={{
                                            marginRight: '0.625rem',
                                            color: '#6dddd0',
                                            fontSize: '1.688rem',
                                            background: '#fff',
                                            borderRadius: '3.125rem',
                                        }}
                                    />
                                    <Text _margin={'0px'} _padding={'0px'}>
                                        <span style={{ fontWeight: '700' }}>
                                            {nickName}
                                        </span>{' '}
                                        님
                                    </Text>
                                </FlexRow>
                                <div
                                    onClick={() => {
                                        logout()
                                    }}
                                >
                                    <ExitToAppRounded
                                        style={{
                                            color: '#c1c1c1',
                                            fontSize: '27px',
                                            background: '#fff',
                                            borderRadius: '3.125rem',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </div>
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
                                    <ButtonOutlined
                                        _border={'none'}
                                        _padding={'0px'}
                                        _margin={'0px'}
                                        _width={'false'}
                                        _onClick={() => {
                                            history.push('/users')
                                        }}
                                    >
                                        <Text
                                            _fontSize={'0.9rem'}
                                            _fontWeight={'700'}
                                            _padding={'1rem 0px 0px 0px'}
                                            _margin={'0px'}
                                        >
                                            마이페이지
                                        </Text>
                                    </ButtonOutlined>
                                    <ButtonOutlined
                                        _border={'none'}
                                        _padding={'0px'}
                                        _margin={'0px'}
                                        _width={'false'}
                                        _onClick={() => {
                                            history.push('/history')
                                        }}
                                    >
                                        <Text
                                            _fontSize={'0.9rem'}
                                            _fontWeight={'700'}
                                            _padding={'1rem 0px 0px 0px'}
                                            _margin={'0px'}
                                        >
                                            히스토리
                                        </Text>
                                    </ButtonOutlined>
                                    <ButtonOutlined
                                        _border={'none'}
                                        _padding={'0px'}
                                        _margin={'0px'}
                                        _width={'false'}
                                        _onClick={() => {
                                            history.push('/moim')
                                        }}
                                    >
                                        <Text
                                            _fontSize={'0.9rem'}
                                            _fontWeight={'700'}
                                            _padding={'1rem 0px 0px 0px'}
                                            _margin={'0px'}
                                        >
                                            모임 게시판
                                        </Text>
                                    </ButtonOutlined>
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
