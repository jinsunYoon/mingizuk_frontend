import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, minusAction } from '../../redux/modules/updateRoutine'
import Icon from '../../components/icons/Icon'
import clsx from 'clsx'

const RoutineSelect = (props) => {
    const dispatch = useDispatch()
    const addedActions = useSelector((state) => state.updateAction.actions)
    console.log('<<', addedActions)
    const [check, setCheck] = React.useState(false)
    const { stretching, body_exercise, select } = props
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

    const changeActions = (newAct) => {
        const confirm = addedActions?.findIndex(
            ({ actionName }) => actionName === newAct.value
        )
        confirm === -1
            ? dispatch(addAction(newAct))
            : dispatch(minusAction(newAct))
    }

    const checkColor = (name) => {
        return addedActions?.findIndex(({ actionName }) => actionName === name)
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
                                {
                                    changeActions({
                                        value: routine,
                                        type: 'stretching',
                                    })
                                }
                            }}
                        >
                            <span
                                className={clsx(
                                    '',
                                    checkColor(routine) !== -1 &&
                                        'select-priamry'
                                )}
                            >
                                {routine}
                            </span>
                            {checkColor(routine) === -1 ? (
                                <Icon
                                    size="16px"
                                    color="lightgray"
                                    icon="check"
                                />
                            ) : (
                                <Icon
                                    size="16px"
                                    color="#6B76FF"
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
                        <button
                            className="routine"
                            key={idx}
                            onClick={() => {
                                {
                                    changeActions({
                                        value: routine,
                                        type: 'body_exercise',
                                    })
                                }
                            }}
                        >
                            <span
                                className={clsx(
                                    '',
                                    checkColor(routine) !== -1 &&
                                        'select-priamry'
                                )}
                            >
                                {routine}
                            </span>
                            {checkColor(routine) === -1 ? (
                                <Icon
                                    size="16px"
                                    color="lightgray"
                                    icon="check"
                                />
                            ) : (
                                <Icon
                                    size="16px"
                                    color="#6B76FF"
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

RoutineSelect.defaultProps = {
    stretching: [
        '앉았다 일어나기',
        '목 돌리기',
        '어깨 돌리기',
        '허리 돌리기',
        '무릎 돌리기',
    ],
    body_exercise: ['스쿼트', '런지', '플랭크', '푸쉬업'],
    select: 'first',
}

export default RoutineSelect
