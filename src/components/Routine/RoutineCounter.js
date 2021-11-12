import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    addCount,
    minusAction,
    minusCount,
} from '../../redux/modules/updateRoutine'

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
                    <button
                        className="count-btn"
                        onClick={() =>
                            countSet?.length > 1
                                ? dispatch(
                                      minusAction({ value: count.actionName })
                                  )
                                : alert('액션은 1개 이상이어야 합니다.')
                        }
                    >
                        X
                    </button>
                </section>
            ))}
        </>
    )
}

RoutineCounter.defaultProps = {}

export default RoutineCounter
