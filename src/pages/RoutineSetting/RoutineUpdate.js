import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RoutineUpdateSelect from '../../components/Routine/RoutineUpdateSelect'
import ToggleTab from '../../components/ToggleTab'
import { myRoutineListMD } from '../../redux/async/routine'
import { history } from '../../redux/store'
import '../../styles/routine/add-routine.scss'

const RoutineUpdate = () => {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.routine.myPage)
    const selectList = useSelector((state) => state.updateAction.actions)
    const selectNum = ` 선택 완료 ( ${selectList.length} / 전체 )`

    React.useEffect(() => {
        dispatch(myRoutineListMD())
    }, [])

    return (
        <>
            <div className="routine-layout">
                <section className="container">
                    <ToggleTab
                        firstValue={'스트레칭'}
                        secondValue={'맨몸 운동'}
                    />
                    <RoutineUpdateSelect select={status} />
                    <button
                        className="next-btn"
                        onClick={() =>
                            selectList?.length > 0 &&
                            history.push('/routine/update/count')
                        }
                    >
                        {selectNum}
                    </button>
                </section>
            </div>
        </>
    )
}

export default RoutineUpdate
