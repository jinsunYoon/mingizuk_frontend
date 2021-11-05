import React from 'react'
import { Header } from '../../components'
import RoutineDesc from '../../components/Routine/RoutineDesc'
import ToggleTab from '../../components/ToggleTab'
import { useSelector } from 'react-redux'
import { history } from '../../redux/store'
import '../../styles/routine/my-routine.scss'

const MyRoutine = () => {
    const status = useSelector((state) => state.routine.myPage)

    return (
        <>
            <Header />
            <section className="container">
                <ToggleTab
                    firstValue={'내 루틴'}
                    secondValue={'추천 루틴'}
                    select={status}
                />
                <RoutineDesc select={status} />
                <button
                    className="add-btn"
                    onClick={() => history.push('/routine/add')}
                >
                    +
                </button>
            </section>
        </>
    )
}

export default MyRoutine
