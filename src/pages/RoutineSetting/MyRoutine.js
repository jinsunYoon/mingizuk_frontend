import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RoutineTemplate from '../../components/Routine/RoutineTemplate'
import ToggleTab from '../../components/ToggleTab'
import RoutineDesc from '../../components/Routine/RoutineDesc'
import { Header } from '../../components'

const MyRoutine = () => {
    const status = useSelector((state) => state.routine.myPage)

    return (
        <>
            <Header name="루틴 설정하기" />
            <RoutineTemplate button="메인 루틴으로 설정하기" addBtn="true">
                <ToggleTab
                    firstValue={'내 루틴'}
                    secondValue={'추천 루틴'}
                    select={status}
                />
                <RoutineDesc select={status} />
            </RoutineTemplate>
        </>
    )
}

export default MyRoutine
