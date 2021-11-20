import React from 'react'
import RoutineDesc from '../../components/Routine/RoutineDesc'
import ToggleTab from '../../components/ToggleTab'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'
import '../../styles/routine/my-routine.scss'
import {
    setRoutineModal,
    setOptionModal,
    updateRoutine,
} from '../../redux/modules/routineSlice'
import Icon from '../../components/icons/Icon'
import { myRoutineDeleteMD } from '../../redux/async/routine'

const MyRoutine = () => {
    const status = useSelector((state) => state.routine.myPage)
    const BtnStatus = useSelector((state) => state.routine.BtnStatus)
    const optionStatus = useSelector((state) => state.routine.optionStatus)
    const optInfo = useSelector((state) => state.routine.info)
    const dispatch = useDispatch()

    return (
        <>
            <div className="routine-layout">
                <section
                    className="container"
                    onClick={() =>
                        BtnStatus && dispatch(setRoutineModal(false))
                    }
                >
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
                    {optionStatus && (
                        <div
                            className="option-background"
                            onClick={() => {
                                dispatch(setOptionModal(false))
                            }}
                        >
                            <div
                                className="option-container"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => {
                                        dispatch(updateRoutine(optInfo.id))
                                        history.push('/routine/update')
                                        dispatch(setOptionModal(false))
                                        dispatch(setRoutineModal(false))
                                    }}
                                >
                                    <Icon icon="ic_edit" size="24px" />
                                    <span>수정하기</span>
                                </button>
                                <button
                                    onClick={() => {
                                        const result =
                                            window.confirm(
                                                '루틴을 삭제하시겠습니까?'
                                            )
                                        if (result) {
                                            dispatch(setOptionModal(false))
                                            dispatch(setRoutineModal(false))
                                            dispatch(
                                                myRoutineDeleteMD(optInfo.id)
                                            )
                                        } else return
                                    }}
                                >
                                    <Icon icon="Trash_light" size="24px" />
                                    <span>삭제하기</span>
                                </button>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </>
    )
}

export default MyRoutine
