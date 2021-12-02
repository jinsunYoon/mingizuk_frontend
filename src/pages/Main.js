import React from 'react'
import {
    FlexRow,
    FlexColumn,
    Img,
    ButtonOutlined,
    Text,
} from '../elements/index'
import { CharacterModal, MainRoutineList } from '../components/index'
import { setFakeResult, setResult } from '../redux/modules/completeSlice'

import { history } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'

import { loginCheckMD } from '../redux/async/user'
import { getMainRoutineMD } from '../redux/async/routine'
import Time from '../elements/Time'
import styled from 'styled-components'
import { chageMyHabitModal } from '../redux/modules/routineSlice'
import ActionStart from '../components/ActionStart'
import HabitTraker from '../components/Routine/HabitTraker'
import { getCharacterMD } from '../redux/async/character'
import { changeNav } from '../redux/modules/userSlice'

const Main = (props) => {
    const dispatch = useDispatch()

    const is_login = useSelector((state) => state.user.isLogin)
    const mainRoutine = useSelector((state) => state.setAction.mainRoutine)

    const isMain = useSelector((state) => state.setAction.isMain)
    const nickName = useSelector((state) => state.user.userInfo.nickName)
    const charList = useSelector((state) => state.character.charList)
    const curChara =
        charList.length > 0 && charList[charList.length - 1].charName

    const ActionFins = mainRoutine?.Actions?.map((action) => action?.ActionFins)
    const finDate = ActionFins?.map((fin) => fin[fin.length - 1].date)
    const fins = finDate?.filter((fin) => fin !== null)

    const array = []
    for (let i = 0; i < fins?.length; i++) {
        array.push('result')
    }

    React.useEffect(() => {
        dispatch(loginCheckMD())
        dispatch(changeNav('home'))
        dispatch(getMainRoutineMD())

        if (array.length !== 0) {
            dispatch(setResult(array))
            dispatch(setFakeResult(array))
        } else if (array.length == 0) {
            dispatch(setResult([]))
            dispatch(setFakeResult([]))
        }
    }, [array.length])

    console.log(']]', isMain)
    if (isMain) {
        return (
            <React.Fragment>
                <Container>
                    <FlexColumn
                        _width={'100%'}
                        _height={'100%'}
                        _padding={'2.938rem 1rem 4.063rem 1rem'}
                        _others={'box-sizing: border-box; max-width: 48rem'}
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
                            <FlexRow
                                _width={'false'}
                                _border={'none'}
                                _bgColor={'none'}
                                _align={'end'}
                                _margin={'0px 0px 0.5rem 0px'}
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
                                    총 {mainRoutine?.Actions?.length}개의 동작
                                </Text>
                            </FlexRow>
                            <FlexColumn
                                _width={'100%'}
                                _height={'100%'}
                                _padding={'1rem 0'}
                                _others={
                                    'border-radius: 0.5rem; min-height:11.25rem'
                                }
                            >
                                <FlexRow
                                    _justify={'start'}
                                    _width={'100%'}
                                    _border={'none'}
                                    _others={'border-radius: 0.5rem;'}
                                >
                                    <Text
                                        _fontSize={'1rem'}
                                        _color={'#5C5C5C'}
                                        _padding={'0 0 1rem 1rem'}
                                    >
                                        {mainRoutine.routineName}
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
                            <HabitTraker />
                        </div>

                        <FlexColumn
                            _width={'100%'}
                            _height={'100%'}
                            _margin={'0 0 1rem 0 '}
                            _border={'none'}
                            _bgColor={'none'}
                        >
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_GetE9cIdFGLfQ12qsuPy0_SIF4Mnl89suVUsr58J0lxSYQ/viewform">
                                <Img
                                    _width={'100%'}
                                    _height={'100%'}
                                    _src={
                                        'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/48rem.png'
                                    }
                                />
                            </a>
                        </FlexColumn>
                    </FlexColumn>
                </Container>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Container>
                <FlexColumn
                    _width={'100%'}
                    _height={'100%'}
                    _padding={'2.938rem 1rem 4.063rem 1rem'}
                    _others={'box-sizing: border-box; max-width: 48rem'}
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
                                총 0개의 동작
                            </Text>
                        </FlexRow>
                        {curChara ? (
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
                                    아직 지정된 메인루틴이 없습니다 !
                                    <br />
                                    메인루틴 설정부터 해주세요~ 💪
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
                                    메인루틴 설정하기
                                </ButtonOutlined>
                            </FlexColumn>
                        ) : (
                            <FlexColumn
                                _width={'100%'}
                                _height={'100%'}
                                _others={
                                    'border-radius: 0.5rem; min-height:11.25rem'
                                }
                            >
                                <Text _fontSize={'0.875rem'} _color={'#8F8F8F'}>
                                    아직 캐릭터를 받지 않으셨군요!
                                    <br />
                                    캐릭터를 먼저 받아주세요 ! 😉
                                </Text>
                            </FlexColumn>
                        )}
                    </FlexColumn>
                    <div
                        onClick={() => {
                            dispatch(chageMyHabitModal(false))
                        }}
                    >
                        <HabitTraker />
                    </div>
                    <FlexColumn
                        _width={'100%'}
                        _height={'100%'}
                        _margin={'0 0 1rem 0 '}
                        _border={'none'}
                        _bgColor={'none'}
                    >
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_GetE9cIdFGLfQ12qsuPy0_SIF4Mnl89suVUsr58J0lxSYQ/viewform">
                            <Img
                                _width={'100%'}
                                _height={'100%'}
                                _src={
                                    'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/48rem.png'
                                }
                            />
                        </a>
                    </FlexColumn>
                </FlexColumn>
            </Container>
        </React.Fragment>
    )
}

const TimeWarp = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`
const TextContainer = styled.div`
    width: 90vw;
    display: grid;
    grid-template-columns: 2fr 2fr 3fr;
    padding: 1rem 0;
    button {
        justify-self: end;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`

const Feedback = styled.div`
    display: flex;
    justify-contetns: center;
    align-items: center;
    text-align: center;
    font-size: 0.5rem;
    position: fixed;
    width: 80px;
    height: 80px;
    bottom: 70px;
    right: 20px;
    border-radius: 50%;
    background: cyan;
    color: $white;
`

export default Main
