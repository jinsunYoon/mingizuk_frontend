import React from 'react'
import RoutineTemplate from '../../components/Routine/RoutineTemplate'
import RoutineCounter from '../../components/Routine/RoutineCounter'
import { Input } from '../../elements/index'

const RoutineCount = () => {
    return (
        <>
            <RoutineTemplate button="수정 완료">
                <Input _others="width:85vw;height=40px;margin-top:8px" />
                <RoutineCounter />
            </RoutineTemplate>
        </>
    )
}

export default RoutineCount
