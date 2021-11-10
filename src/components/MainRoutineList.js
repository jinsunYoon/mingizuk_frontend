import React from 'react'
import {
    ButtonOutlined,
    FlexRow,
    FlexColumn,
    Text,
    Img,
} from '../elements/index'
import Icon from './icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import {
    setActionName,
    setModal,
    setActionId,
    setRoutineId,
    setFinDate,
} from '../redux/modules/completeSlice'
import { Complete } from './index'

const MainRoutineList = (props) => {
    const dispatch = useDispatch()

    const modal = useSelector((state) => state.actionComplete.modalStatus)
    const mainRoutine = useSelector((state) => state.setAction.mainRoutine)
    const num = mainRoutine?.Actions?.length - 1
    const result = useSelector((state) => state.actionComplete.result)
    console.log(
        '메인루틴, result',
        mainRoutine?.Actions?.length,
        result?.length
    )

    if (mainRoutine?.Actions?.length == result?.length) {
        return (
            <div style={{ display: 'flex', zIndex: '2' }}>
                <FlexColumn
                    _width={'100%'}
                    _height={'100%'}
                    _color={'black'}
                    _border={'none'}
                    _others={'min-height:6.25rem'}
                >
                    <Text _fontSize={'1.2rem'} _fontWeight={'700'}>
                        루틴을 끝마치셨습니다
                        <br /> 축하드립니다~!
                    </Text>
                </FlexColumn>
            </div>
        )
    }

    return (
        <div
            style={{
                display: 'flex',
                zIndex: '2',
                minHeight: '6.25rem',
                width: '100%',
                height: false,
                justifyContent: 'space-around',
            }}
        >
            {modal && <Complete />}
            {mainRoutine?.Actions?.map((routine, idx) => {
                return (
                    <>
                        <ButtonOutlined
                            _border={'none'}
                            _margin={'0px'}
                            _padding={'0px'}
                            _width={'100%'}
                            _others={'height:false'}
                            _onClick={() => {
                                dispatch(setModal(true))
                                dispatch(setActionName(routine?.actionName))
                                dispatch(setActionId(routine?.id))
                                dispatch(setRoutineId(routine?.routineId))
                                dispatch(setFinDate(routine?.finDate))
                            }}
                        >
                            <FlexColumn
                                _width={'100%'}
                                _height={'100%'}
                                _border={'none'}
                                _padding={'0.7rem 0px 0px 0px'}
                                _justify={'start'}
                            >
                                <FlexRow
                                    _width={'2.5rem'}
                                    _height={'2.5rem'}
                                    _bgColor={'lightgray'}
                                    _border={'none'}
                                    // _margin={'10px 0px 0px 0px'}
                                    _others={'border-radius:2.5rem'}
                                ></FlexRow>
                                {/* <FlexRow
                                    _width={'false'}
                                    _height={'1rem'}
                                    _bgColor={'black'}
                                    _border={'none'}
                                    _margin={'-40px -25px 20px 0px'}
                                    _others={
                                        'border-radius:1rem; min-width:1rem;'
                                    }
                                >
                                    <Text
                                        _color={'#fff'}
                                        _padding={'0px 3px 0px 3px'}
                                    >
                                        {routine?.actionCnt}
                                    </Text>
                                </FlexRow> */}
                                {routine?.actionName?.length > 5 ? (
                                    <Text
                                        _margin={'5px 0px 0px 0px'}
                                        _fontSize={'0.75rem'}
                                    >
                                        {routine?.actionName?.split(' ')[0]}{' '}
                                        <br />{' '}
                                        {routine?.actionName?.split(' ')[1]}
                                    </Text>
                                ) : (
                                    <Text
                                        _margin={'5px 0px 0px 0px'}
                                        _fontSize={'0.75rem'}
                                    >
                                        {routine?.actionName}
                                    </Text>
                                )}
                            </FlexColumn>
                        </ButtonOutlined>
                        {/* {idx < num && (
                            <FlexRow _border={'none'} _width={'0.625rem'}>
                                <Icon icon={'chevron-right'} size={24} />
                            </FlexRow>
                        )} */}
                    </>
                )
            })}
        </div>
    )
}

export default MainRoutineList
