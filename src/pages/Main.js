import React from 'react'
import {
    FlexRow,
    FlexColumn,
    SubTitle,
    ButtonOutlined,
    Text,
} from '../elements/index'
import {
    CharacterModal,
    MainRoutineList,
    Header,
    LevelBar,
} from '../components/index'
import { setResult } from '../redux/modules/completeSlice'
import Icon from '../components/icons/Icon'
import { history } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'

import { loginCheckMD } from '../redux/async/user'
import { getMainRoutineMD } from '../redux/async/routine'
import Time from '../elements/Time'
import styled from 'styled-components'
import HabitTrakerV2 from '../components/HabitTrakerV2'
import { chageMyHabitModal } from '../redux/modules/routineSlice'
import ActionStart from '../components/ActionStart'

const Main = (props) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(loginCheckMD())
        dispatch(getMainRoutineMD())
        // const actionFins = mainRoutine?.Actions?.ActionFins?.map(
        //     (fin, idx) => {}
        // )
    }, [])

    const is_login = useSelector((state) => state.user.isLogin)
    const mainRoutine = useSelector((state) => state.setAction.mainRoutine)
    console.log('메인루틴', mainRoutine)
    const isMain = useSelector((state) => state.setAction.isMain)
    const nickName = useSelector((state) => state.user.userInfo.nickName)

    if (is_login && isMain) {
        return (
            <React.Fragment>
                <Header />
                <FlexColumn
                    _width={'100vw'}
                    _height={'100%'}
                    _padding={'2.938rem 1rem 0px 1rem'}
                    _others={'box-sizing: border-box;'}
                    _border={'none'}
                    _bgColor={'#efefef'}
                    _justify={'start'}
                >
                    <TimeWarp>
                        <Time _format="YYYY년 MM월 DD일" />
                    </TimeWarp>
                    <FlexColumn
                        _width={'100%'}
                        _height={'false'}
                        _padding={'0.75rem 1rem'}
                        _others={'border-radius: 0.5rem'}
                        _align={'start'}
                        _justify={'start'}
                    >
                        <Text _color={'#6B76FF'} _fontSize={'0.75rem'}>
                            {nickName}님,
                        </Text>
                        <Text _fontSize={'1rem'} _fontWeight={'500'}>
                            오늘도 작은 밍기적을 만들어봐요!🙌
                        </Text>
                    </FlexColumn>
                    <CharacterModal />
                    <Text _fontSize={'0.875rem'} _fontWeight={'500'}>
                        캐릭터를 추가하세요
                    </Text>
                    <LevelBar />
                    <FlexColumn
                        _align={'start'}
                        _width={'100%'}
                        _height={'false'}
                        _border={'none'}
                        _bgColor={'none'}
                        _onClick={() => {
                            dispatch(chageMyHabitModal(false))
                        }}
                    >
                        {' '}
                        <FlexRow
                            _width={'false'}
                            _border={'none'}
                            _bgColor={'none'}
                            _align={'end'}
                            _margin={'0px 0px 1rem 0px'}
                        >
                            <Text
                                _fontSize={'1.125rem'}
                                _margin={'0px 0.563rem 0px 0px'}
                                _padding={'0px'}
                            >
                                오늘의 루틴
                            </Text>
                            <Text
                                _fontSize={'0.75rem'}
                                _padding={'0px 0px 0.2rem 0px'}
                                _color={'#6B76FF'}
                            >
                                총 {mainRoutine?.Actions?.length}개의 액션
                            </Text>
                        </FlexRow>
                        <FlexColumn
                            _width={'100%'}
                            _height={'false'}
                            _justify={'start'}
                            _others={
                                'border-radius: 0.5rem; min-height:11.25rem'
                            }
                        >
                            <FlexRow
                                _justify={'start'}
                                _align={'end'}
                                _width={'100%'}
                                _border={'none'}
                                _others={'border-radius: 0.5rem;'}
                            >
                                <Text
                                    _fontSize={'1rem'}
                                    _color={'#5C5C5C'}
                                    _padding={'1rem 0.3rem 0px 0.75rem'}
                                >
                                    {mainRoutine.routineName}
                                </Text>
                                <Text _padding={'0px 0px 0.15rem 0px'}>
                                    <Icon
                                        icon={'create'}
                                        color={'#5C5C5C'}
                                        size={19}
                                        _onClick={() => {
                                            history.push('/routine/mypage')
                                        }}
                                    />
                                </Text>
                            </FlexRow>
                            <MainRoutineList />
                            <ActionStart />
                        </FlexColumn>
                    </FlexColumn>
                    <div
                        onClick={() => {
                            dispatch(chageMyHabitModal(false))
                        }}
                    >
                        <SubTitle>Habit Traker</SubTitle>
                        <Text _fontSize="13px">
                            <Time _format="YYYY, MM" type="num" />
                        </Text>
                    </div>
                    <HabitTrakerWarp>
                        <HabitTrakerV2 />
                    </HabitTrakerWarp>
                </FlexColumn>
            </React.Fragment>
        )
    } else if (is_login) {
        return (
            <React.Fragment>
                <Header />
                <FlexColumn
                    _width={'100vw'}
                    _height={'100%'}
                    _padding={'2.938rem 1rem 0px 1rem'}
                    _others={'box-sizing: border-box;'}
                    _border={'none'}
                    _bgColor={'#efefef'}
                    _justify={'start'}
                >
                    <TimeWarp>
                        <Time _format="YYYY년 MM월 DD일" />
                    </TimeWarp>
                    <FlexColumn
                        _width={'100%'}
                        _height={'false'}
                        _padding={'0.75rem 1rem'}
                        _others={'border-radius: 0.5rem'}
                        _align={'start'}
                        _justify={'start'}
                    >
                        <Text _color={'#6B76FF'} _fontSize={'0.75rem'}>
                            {nickName}님,
                        </Text>
                        <Text _fontSize={'1rem'} _fontWeight={'500'}>
                            오늘도 작은 밍기적을 만들어봐요!🙌
                        </Text>
                    </FlexColumn>
                    <CharacterModal />
                    <Text _fontSize={'0.875rem'} _fontWeight={'500'}>
                        캐릭터를 추가하세요
                    </Text>
                    <LevelBar />
                    <FlexColumn
                        _align={'start'}
                        _width={'100%'}
                        _height={'false'}
                        _border={'none'}
                        _bgColor={'none'}
                        _onClick={() => {
                            dispatch(chageMyHabitModal(false))
                        }}
                    >
                        {' '}
                        <FlexRow
                            _width={'false'}
                            _border={'none'}
                            _bgColor={'none'}
                            _align={'end'}
                            _margin={'0px 0px 1rem 0px'}
                        >
                            <Text
                                _fontSize={'1.125rem'}
                                _margin={'0px 0.563rem 0px 0px'}
                                _padding={'0px'}
                            >
                                오늘의 루틴
                            </Text>
                            <Text
                                _fontSize={'0.75rem'}
                                _padding={'0px 0px 0.2rem 0px'}
                                _color={'#6B76FF'}
                            >
                                총 0개의 액션
                            </Text>
                        </FlexRow>
                        <FlexColumn
                            _width={'100%'}
                            _height={'100%'}
                            _justify={'start'}
                            _others={
                                'border-radius: 0.5rem; min-height:11.25rem'
                            }
                        >
                            <Text
                                _fontSize={'0.875rem'}
                                _color={'#8F8F8F'}
                                _padding={'2.25rem 0px 1.8rem 0px'}
                            >
                                아직 루틴이 없습니다.
                                <br />
                                루틴을 만들어주세요 ! 💪
                            </Text>
                            <ButtonOutlined
                                _width={'13rem'}
                                _others={'height:3rem'}
                                _margin={'0.5rem 0 1rem 0'}
                                _border={'1px solid #6B76FF'}
                                _color={'#6B76FF'}
                                _bradius={'0.5rem'}
                                _onClick={() => {
                                    history.push('/routine/mypage')
                                }}
                            >
                                루틴 만들기
                            </ButtonOutlined>
                        </FlexColumn>
                    </FlexColumn>
                    <div
                        onClick={() => {
                            dispatch(chageMyHabitModal(false))
                        }}
                    >
                        <SubTitle>Habit Traker</SubTitle>
                        <Text _fontSize="13px">
                            <Time _format="YYYY, MM" type="num" />
                        </Text>
                    </div>
                    <HabitTrakerWarp>
                        <HabitTrakerV2 />
                    </HabitTrakerWarp>
                </FlexColumn>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Header />
            <TimeWarp>
                <Time _format="YYYY년 MM월 DD일" />
            </TimeWarp>
            <FlexColumn
                _width={'100vw'}
                _height={'100%'}
                _padding={'0px 1rem'}
                _others={'box-sizing: border-box;'}
                _border={'none'}
                _bgColor={'#efefef'}
            >
                <CharacterModal />
                <FlexColumn
                    _align={'start'}
                    _width={'100%'}
                    _border={'none'}
                    _bgColor={'none'}
                    _height={'100%'}
                >
                    {' '}
                    <FlexRow
                        _width={'false'}
                        _border={'none'}
                        _bgColor={'none'}
                    >
                        <Text
                            _fontSize={'1.25rem'}
                            _margin={'0px 0.2rem 0px 0px'}
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
                                    window.alert('로그인 후 이용해주세요.')
                                }}
                            >
                                <Icon icon={'create'} size={20} />
                            </ButtonOutlined>
                        </Text>
                    </FlexRow>
                    <FlexRow
                        _width={'100%'}
                        _others={
                            'box-sizing: border-box; background-color: #C4C4C4; min-height=6.25rem'
                        }
                    >
                        <ButtonOutlined
                            _width={'100%'}
                            _color={'black'}
                            _border={'none'}
                            _others={'min-height:6.25rem'}
                            _onClick={() => {
                                window.alert('로그인 후 이용해주세요.')
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

const TimeWarp = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #efefef;
`

const HabitTrakerWarp = styled.section`
    box-sizing: content-box;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 180px;
`

export default Main
