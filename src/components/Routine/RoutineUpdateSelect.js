import React from 'react'
import UpdateCheck from '../../elements/UpdateCheck'
import { useSelector } from 'react-redux'
// import '../../styles/routine/add-routine.scss'

const RoutineUpdateSelect = (props) => {
    const { body_exercise, stretching, select } = props
    const [desc, setDesc] = React.useState('first')
    React.useEffect(() => {
        if (select === 'first') {
            setDesc('stretching')
        } else if (select === 'second') {
            setDesc('body_exercise')
        } else {
            setDesc('stretching')
        }
    })

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

    return (
        <>
            {desc === 'stretching' && (
                <section className="routine-container">
                    {stretching.map((routine, idx) => (
                        <button className="routine" key={idx}>
                            <span>{routine}</span>
                            {getStretchingIdx.find((n) => n === idx) !==
                            undefined ? (
                                <UpdateCheck
                                    value={routine}
                                    type="stretching"
                                    pre_select={true}
                                />
                            ) : (
                                <UpdateCheck
                                    value={routine}
                                    type="stretching"
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
                            {getBodyExerciseIdx.find((n) => n === idx) !==
                            undefined ? (
                                <UpdateCheck
                                    value={routine}
                                    type="body_exercise"
                                    pre_select={true}
                                />
                            ) : (
                                <UpdateCheck
                                    value={routine}
                                    type="body_exercise"
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
