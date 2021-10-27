import React from 'react'
import RoutineTemplate from '../../components/Routine/RoutineTemplate'
import ToggleTab from '../../components/ToggleTab'
import RoutineDesc from '../../components/Routine/RoutineDesc'

const MyRoutine = () => {
    return (
        <RoutineTemplate button="메인 루틴으로 설정하기" addBtn="true">
            <ToggleTab firstValue={'내 루틴'} secondValue={'추천 루틴'} />
            <RoutineDesc />
        </RoutineTemplate>
    )
}

export default MyRoutine
