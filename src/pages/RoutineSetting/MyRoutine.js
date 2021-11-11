import React from 'react'
import { Header } from '../../components'
import RoutineDesc from '../../components/Routine/RoutineDesc'
import ToggleTab from '../../components/ToggleTab'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'
import '../../styles/routine/my-routine.scss'
import { setRoutineModal } from '../../redux/modules/routineSlice'

const MyRoutine = () => {
    const status = useSelector((state) => state.routine.myPage)
    const BtnStatus = useSelector((state) => state.routine.BtnStatus)
    const dispatch = useDispatch()

    return (
        <>
            <Header />
            <section
                className="container"
                onClick={() => BtnStatus && dispatch(setRoutineModal(false))}
            >
                <ToggleTab
                    firstValue={'내 루틴'}
                    secondValue={'추천 루틴'}
                    select={status}
                />

                <div
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <RoutineDesc select={status} />
                </div>

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
