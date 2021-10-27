import React from 'react'
import RoutineSelect from '../../components/Routine/RoutineSelect'
import RoutineTemplate from '../../components/Routine/RoutineTemplate'
import ToggleTab from '../../components/ToggleTab'

const RoutineAdd = () => {
    return (
        <>
            <RoutineTemplate button="선택 완료 (n/전체)">
                <ToggleTab firstValue={'스트레칭'} secondValue={'맨몸 운동'} />
                <RoutineSelect />
            </RoutineTemplate>
        </>
    )
}

export default RoutineAdd
