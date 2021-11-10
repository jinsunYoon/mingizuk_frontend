import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../redux/store'
import {
    myRoutinePresetMD,
    myRoutineListMD,
    myRoutineDeleteMD,
    setMainRoutineMD,
} from '../../redux/async/routine'
import {
    setResult,
    setFakeResultClear,
} from '../../redux/modules/completeSlice'
import Icon from '../icons/Icon'
import { updateRoutine } from '../../redux/modules/routineSlice'

import '../../styles/routine/my-routine.scss'

const RoutineDesc = (props) => {
    const dispatch = useDispatch()
    const { select } = props
    const [desc, setDesc] = React.useState('first')
    const [mainBtnStatus, setMainBtnStatus] = React.useState(false)
    const preset = useSelector((state) => state.routine.presetRoutine)
    const myset = useSelector((state) => state.routine.myRoutine)

    React.useEffect(() => {
        if (select === 'first') {
            setDesc('myRoutine')
        } else if (select === 'second') {
            console.log('secondfffe')
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
                <div>
                    {myset?.map((routine, idx) => (
                        <button
                            className="routine-box"
                            key={idx}
                            onClick={(e) => {
                                e.target.classList.add('.active')
                                setMainBtnStatus(true)
                                if (routine.Actions.length > 0) {
                                    const data = {
                                        routineId:
                                            routine?.Actions[0].routineId,
                                    }
                                    dispatch(setMainRoutineMD(data))
                                    dispatch(setResult([]))
                                    dispatch(setFakeResultClear([]))
                                }
                            }}
                        >
                            <div className="text-box">
                                <h3>{routine?.routineName}</h3>
                                <p>
                                    {routine?.Actions?.map(
                                        (action, idx) => action.actionName
                                    )}
                                </p>
                            </div>
                            <div className="icon-box">
                                <Icon
                                    icon="create"
                                    size="12px"
                                    _onClick={() => {
                                        dispatch(updateRoutine(routine.id))
                                        history.push('/routine/update')
                                    }}
                                />
                                <Icon
                                    _onClick={() => {
                                        const answer =
                                            window.confirm(
                                                '해당 루틴을 삭제하시겠습니까 ?'
                                            )
                                        if (answer) {
                                            dispatch(
                                                myRoutineDeleteMD(routine.id)
                                            )
                                        } else return
                                    }}
                                    icon="close-x"
                                    size="14px"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            )}
            {desc === 'recommendRoutine' && (
                <section>
                    {preset.length > 0 &&
                        preset?.map((routine, idx) => (
                            <button
                                className="recommend-routine-box"
                                onClick={() => {
                                    setMainBtnStatus(true)
                                    if (routine.Actions.length > 0) {
                                        const data = {
                                            routineId:
                                                routine?.Actions[0].routineId,
                                        }
                                        dispatch(setMainRoutineMD(data))
                                        dispatch(setResult([]))
                                        dispatch(setFakeResultClear([]))
                                    }
                                }}
                            >
                                <h3>{routine?.routineName}</h3>
                                <div>
                                    <p>
                                        {routine?.Actions?.map(
                                            (action, idx) => action.actionName
                                        )}
                                    </p>
                                </div>
                            </button>
                        ))}
                </section>
            )}
            {mainBtnStatus && (
                <div
                    style={{
                        zIndex: '3',
                    }}
                >
                    <button
                        className="setting-btn"
                        onClick={() => {
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
