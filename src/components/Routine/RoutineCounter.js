import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, minusCount } from '../../redux/modules/updateRoutine'
import '../../styles/routine/count-routine.scss'

const RoutineCounter = () => {
    const dispatch = useDispatch()
    const countSet = useSelector((state) => state.updateAction.actions)

    return (
        <>
            {countSet?.map((count, idx) => (
                <section className="select" key={idx}>
                    <span>{count.actionName}</span>
                    <div className="count-box">
                        <button
                            className="count-btn"
                            onClick={() => {
                                dispatch(minusCount(count.actionName))
                            }}
                        >
                            -
                        </button>
                        <p>{count.actionCnt}</p>
                        <button
                            className="count-btn"
                            onClick={() => {
                                dispatch(addCount(count.actionName))
                            }}
                        >
                            +
                        </button>
                    </div>
                    <button className="count-btn">X</button>
                </section>
            ))}
        </>
    )
}

RoutineCounter.defaultProps = {}

export default RoutineCounter
