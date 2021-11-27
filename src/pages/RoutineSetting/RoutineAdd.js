import React from 'react'
import { useSelector } from 'react-redux'
import RoutineSelect from '../../components/Routine/RoutineSelect'
import ToggleTab from '../../components/ToggleTab'
import { history } from '../../redux/store'
import '../../styles/routine/add-routine.scss'

const RoutineAdd = () => {
    const status = useSelector((state) => state.routine.myPage)
    const selectList = useSelector((state) => state.updateAction.actions)
    const selectNum = ` 선택 완료 ( ${selectList.length} / 전체 )`

    return (
        <>
            <div className="routine-layout">
                <section className="container">
                    <ToggleTab
                        firstValue={'스트레칭'}
                        secondValue={'맨몸 운동'}
                    />
                    <div className="routine-add-title">
                        <h3>동작을 선택 해주세요.</h3>
                        <span>(스트레칭, 맨몸운동 합쳐서 최대 5개)</span>
                    </div>
                    <RoutineSelect select={status} />
                    <button
                        className="next-btn"
                        onClick={() =>
                            selectList?.length > 0 &&
                            history.push('/routine/count')
                        }
                    >
                        {selectNum}
                    </button>
                </section>
            </div>
        </>
    )
}

export default RoutineAdd
