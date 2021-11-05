import React from 'react'
import styled from 'styled-components'
import {
    ButtonOutlined,
    FlexRow,
    FlexColumn,
    Text,
    Img,
} from '../elements/index'
import Icon from '../components/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import {
    setActionName,
    setModal,
    setActionId,
    setRoutineId,
    setFinDate,
} from '../redux/modules/completeSlice'
import { Complete } from '../components/index'

const CompleteActionModal = (props) => {
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

    // if (mainRoutine?.Actions?.length == result?.length) {
    return (
        <div style={{ display: 'flex', zIndex: '2' }}>
            <FlexColumn
                _width={'100%'}
                _height={'false'}
                _color={'black'}
                _border={'none'}
            >
                <Text>루틴을 끝마치셨습니다 축하드립니다~!</Text>
                <FlexRow _border={'none'} _width={'none'}>
                    <ButtonOutlined>현재 루틴 재시작 하기</ButtonOutlined>
                    <ButtonOutlined>새 루틴 지정하기</ButtonOutlined>
                </FlexRow>
            </FlexColumn>
        </div>
    )
    // }

    // return (
    //     <div style={{ display: 'flex', zIndex: '2' }}>
    //         {modal && <Complete />}
    //         {mainRoutine?.Actions?.map((routine, idx) => {
    //             return (
    //                 <>
    //                     <ButtonOutlined
    //                         _border={'none'}
    //                         _margin={'none'}
    //                         _padding={'none'}
    //                         _width={'false'}
    //                         _onClick={() => {
    //                             dispatch(setModal(true))
    //                             dispatch(setActionName(routine?.actionName))
    //                             dispatch(setActionId(routine?.id))
    //                             dispatch(setRoutineId(routine?.routineId))
    //                             dispatch(setFinDate(routine?.finDate))
    //                         }}
    //                     >
    //                         <FlexColumn
    //                             _width={'2.8rem'}
    //                             _height={'100%'}
    //                             _border={'none'}
    //                         >
    //                             <FlexRow
    //                                 _width={'2rem'}
    //                                 _height={'2rem'}
    //                                 _bgColor={'lightgray'}
    //                                 _border={'none'}
    //                                 _margin={'10px 0px 0px 0px'}
    //                                 _others={'border-radius:1rem'}
    //                             ></FlexRow>
    //                             <FlexRow
    //                                 _width={'false'}
    //                                 _height={'1rem'}
    //                                 _bgColor={'black'}
    //                                 _border={'none'}
    //                                 _margin={'-40px -25px 20px 0px'}
    //                                 _others={
    //                                     'border-radius:1rem; min-width:1rem;'
    //                                 }
    //                             >
    //                                 <Text
    //                                     _color={'#fff'}
    //                                     _padding={'0px 3px 0px 3px'}
    //                                 >
    //                                     {routine?.actionCnt}
    //                                 </Text>
    //                             </FlexRow>
    //                             <Text
    //                                 _margin={'5px 0px 0px 0px'}
    //                                 _fontSize={'0.75rem'}
    //                             >
    //                                 {routine?.actionName}
    //                             </Text>
    //                         </FlexColumn>
    //                     </ButtonOutlined>
    //                     {idx < num && (
    //                         <FlexRow _border={'none'} _width={'0.625rem'}>
    //                             <Icon icon={'chevron-right'} size={24} />
    //                         </FlexRow>
    //                     )}
    //                 </>
    //             )
    //         })}
    //     </div>
    // )
}

export default CompleteActionModal
