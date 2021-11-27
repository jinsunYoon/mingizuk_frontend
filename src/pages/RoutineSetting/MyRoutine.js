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
import { setResult, setFakeResult } from '../../redux/modules/completeSlice'
import Icon from '../../components/icons/Icon'
import { myRoutineDeleteMD } from '../../redux/async/routine'
import Swal from 'sweetalert2'

const MyRoutine = () => {
    const status = useSelector((state) => state.routine.myPage)
    const BtnStatus = useSelector((state) => state.routine.BtnStatus)
    const optionStatus = useSelector((state) => state.routine.optionStatus)
    const optInfo = useSelector((state) => state.routine.info)
    const dispatch = useDispatch()
    const mainRoutine = useSelector((state) => state.setAction.mainRoutine)

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
                        secondValue={'밍기적 추천 루틴'}
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
                            <div className="opt-warp">
                                <div
                                    className="option-container"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => {
                                            dispatch(updateRoutine(optInfo.id))
                                            history.replace('/routine/update')
                                            dispatch(setOptionModal(false))
                                            dispatch(setRoutineModal(false))
                                        }}
                                    >
                                        <Icon icon="ic_edit" size="24px" />
                                        <span>수정하기</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            Swal.fire({
                                                text: '루틴을 삭제하시겠어요 ?',
                                                showCancelButton: true,
                                                confirmButtonColor: '#6B76FF',
                                                cancelButtonColor: '#DEDEDE',
                                                confirmButtonText: '삭제',
                                                cancelButtonText: '취소',
                                                width: '30rem',
                                                height: '15rem',
                                                reverseButtons: true,
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    dispatch(
                                                        setOptionModal(false)
                                                    )
                                                    dispatch(
                                                        setRoutineModal(false)
                                                    )
                                                    dispatch(
                                                        myRoutineDeleteMD(
                                                            optInfo.id
                                                        )
                                                    )
                                                }
                                                if (
                                                    optInfo.routineName ==
                                                    mainRoutine.routineName
                                                ) {
                                                    dispatch(setResult([]))
                                                    dispatch(setFakeResult([]))
                                                }
                                            })
                                        }}
                                    >
                                        <Icon icon="Trash_light" size="24px" />
                                        <span>삭제하기</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </>
    )
}

export default MyRoutine
