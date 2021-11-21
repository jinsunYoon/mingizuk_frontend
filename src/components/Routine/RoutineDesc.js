import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../redux/store'
import {
    myRoutinePresetMD,
    myRoutineListMD,
    setMainRoutineMD,
} from '../../redux/async/routine'
import { actionResetMD } from '../../redux/async/actionComplete'
import { setRoutineId } from '../../redux/modules/mainRoutine'
import {
    setRoutineModal,
    setRoutineInfo,
    setOptionModal,
} from '../../redux/modules/routineSlice'
import {
    setResult,
    setFakeResultClear,
} from '../../redux/modules/completeSlice'
import Swal from 'sweetalert2'

const RoutineDesc = (props) => {
    const dispatch = useDispatch()
    const { select } = props
    const [desc, setDesc] = React.useState('first')
    const preset = useSelector((state) => state.routine.presetRoutine)
    const myset = useSelector((state) => state.routine.myRoutine)
    const BtnStatus = useSelector((state) => state.routine.BtnStatus)
    const getRoutineId = useSelector((state) => state.setAction.routineId)
    const getResult = useSelector((state) => state.actionComplete.result)
    const getFakeResult = useSelector(
        (state) => state.actionComplete.fakeResult
    )

    React.useEffect(() => {
        if (select === 'first') {
            setDesc('myRoutine')
        } else if (select === 'second') {
            setDesc('recommendRoutine')
        } else {
            setDesc('myRoutine')
        }
    }, [select])

    React.useEffect(() => {
        dispatch(myRoutinePresetMD())
        dispatch(myRoutineListMD())
    }, [])

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })

    const resetRoutine = (routineId) => {
        swal({
            text: '진행중이던 루틴을 초시화 하시겠습니까?',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(actionResetMD(routineId))
                const data = getRoutineId
                console.log('data', data)
                dispatch(setMainRoutineMD(data))
                dispatch(setResult([]))
                dispatch(setFakeResultClear([]))
                Toast.fire({
                    icon: 'success',
                    title: '루틴이 초기화되었습니다.',
                })
                history.push('/')
            } else return
        })
    }

    return (
        <>
            {desc === 'myRoutine' && (
                <div
                    className="routine-box-container"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    {myset?.map((routine, idx) => (
                        <button
                            className="routine-box"
                            key={idx}
                            onClick={(e) => {
                                e.target.classList.add('.active')
                                dispatch(setRoutineModal(true))
                                if (routine.Actions.length > 0) {
                                    dispatch(
                                        setRoutineId(
                                            routine?.Actions[0].routineId
                                        )
                                    )
                                }
                            }}
                        >
                            <div className="text-box">
                                <h3>{routine?.routineName}</h3>
                                <p>
                                    {routine?.Actions?.map((action, idx) =>
                                        routine?.Actions?.length - 1 === idx
                                            ? `${action?.actionName}`
                                            : action?.actionName?.length > 5
                                            ? `${action?.actionName?.slice(
                                                  0,
                                                  3
                                              )}.. / `
                                            : `${action?.actionName} / `
                                    )}
                                </p>
                            </div>
                            <div className="icon-box">
                                <div
                                    onClick={() => {
                                        dispatch(setOptionModal(true))
                                        dispatch(setRoutineInfo(routine))
                                    }}
                                >
                                    ...
                                </div>
                            </div>
                        </button>
                    ))}
                    {myset?.length === 0 && (
                        <p className="no-routine">내 루틴이 없습니다 ㅠㅠ</p>
                    )}
                </div>
            )}
            {desc === 'recommendRoutine' && (
                <section
                    className="routine-box-container"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    {preset.length > 0 &&
                        preset?.map((routine, idx) => (
                            <button
                                key={idx}
                                className="recommend-routine-box"
                                onClick={() => {
                                    dispatch(setRoutineModal(true))
                                    if (routine.Actions.length > 0) {
                                        dispatch(
                                            setRoutineId(
                                                routine?.Actions[0].routineId
                                            )
                                        )
                                    }
                                }}
                            >
                                <h3>{routine?.routineName}</h3>
                                <div>
                                    <p>
                                        {routine?.Actions?.map((action, idx) =>
                                            routine?.Actions?.length - 1 === idx
                                                ? `${action?.actionName}`
                                                : action?.actionName?.length > 5
                                                ? `${action?.actionName?.slice(
                                                      0,
                                                      3
                                                  )}.. / `
                                                : `${action?.actionName} / `
                                        )}
                                    </p>
                                </div>
                            </button>
                        ))}
                </section>
            )}
            {BtnStatus && (
                <div
                    style={{
                        zIndex: '3',
                        width: '100vw',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <button
                        className="setting-btn"
                        onClick={() => {

                            if (
                                getResult?.length == 0 &&
                                getFakeResult?.length == 0
                            ) {
                                const data = getRoutineId
                                console.log('data', data)
                                dispatch(setMainRoutineMD(data))
                                dispatch(setResult([]))
                                dispatch(setFakeResultClear([]))
                                history.push('/')
                            }

                            if (
                                getResult?.length > 0 &&
                                getFakeResult?.length > 0
                            ) {
                                const routineId = getRoutineId
                                console.log('리셋할 루틴아디', routineId)
                                resetRoutine(routineId)
                            }
                        }}
                    >
                        메인 루틴으로 설정하기
                    </button>
                </div>
            )}
        </>
    )
}

RoutineDesc.defaultProps = {
    select: 'first',
}

export default RoutineDesc
