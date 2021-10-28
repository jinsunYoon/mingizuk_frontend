import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RoutineTemplate from '../../components/Routine/RoutineTemplate'
import RoutineCounter from '../../components/Routine/RoutineCounter'
import { Input } from '../../elements/index'
import { Header } from '../../components'

const RoutineCount = () => {
    const actionSet = useSelector((state) => state.updateAction.actions)
    return (
        <>
            <Header name="내 루틴 추가하기 ( 2 / 2 )" />
            <RoutineTemplate
                button="수정 완료"
                _onClick_={() => console.log(actionSet)}
            >
                <Input _others="width:85vw;height=40px;margin-top:8px" />
                <RoutineCounter />
            </RoutineTemplate>
        </>
    )
}

export default RoutineCount
