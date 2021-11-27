import React from 'react'

//* router
import { history } from '../redux/store'

//* elements
import { Text, FlexColumn, FlexRow, ButtonOutlined } from '../elements/index'

//* icons
import Icon from '../components/icons/Icon'

const NavBar = () => {
    const navPosition = {
        width: '100vw',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 3,
        bottom: 0,
    }
    const [home, setHome] = React.useState(true)
    const [routine, setRoutine] = React.useState(false)
    const [moim, setMoim] = React.useState(false)
    const [historyI, setHistoryI] = React.useState(false)
    const [mypage, setMypage] = React.useState(false)

    return (
        <>
            <div style={navPosition}>
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
                                setHome(true)
                                setRoutine(false)
                                setMoim(false)
                                setHistoryI(false)
                                setMypage(false)
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
                                setHome(false)
                                setRoutine(true)
                                setMoim(false)
                                setHistoryI(false)
                                setMypage(false)
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
                                setHome(false)
                                setRoutine(false)
                                setMoim(true)
                                setHistoryI(false)
                                setMypage(false)
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
                                setHome(false)
                                setRoutine(false)
                                setMoim(false)
                                setHistoryI(true)
                                setMypage(false)
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
                                setHome(false)
                                setRoutine(false)
                                setMoim(false)
                                setHistoryI(false)
                                setMypage(true)
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
