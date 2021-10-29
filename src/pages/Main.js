import React from 'react'
import {
    FlexRow,
    FlexColumn,
    SubTitle,
    Title,
    Input,
    ButtonFill,
    ButtonOutlined,
    Text,
} from '../elements/index'
import { CharacterModal, Header } from '../components/index'
import Icon from '../components/icons/Icon'
import { history } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'

import { loginCheckMD } from '../redux/async/user'

const Main = (props) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(loginCheckMD())
    }, [])

    const is_login = useSelector((state) => state.user.isLogin)
    const presetRoutine = useSelector((state) => state.setAction.mainRoutine)
    console.log('프리셋', presetRoutine)

    if (is_login) {
        return (
            <React.Fragment>
                <Header />
                <FlexColumn
                    _width={'100vw'}
                    _height={'100%'}
                    _padding={'1rem'}
                    _others={'box-sizing: border-box;'}
                    _border={'none'}
                >
                    {/* <Text _fontSize={'1.5rem'} _color={'black'} _padding={'0px'}>
                    오늘의{' '}
                    <span style={{ fontWeight: '700', color: '#2baffd' }}>
                        밍기적
                    </span>
                    을 이루세요!
                </Text> */}
                    <CharacterModal />
                    <FlexColumn
                        _align={'start'}
                        _width={'100%'}
                        _border={'none'}
                    >
                        {' '}
                        <FlexRow _width={'false'} _border={'none'}>
                            <Text
                                _fontSize={'1.25rem'}
                                _margin={'0px 0.2rem 0px 0px'}
                                _padding={'0px'}
                            >
                                메인 루틴
                            </Text>
                            <Text _padding={'0px 0px 0.2rem 0px'}>
                                <ButtonOutlined
                                    _width={'false'}
                                    _margin={'none'}
                                    _padding={'none'}
                                    _border={'none'}
                                    _onClick={() => {
                                        history.push('/routine/mypage')
                                    }}
                                >
                                    <Icon icon={'create'} size={20} />
                                </ButtonOutlined>
                            </Text>
                        </FlexRow>
                        <Text
                            _fontSize={'0.9rem'}
                            _margin={'0px 0px 0.2rem 0px'}
                        >
                            <span style={{ fontWeight: '700' }}>
                                {presetRoutine?.name}
                            </span>{' '}
                            하는 날! 오늘도 화이팅!
                        </Text>
                        <FlexRow
                            _width={'100%'}
                            _height={'6.25rem'}
                            _border={'1px solid gray'}
                            _others={'box-sizing: border-box;'}
                            _justify={'space-around'}
                        >
                            {presetRoutine.actions.map((routine, idx) => {
                                return (
                                    <>
                                        <ButtonOutlined
                                            _border={'none'}
                                            _margin={'none'}
                                            _padding={'none'}
                                            _width={'false'}
                                        >
                                            <FlexColumn
                                                _width={'2.8rem'}
                                                _height={'100%'}
                                                _border={'none'}
                                            >
                                                <FlexRow
                                                    _width={'2rem'}
                                                    _height={'2rem'}
                                                    _bgColor={'lightgray'}
                                                    _border={'none'}
                                                    _margin={'10px 0px 0px 0px'}
                                                    _others={
                                                        'border-radius:1rem'
                                                    }
                                                ></FlexRow>
                                                <FlexRow
                                                    _width={'1rem'}
                                                    _height={'1rem'}
                                                    _bgColor={'black'}
                                                    _border={'none'}
                                                    _margin={
                                                        '-40px -25px 20px 0px'
                                                    }
                                                    _others={
                                                        'border-radius:1rem;'
                                                    }
                                                >
                                                    <Text _color={'#fff'}>
                                                        5
                                                    </Text>
                                                </FlexRow>
                                                <Text
                                                    _margin={'5px 0px 0px 0px'}
                                                    _fontSize={'0.75rem'}
                                                >
                                                    {routine?.actionName}
                                                </Text>
                                            </FlexColumn>
                                        </ButtonOutlined>
                                        {idx !== 4 && (
                                            <FlexRow
                                                _border={'none'}
                                                _width={'0.625rem'}
                                            >
                                                <Icon
                                                    icon={'chevron-right'}
                                                    size={24}
                                                />
                                            </FlexRow>
                                        )}
                                    </>
                                )
                            })}
                        </FlexRow>
                    </FlexColumn>
                </FlexColumn>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Header />
            <FlexColumn
                _width={'100vw'}
                _height={'100%'}
                _padding={'1rem'}
                _others={'box-sizing: border-box;'}
                _border={'none'}
            >
                {/* <Text _fontSize={'1.5rem'} _color={'black'} _padding={'0px'}>
                    오늘의{' '}
                    <span style={{ fontWeight: '700', color: '#2baffd' }}>
                        밍기적
                    </span>
                    을 이루세요!
                </Text> */}
                <CharacterModal />
                <FlexColumn _align={'start'} _width={'100%'} _border={'none'}>
                    {' '}
                    <FlexRow _width={'false'} _border={'none'}>
                        <Text
                            _fontSize={'1.25rem'}
                            _margin={'0px 0.2rem 0px 0px'}
                            _padding={'0px'}
                        >
                            메인 루틴
                        </Text>
                        <Text _padding={'0px 0px 0.2rem 0px'}>
                            <ButtonOutlined
                                _width={'false'}
                                _margin={'none'}
                                _padding={'none'}
                                _border={'none'}
                                _onClick={() => {
                                    history.push('/routine/mypage')
                                }}
                            >
                                <Icon icon={'create'} size={20} />
                            </ButtonOutlined>
                        </Text>
                    </FlexRow>
                    <FlexRow
                        _width={'100%'}
                        _height={'100px'}
                        _others={
                            'box-sizing: border-box; background-color: #C4C4C4;'
                        }
                    >
                        <ButtonOutlined
                            _width={'100%'}
                            _color={'black'}
                            _border={'none'}
                            _onClick={() => {
                                history.push('/routine/mypage')
                                window.location.reload()
                            }}
                        >
                            당신의 루틴을 설정해보세요!
                        </ButtonOutlined>
                    </FlexRow>
                </FlexColumn>
            </FlexColumn>
        </React.Fragment>
    )
}

export default Main
