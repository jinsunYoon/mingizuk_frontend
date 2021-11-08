import React from 'react'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { addAction, minusAction } from '../../redux/modules/updateRoutine'
import '../../styles/routine/add-routine.scss'
import Icon from '../icons/Icon'

const RoutineSelect = (props) => {
    const dispatch = useDispatch()
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

    const changeActions = (data) => {
        !check ? setCheck(true) : setCheck(false)
        !check ? dispatch(addAction(data)) : dispatch(minusAction(data))
    }

    return (
        <>
            {desc === 'stretching' && (
                <section className="routine-container">
                    {stretching.map((routine, idx) => (
                        <button
                            className="routine"
                            key={idx}
                            onClick={(e) => {
                                {
                                    changeActions({
                                        value: routine,
                                        type: 'stretching',
                                    })
                                    !check
                                        ? (e.currentTarget.style.color =
                                              '#6B76FF')
                                        : (e.currentTarget.style.color =
                                              '#000000')
                                }
                            }}
                        >
                            <span>{routine}</span>
                            <Icon size="16px" color="lightgray" icon="check" />
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
                            onClick={(e) => {
                                changeActions({
                                    value: routine,
                                    type: 'body_exercise',
                                })
                                !check
                                    ? (e.currentTarget.style.color = '#6B76FF')
                                    : (e.currentTarget.style.color = '#000000')
                            }}
                        >
                            <span>{routine}</span>
                            <Icon size="16px" color="lightgray" icon="check" />
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
