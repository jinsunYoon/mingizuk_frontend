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

const RoutineDesc = (props) => {
    const dispatch = useDispatch()
    const { select } = props
    const [desc, setDesc] = React.useState('first')
    const preset = useSelector((state) => state.routine.presetRoutine)
    const myset = useSelector((state) => state.routine.myRoutine)
    const BtnStatus = useSelector((state) => state.routine.BtnStatus)
    const getRoutineId = useSelector((state) => state.setAction.routineId)
    const result = useSelector((state) => state.actionComplete.result)
    console.log('result', result)

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
                    }}
                >
                    <button
                        className="setting-btn"
                        onClick={() => {
                            const data = getRoutineId
                            console.log('data', data)
                            dispatch(setMainRoutineMD(data))
                            if (result?.length > 0) {
                                const routineId = getRoutineId
                                console.log('리셋할 루틴아디', routineId)
                                dispatch(actionResetMD(routineId))
                            }
                            history.push('/')
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
