import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RoutineTemplate from '../../components/Routine/RoutineTemplate'
import ToggleTab from '../../components/ToggleTab'
import RoutineDesc from '../../components/Routine/RoutineDesc'
import { Header, NavBar } from '../../components'
import { history } from '../../redux/store'

const MyRoutine = () => {
    const status = useSelector((state) => state.routine.myPage)
    console.log(status)

    return (
        <>
            <RoutineTemplate
                button="메인 루틴으로 설정하기"
                _onClick_={() => history.push('/')}
                is_button="false"
                addBtn="true"
            >
                <div style={{ zIndex: '3' }}>
                    <Header name="루틴 설정하기" />
                </div>
                <ToggleTab
                    firstValue={'내 루틴'}
                    secondValue={'추천 루틴'}
                    select={status}
                />
                <RoutineDesc select={status} />
                <NavBar />
            </RoutineTemplate>
        </>
    )
}

export default MyRoutine
