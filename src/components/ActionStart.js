import React, { useState } from 'react'
import styled from 'styled-components'
import {
    ButtonOutlined,
    ButtonFill,
    FlexColumn,
    FlexRow,
    Text,
    Img,
} from '../elements/index'
import { CancelRounded } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { actionCompleteMD } from '../redux/async/actionComplete'
import { actionRestartMD } from '../redux/async/actionComplete'
import {
    setActionBtn,
    setActionName,
    setModal,
    setImgSrc,
    setCompleteBtn,
    setDefaultBtn,
    setActionId,
    setRoutineId,
    setFakeResult,
    setResult,
    setFakeResultClear,
} from '../redux/modules/completeSlice'

const ActionStart = (props) => {
    const dispatch = useDispatch()

    const [actionModal, setActionModal] = useState(false)
    const [action1, setAction1] = useState(false)
    const [action2, setAction2] = useState(false)
    const [action3, setAction3] = useState(false)
    const [action4, setAction4] = useState(false)
    const [action5, setAction5] = useState(false)
    const [complete, setComplete] = useState(false)
    const [next, setNext] = useState(false)
    const [start, setContinue] = useState('시작하기')
    const [active, setActive] = useState(true)

    const mainRoutine = useSelector((state) => state.setAction.mainRoutine)
    const modalImg = useSelector((state) => state.actionComplete.ImgSrc)
    const result = useSelector((state) => state.actionComplete.result)
    const getActionId = useSelector((state) => state?.actionComplete?.actionId)
    const getRoutineId = useSelector(
        (state) => state?.actionComplete?.routineId
    )
    const getFakeResult = useSelector(
        (state) => state?.actionComplete?.fakeResult
    )
    console.log('가짜루틴완료', getFakeResult)

    const completeBtn = () => {
        setTimeout(function () {
            setActive(false)
            setComplete(true)
        }, 5000)
    }

    const successAction = () => {
        const data = { actionId: getActionId, routineId: getRoutineId }
        console.log('액션컴플리트데이터', data)
        dispatch(actionCompleteMD(data))
        setComplete(false)
        setNext(true)
    }

    const setId = (num) => {
        const thisActionId = mainRoutine?.Actions[num]?.id
        const thisRoutineId = mainRoutine?.Actions[num]?.routineId
        dispatch(setActionId(thisActionId))
        dispatch(setRoutineId(thisRoutineId))
        console.log('this 액션아디, 루틴아디', thisActionId, thisRoutineId)
    }

    return (
        <>
            {actionModal && (
                <FlexRow _border={'none'}>
                    <div
                        style={{
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'black',
                            padding: '0px',
                            opacity: '0.3',
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            zIndex: 4,
                        }}
                        onClick={() => {
                            setActionModal(false)
                        }}
                    ></div>
                    {action1 && (
                        <ModalEl>
                            {mainRoutine?.Actions?.length > 0 && (
                                <FlexColumn
                                    _border={'none'}
                                    _width={'100%'}
                                    _height={'100%'}
                                    _padding={'0px'}
                                >
                                    <Text
                                        _fontSize={'1rem'}
                                        _margin={'1rem 0 1rem 0'}
                                    >
                                        1/{mainRoutine?.Actions?.length}
                                    </Text>
                                    <Text _fontSize={'1rem'}>
                                        {mainRoutine?.Actions[0]?.actionName}{' '}
                                        {mainRoutine?.Actions[0]?.actionCnt}회
                                    </Text>
                                    <FlexRow
                                        _border={'1px solid #A5ABB0'}
                                        _width={'17.813rem'}
                                        _others={'border-radius: 10rem'}
                                        _margin={'1.875rem 0 0 0'}
                                    >
                                        <Text
                                            _fontSize={'0.8rem'}
                                            _color={'#A5ABB0'}
                                            _padding={'0.875rem 0px'}
                                        >
                                            시계 방향으로 한 번~ 반시계 방향으로
                                            한 번 !
                                        </Text>
                                    </FlexRow>
                                    <Img
                                        _src={modalImg}
                                        _width={'13rem'}
                                        _height={'13rem'}
                                        _bradius={'0px'}
                                        _others={'background-color:#fff'}
                                    ></Img>
                                </FlexColumn>
                            )}
                            {active && (
                                <ButtonFill
                                    _width={'9.375rem'}
                                    _others={'height:3rem;'}
                                    _cursor={'default'}
                                    _bgColor={'#ECECEC'}
                                    _margin={'0 0 1rem 0'}
                                    _padding={'0px'}
                                    _bradius={'0.5rem'}
                                    _color={'#999999'}
                                >
                                    완료!
                                    {completeBtn()}
                                </ButtonFill>
                            )}
                            {complete && (
                                <ButtonOutlined
                                    _width={'9.375rem'}
                                    _others={'height:3rem'}
                                    _border={'1px solid #6B76FF'}
                                    _margin={'0 0 1rem 0'}
                                    _bradius={'0.5rem'}
                                    _color={'#6B76FF'}
                                    _onClick={() => {
                                        successAction()
                                    }}
                                >
                                    완료!
                                    {setId(0)}
                                </ButtonOutlined>
                            )}
                            {next && (
                                <FlexRow
                                    _border={'none'}
                                    _width={'100%'}
                                    _margin={'0 0 2rem 0'}
                                >
                                    {}
                                    <ButtonOutlined
                                        _width={'9.375rem'}
                                        _others={'height:3rem'}
                                        _border={'1px solid #6B76FF'}
                                        _bradius={'0.5rem'}
                                        _color={'#6B76FF'}
                                        _margin={'0px'}
                                        _onClick={() => {
                                            setActionModal(false)
                                            dispatch(setFakeResult('result'))
                                        }}
                                    >
                                        메인으로
                                    </ButtonOutlined>
                                    {result?.length !==
                                        mainRoutine?.Actions?.length && (
                                        <ButtonFill
                                            _width={'9.375rem'}
                                            _others={'height:3rem'}
                                            _bgColor={'#6B76FF'}
                                            _bradius={'0.5rem'}
                                            _color={'#FFF'}
                                            _padding={'0px'}
                                            _margin={'0px 0px 0px 0.5rem'}
                                            _onClick={() => {
                                                setAction1(false)
                                                setAction2(true)
                                                setActive(true)
                                                setNext(false)
                                                dispatch(
                                                    setFakeResult('result')
                                                )
                                            }}
                                        >
                                            다음 운동으로
                                        </ButtonFill>
                                    )}
                                </FlexRow>
                            )}
                        </ModalEl>
                    )}

                    {action2 && getFakeResult?.length == 1 && (
                        <ModalEl>
                            {mainRoutine?.Actions?.length > 0 && (
                                <FlexColumn
                                    _border={'none'}
                                    _width={'100%'}
                                    _height={'100%'}
                                    _padding={'0px'}
                                >
                                    <Text
                                        _fontSize={'1rem'}
                                        _margin={'1rem 0 1rem 0'}
                                    >
                                        2/{mainRoutine?.Actions?.length}
                                    </Text>
                                    <Text _fontSize={'1rem'}>
                                        {mainRoutine?.Actions[1]?.actionName}{' '}
                                        {mainRoutine?.Actions[1]?.actionCnt}회
                                    </Text>
                                    <FlexRow
                                        _border={'1px solid #A5ABB0'}
                                        _width={'17.813rem'}
                                        _others={'border-radius: 10rem'}
                                        _margin={'1.875rem 0 0 0'}
                                    >
                                        <Text
                                            _fontSize={'0.8rem'}
                                            _color={'#A5ABB0'}
                                            _padding={'0.875rem 0px'}
                                        >
                                            시계 방향으로 한 번~ 반시계 방향으로
                                            한 번 !
                                        </Text>
                                    </FlexRow>
                                    <Img
                                        _src={modalImg}
                                        _width={'13rem'}
                                        _height={'13rem'}
                                        _bradius={'0px'}
                                        _others={'background-color:#fff'}
                                    ></Img>
                                </FlexColumn>
                            )}
                            {active && (
                                <ButtonFill
                                    _width={'9.375rem'}
                                    _others={'height:3rem;'}
                                    _cursor={'default'}
                                    _bgColor={'#ECECEC'}
                                    _margin={'0 0 1rem 0'}
                                    _padding={'0px'}
                                    _bradius={'0.5rem'}
                                    _color={'#999999'}
                                >
                                    완료!
                                    {completeBtn()}
                                </ButtonFill>
                            )}
                            {complete && (
                                <ButtonOutlined
                                    _width={'9.375rem'}
                                    _others={'height:3rem'}
                                    _border={'1px solid #6B76FF'}
                                    _margin={'0 0 1rem 0'}
                                    _bradius={'0.5rem'}
                                    _color={'#6B76FF'}
                                    _onClick={() => {
                                        successAction()
                                    }}
                                >
                                    완료!
                                    {setId(1)}
                                </ButtonOutlined>
                            )}
                            {next && (
                                <FlexRow
                                    _border={'none'}
                                    _width={'100%'}
                                    _margin={'0 0 2rem 0'}
                                >
                                    <ButtonOutlined
                                        _width={'9.375rem'}
                                        _others={'height:3rem'}
                                        _border={'1px solid #6B76FF'}
                                        _bradius={'0.5rem'}
                                        _color={'#6B76FF'}
                                        _margin={'0px'}
                                        _onClick={() => {
                                            setActionModal(false)
                                            dispatch(setFakeResult('result'))
                                        }}
                                    >
                                        메인으로
                                    </ButtonOutlined>
                                    {result?.length !==
                                        mainRoutine?.Actions?.length && (
                                        <ButtonFill
                                            _width={'9.375rem'}
                                            _others={'height:3rem'}
                                            _bgColor={'#6B76FF'}
                                            _bradius={'0.5rem'}
                                            _color={'#FFF'}
                                            _padding={'0px'}
                                            _margin={'0px 0px 0px 0.5rem'}
                                            _onClick={() => {
                                                setAction2(false)
                                                setAction3(true)
                                                setActive(true)
                                                setNext(false)
                                                dispatch(
                                                    setFakeResult('result')
                                                )
                                            }}
                                        >
                                            다음 운동으로
                                        </ButtonFill>
                                    )}
                                </FlexRow>
                            )}
                        </ModalEl>
                    )}

                    {action3 && getFakeResult?.length == 2 && (
                        <ModalEl>
                            {mainRoutine?.Actions?.length > 0 && (
                                <FlexColumn
                                    _border={'none'}
                                    _width={'100%'}
                                    _height={'100%'}
                                    _padding={'0px'}
                                >
                                    <Text
                                        _fontSize={'1rem'}
                                        _margin={'1rem 0 1rem 0'}
                                    >
                                        3/{mainRoutine?.Actions?.length}
                                    </Text>
                                    <Text _fontSize={'1rem'}>
                                        {mainRoutine?.Actions[2]?.actionName}{' '}
                                        {mainRoutine?.Actions[2]?.actionCnt}회
                                    </Text>
                                    <FlexRow
                                        _border={'1px solid #A5ABB0'}
                                        _width={'17.813rem'}
                                        _others={'border-radius: 10rem'}
                                        _margin={'1.875rem 0 0 0'}
                                    >
                                        <Text
                                            _fontSize={'0.8rem'}
                                            _color={'#A5ABB0'}
                                            _padding={'0.875rem 0px'}
                                        >
                                            시계 방향으로 한 번~ 반시계 방향으로
                                            한 번 !
                                        </Text>
                                    </FlexRow>
                                    <Img
                                        _src={modalImg}
                                        _width={'13rem'}
                                        _height={'13rem'}
                                        _bradius={'0px'}
                                        _others={'background-color:#fff'}
                                    ></Img>
                                </FlexColumn>
                            )}
                            {active && (
                                <ButtonFill
                                    _width={'9.375rem'}
                                    _others={'height:3rem;'}
                                    _cursor={'default'}
                                    _bgColor={'#ECECEC'}
                                    _margin={'0 0 1rem 0'}
                                    _padding={'0px'}
                                    _bradius={'0.5rem'}
                                    _color={'#999999'}
                                >
                                    완료!
                                    {completeBtn()}
                                </ButtonFill>
                            )}
                            {complete && (
                                <ButtonOutlined
                                    _width={'9.375rem'}
                                    _others={'height:3rem'}
                                    _border={'1px solid #6B76FF'}
                                    _margin={'0 0 1rem 0'}
                                    _bradius={'0.5rem'}
                                    _color={'#6B76FF'}
                                    _onClick={() => {
                                        successAction()
                                    }}
                                >
                                    완료!
                                    {setId(2)}
                                </ButtonOutlined>
                            )}
                            {next && (
                                <FlexRow
                                    _border={'none'}
                                    _width={'100%'}
                                    _margin={'0 0 2rem 0'}
                                >
                                    <ButtonOutlined
                                        _width={'9.375rem'}
                                        _others={'height:3rem'}
                                        _border={'1px solid #6B76FF'}
                                        _bradius={'0.5rem'}
                                        _color={'#6B76FF'}
                                        _margin={'0px'}
                                        _onClick={() => {
                                            setActionModal(false)
                                            dispatch(setFakeResult('result'))
                                        }}
                                    >
                                        메인으로
                                    </ButtonOutlined>
                                    {result?.length !==
                                        mainRoutine?.Actions?.length && (
                                        <ButtonFill
                                            _width={'9.375rem'}
                                            _others={'height:3rem'}
                                            _bgColor={'#6B76FF'}
                                            _bradius={'0.5rem'}
                                            _color={'#FFF'}
                                            _padding={'0px'}
                                            _margin={'0px 0px 0px 0.5rem'}
                                            _onClick={() => {
                                                setAction3(false)
                                                setAction4(true)
                                                setActive(true)
                                                setNext(false)
                                                dispatch(
                                                    setFakeResult('result')
                                                )
                                            }}
                                        >
                                            다음 운동으로
                                        </ButtonFill>
                                    )}
                                </FlexRow>
                            )}
                        </ModalEl>
                    )}

                    {action4 && getFakeResult?.length == 3 && (
                        <ModalEl>
                            {mainRoutine?.Actions?.length > 0 && (
                                <FlexColumn
                                    _border={'none'}
                                    _width={'100%'}
                                    _height={'100%'}
                                    _padding={'0px'}
                                >
                                    <Text
                                        _fontSize={'1rem'}
                                        _margin={'1rem 0 1rem 0'}
                                    >
                                        4/{mainRoutine?.Actions?.length}
                                    </Text>
                                    <Text _fontSize={'1rem'}>
                                        {mainRoutine?.Actions[3]?.actionName}{' '}
                                        {mainRoutine?.Actions[3]?.actionCnt}회
                                    </Text>
                                    <FlexRow
                                        _border={'1px solid #A5ABB0'}
                                        _width={'17.813rem'}
                                        _others={'border-radius: 10rem'}
                                        _margin={'1.875rem 0 0 0'}
                                    >
                                        <Text
                                            _fontSize={'0.8rem'}
                                            _color={'#A5ABB0'}
                                            _padding={'0.875rem 0px'}
                                        >
                                            시계 방향으로 한 번~ 반시계 방향으로
                                            한 번 !
                                        </Text>
                                    </FlexRow>
                                    <Img
                                        _src={modalImg}
                                        _width={'13rem'}
                                        _height={'13rem'}
                                        _bradius={'0px'}
                                        _others={'background-color:#fff'}
                                    ></Img>
                                </FlexColumn>
                            )}
                            {active && (
                                <ButtonFill
                                    _width={'9.375rem'}
                                    _others={'height:3rem;'}
                                    _cursor={'default'}
                                    _bgColor={'#ECECEC'}
                                    _margin={'0 0 1rem 0'}
                                    _padding={'0px'}
                                    _bradius={'0.5rem'}
                                    _color={'#999999'}
                                >
                                    완료!
                                    {completeBtn()}
                                </ButtonFill>
                            )}
                            {complete && (
                                <ButtonOutlined
                                    _width={'9.375rem'}
                                    _others={'height:3rem'}
                                    _border={'1px solid #6B76FF'}
                                    _margin={'0 0 1rem 0'}
                                    _bradius={'0.5rem'}
                                    _color={'#6B76FF'}
                                    _onClick={() => {
                                        successAction()
                                    }}
                                >
                                    완료!
                                    {setId(3)}
                                </ButtonOutlined>
                            )}
                            {next && (
                                <FlexRow
                                    _border={'none'}
                                    _width={'100%'}
                                    _margin={'0 0 2rem 0'}
                                >
                                    <ButtonOutlined
                                        _width={'9.375rem'}
                                        _others={'height:3rem'}
                                        _border={'1px solid #6B76FF'}
                                        _bradius={'0.5rem'}
                                        _color={'#6B76FF'}
                                        _margin={'0px'}
                                        _onClick={() => {
                                            setActionModal(false)
                                            dispatch(setFakeResult('result'))
                                        }}
                                    >
                                        메인으로
                                    </ButtonOutlined>
                                    {result?.length !==
                                        mainRoutine?.Actions?.length && (
                                        <ButtonFill
                                            _width={'9.375rem'}
                                            _others={'height:3rem'}
                                            _bgColor={'#6B76FF'}
                                            _bradius={'0.5rem'}
                                            _color={'#FFF'}
                                            _padding={'0px'}
                                            _margin={'0px 0px 0px 0.5rem'}
                                            _onClick={() => {
                                                setAction4(false)
                                                setAction5(true)
                                                setActive(true)
                                                setNext(false)
                                                dispatch(
                                                    setFakeResult('result')
                                                )
                                            }}
                                        >
                                            다음 운동으로
                                        </ButtonFill>
                                    )}
                                </FlexRow>
                            )}
                        </ModalEl>
                    )}
                    {action5 && getFakeResult?.length == 4 && (
                        <ModalEl>
                            {mainRoutine?.Actions?.length > 0 && (
                                <FlexColumn
                                    _border={'none'}
                                    _width={'100%'}
                                    _height={'100%'}
                                    _padding={'0px'}
                                >
                                    <Text
                                        _fontSize={'1rem'}
                                        _margin={'1rem 0 1rem 0'}
                                    >
                                        5/{mainRoutine?.Actions?.length}
                                    </Text>
                                    <Text _fontSize={'1rem'}>
                                        {mainRoutine?.Actions[4]?.actionName}{' '}
                                        {mainRoutine?.Actions[4]?.actionCnt}회
                                    </Text>
                                    <FlexRow
                                        _border={'1px solid #A5ABB0'}
                                        _width={'17.813rem'}
                                        _others={'border-radius: 10rem'}
                                        _margin={'1.875rem 0 0 0'}
                                    >
                                        <Text
                                            _fontSize={'0.8rem'}
                                            _color={'#A5ABB0'}
                                            _padding={'0.875rem 0px'}
                                        >
                                            시계 방향으로 한 번~ 반시계 방향으로
                                            한 번 !
                                        </Text>
                                    </FlexRow>
                                    <Img
                                        _src={modalImg}
                                        _width={'13rem'}
                                        _height={'13rem'}
                                        _bradius={'0px'}
                                        _others={'background-color:#fff'}
                                    ></Img>
                                </FlexColumn>
                            )}
                            {active && (
                                <ButtonFill
                                    _width={'9.375rem'}
                                    _others={'height:3rem;'}
                                    _cursor={'default'}
                                    _bgColor={'#ECECEC'}
                                    _margin={'0 0 1rem 0'}
                                    _padding={'0px'}
                                    _bradius={'0.5rem'}
                                    _color={'#999999'}
                                >
                                    완료!
                                    {completeBtn()}
                                </ButtonFill>
                            )}
                            {complete && (
                                <ButtonOutlined
                                    _width={'9.375rem'}
                                    _others={'height:3rem'}
                                    _border={'1px solid #6B76FF'}
                                    _margin={'0 0 1rem 0'}
                                    _bradius={'0.5rem'}
                                    _color={'#6B76FF'}
                                    _onClick={() => {
                                        successAction()
                                    }}
                                >
                                    완료!
                                    {setId(4)}
                                </ButtonOutlined>
                            )}
                            {next && (
                                <FlexRow
                                    _border={'none'}
                                    _width={'100%'}
                                    _margin={'0 0 2rem 0'}
                                >
                                    <ButtonOutlined
                                        _width={'9.375rem'}
                                        _others={'height:3rem'}
                                        _border={'1px solid #6B76FF'}
                                        _bradius={'0.5rem'}
                                        _color={'#6B76FF'}
                                        _margin={'0px'}
                                        _onClick={() => {
                                            setActionModal(false)
                                            dispatch(setFakeResult('result'))
                                        }}
                                    >
                                        메인으로
                                    </ButtonOutlined>
                                </FlexRow>
                            )}
                        </ModalEl>
                    )}
                </FlexRow>
            )}
            {result?.length !== mainRoutine?.Actions?.length ? (
                <ButtonOutlined
                    _width={'13rem'}
                    _others={'height:3rem'}
                    _margin={'0.5rem 0 1rem 0'}
                    _border={'1px solid #6B76FF'}
                    _color={'#6B76FF'}
                    _bradius={'0.5rem'}
                    _onClick={() => {
                        setActionModal(true)
                        setAction1(true)
                        // if (getFakeResult?.length > 0) {
                        //     setContinue('이어서 하기')
                        // }
                    }}
                >
                    {start}
                </ButtonOutlined>
            ) : (
                <ButtonOutlined
                    _width={'13rem'}
                    _others={'height:3rem'}
                    _margin={'0.5rem 0 1rem 0'}
                    _border={'1px solid #6B76FF'}
                    _color={'#6B76FF'}
                    _bradius={'0.5rem'}
                    _onClick={() => {
                        const routineId =
                            mainRoutine.Actions.length > 0 &&
                            mainRoutine.Actions[0].routineId
                        console.log('루틴아이디', routineId)
                        dispatch(actionRestartMD(routineId))
                        dispatch(setResult([]))
                        dispatch(setFakeResultClear([]))
                        setNext(false)
                        setActive(true)
                    }}
                >
                    루틴 재시작하기
                </ButtonOutlined>
            )}
        </>
    )
}

const ModalEl = styled.div`
    width: 100vw;
    height: 29.5rem;
    padding: 1rem;
    box-sizing: border-box;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    background-color: #fff;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
    left: 0;
    z-index: 5;
`

export default ActionStart
