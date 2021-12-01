import React from 'react'

//* router
import { history } from '../redux/store'

//* elements
import { Text, FlexColumn, FlexRow, ButtonOutlined } from '../elements/index'

//* icons
import Icon from '../components/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import { loginCheckMD } from '../redux/async/user'

const NavBar = () => {
    const dispatch = useDispatch()
    const navPosition = {
        width: '100vw',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 3,
        bottom: 0,
    }

    const status = useSelector((state) => state?.user?.nav)
    const { historyI, home, moim, mypage, routine } = status

    return (
        <>
            <div style={navPosition} onClick={() => dispatch(loginCheckMD())}>
                <FlexRow
                    _border="none"
                    _width="100%"
                    _justify="space-between"
                    _others="max-width:48rem; border-top: 1px solid #BDC5CD;"
                >
                    <FlexColumn _border="none" _height="4.063rem">
                        <ButtonOutlined
                            _width="auto"
                            _padding="0"
                            _margin="0"
                            _color="#000"
                            _border="none"
                            _onClick={() => {
                                history.push('/')
                            }}
                        >
                            {home ? (
                                <div>
                                    <Icon
                                        icon="nav-home-active"
                                        size="18px"
                                        color="white"
                                    />
                                    <Text
                                        _padding="2px 0 0"
                                        _fontSize="11px"
                                        _color="#6B76FF"
                                    >
                                        홈
                                    </Text>
                                </div>
                            ) : (
                                <div>
                                    <Icon
                                        icon="nav-home-default"
                                        size="18px"
                                        color="white"
                                    />
                                    <Text
                                        _padding="2px 0 0"
                                        _fontSize="11px"
                                        _color="#2E3A59"
                                    >
                                        홈
                                    </Text>
                                </div>
                            )}
                        </ButtonOutlined>
                    </FlexColumn>
                    <FlexColumn _border="none" _height="65px">
                        <ButtonOutlined
                            _width="auto"
                            _padding="0"
                            _margin="0"
                            _color="#000"
                            _border="none"
                            _onClick={() => {
                                history.push('/routine/mypage')
                            }}
                        >
                            {routine ? (
                                <div>
                                    <Icon
                                        icon="nav-routine-active"
                                        size="22px"
                                        color="#6B76FF"
                                    />
                                    <Text
                                        _padding="2px 0 0"
                                        _fontSize="11px"
                                        _color="#6B76FF"
                                    >
                                        루틴
                                    </Text>
                                </div>
                            ) : (
                                <div>
                                    <Icon
                                        icon="nav-routine-default"
                                        size="22px"
                                        color="#93999F"
                                    />
                                    <Text
                                        _padding="2px 0 0"
                                        _fontSize="11px"
                                        _color="#2E3A59"
                                    >
                                        루틴
                                    </Text>
                                </div>
                            )}
                        </ButtonOutlined>
                    </FlexColumn>
                    <FlexColumn _border="none" _height="65px">
                        <ButtonOutlined
                            _width="auto"
                            _padding="0"
                            _margin="0"
                            _color="#000"
                            _border="none"
                            _onClick={() => {
                                history.push('/moim')
                            }}
                        >
                            {moim ? (
                                <div>
                                    <Icon
                                        icon="nav-moim-active"
                                        size="22px"
                                        color="white"
                                    />
                                    <Text
                                        _padding="2px 0 0"
                                        _fontSize="11px"
                                        _color="#6B76FF"
                                    >
                                        모임
                                    </Text>
                                </div>
                            ) : (
                                <div>
                                    <Icon
                                        icon="nav-moim-default"
                                        size="22px"
                                        color="white"
                                    />
                                    <Text
                                        _padding="2px 0 0"
                                        _fontSize="11px"
                                        _color="#2E3A59"
                                    >
                                        모임
                                    </Text>
                                </div>
                            )}
                        </ButtonOutlined>
                    </FlexColumn>
                    <FlexColumn _border="none" _height="65px">
                        <ButtonOutlined
                            _width="auto"
                            _padding="0"
                            _margin="0"
                            _color="#000"
                            _border="none"
                            _onClick={() => {
                                history.push('/history')
                            }}
                        >
                            {historyI ? (
                                <div>
                                    <Icon
                                        icon="nav-history-active"
                                        size="24px"
                                        color="white"
                                    />
                                    <Text
                                        _padding="2px 0 0"
                                        _fontSize="11px"
                                        _color="#6B76FF"
                                    >
                                        통계
                                    </Text>
                                </div>
                            ) : (
                                <div>
                                    <Icon
                                        icon="nav-history-default"
                                        size="24px"
                                        color="white"
                                    />
                                    <Text
                                        _padding="2px 0 0"
                                        _fontSize="11px"
                                        _color="#2E3A59"
                                    >
                                        통계
                                    </Text>
                                </div>
                            )}
                        </ButtonOutlined>
                    </FlexColumn>
                    <FlexColumn _border="none" _height="65px">
                        <ButtonOutlined
                            _width="auto"
                            _padding="0"
                            _margin="0"
                            _color="#000"
                            _border="none"
                            _onClick={() => {
                                history.push('/users')
                            }}
                        >
                            {mypage ? (
                                <div>
                                    <Icon
                                        icon="nav-mypage-active"
                                        size="24px"
                                        color="white"
                                    />
                                    <Text
                                        _padding="2px 0 0"
                                        _fontSize="11px"
                                        _color="#6B76FF"
                                    >
                                        마이페이지
                                    </Text>
                                </div>
                            ) : (
                                <div>
                                    <Icon
                                        icon="nav-mypage-default"
                                        size="24px"
                                        color="white"
                                    />
                                    <Text
                                        _padding="2px 0 0"
                                        _fontSize="11px"
                                        _color="#2E3A59"
                                    >
                                        마이페이지
                                    </Text>
                                </div>
                            )}
                        </ButtonOutlined>
                    </FlexColumn>
                </FlexRow>
            </div>
        </>
    )
}

export default NavBar
