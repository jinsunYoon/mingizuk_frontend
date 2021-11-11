import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Icon from '../icons/Icon'
import { addAction, minusAction } from '../../redux/modules/updateRoutine'

const RoutineUpdateSelect = (props) => {
    const { body_exercise, stretching, select } = props
    const [desc, setDesc] = React.useState('first')
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (select === 'first') {
            setDesc('stretching')
        } else if (select === 'second') {
            setDesc('body_exercise')
        } else {
            setDesc('stretching')
        }
    }, [select])

    // * for pre_select_check
    const myset = useSelector((state) => state.routine.myRoutine)
    const myRoutineId = useSelector((state) => state.routine.updateRoutineRef)
    const myRoutineRef = myset?.filter((set) => set.id === myRoutineId)[0]
        .Actions
    let selectStretching = []
    let selectBodyExercise = []
    let getStretchingIdx = []
    let getBodyExerciseIdx = []
    myRoutineRef.map((routine, idx) => {
        if (routine.actionType === 'stretching') {
            selectStretching.push(routine.actionName)
        } else if (routine.actionType === 'body_exercise') {
            selectBodyExercise.push(routine.actionName)
        }
    })
    for (let i = 0; i < selectStretching.length; i++) {
        getStretchingIdx.push(
            stretching.findIndex((action) => action === selectStretching[i])
        )
    }
    for (let i = 0; i < selectBodyExercise.length; i++) {
        getBodyExerciseIdx.push(
            body_exercise.findIndex(
                (action) => action === selectBodyExercise[i]
            )
        )
    }
    React.useEffect(() => {
        selectStretching?.map((select) =>
            dispatch(addAction({ value: select, type: 'stretching' }))
        )
        selectBodyExercise?.map((select) =>
            dispatch(addAction({ value: select, type: 'body_exercise' }))
        )
    }, [])

    const checkStretchingList = (num) => {
        return getStretchingIdx.find((n) => n === num)
    }

    const checkExerciseList = (num) => {
        return getBodyExerciseIdx.find((n) => n === num)
    }

    return (
        <>
            {desc === 'stretching' && (
                <section className="routine-container">
                    {stretching.map((routine, idx) => (
                        <button
                            className="routine"
                            key={idx}
                            onClick={() => {
                                checkStretchingList(idx) === undefined
                                    ? dispatch(
                                          addAction({
                                              value: routine,
                                              type: 'stretching',
                                          })
                                      )
                                    : dispatch(
                                          minusAction({
                                              value: routine,
                                              type: 'stretching',
                                          })
                                      )
                                console.log('<<', getStretchingIdx)
                            }}
                        >
                            <span>{routine}</span>
                            {checkStretchingList(idx) !== undefined ? (
                                <Icon
                                    size="16px"
                                    color="#6B76FF"
                                    icon="check"
                                />
                            ) : (
                                <Icon
                                    size="16px"
                                    color="#A5ABB0"
                                    icon="check"
                                />
                            )}
                        </button>
                    ))}
                </section>
            )}
            {desc === 'body_exercise' && (
                <section className="routine-container">
                    {body_exercise.map((routine, idx) => (
                        <button className="routine" key={idx}>
                            <span>{routine}</span>
                            {checkExerciseList(idx) !== undefined ? (
                                <Icon
                                    size="16px"
                                    color="#6B76FF"
                                    icon="check"
                                />
                            ) : (
                                <Icon
                                    size="16px"
                                    color="#A5ABB0"
                                    icon="check"
                                />
                            )}
                        </button>
                    ))}
                </section>
            )}
        </>
    )
}

RoutineUpdateSelect.defaultProps = {
    stretching: [
        '목 돌리기',
        '무릎 돌리기',
        '앉았다 일어나기',
        '어깨 돌리기',
        '허리 돌리기',
    ],
    body_exercise: ['런지', '스쿼트', '플랭크', '푸쉬업'],
    select: 'first',
}

export default RoutineUpdateSelect
