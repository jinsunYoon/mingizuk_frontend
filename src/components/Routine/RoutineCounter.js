import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    addCount,
    minusAction,
    minusCount,
} from '../../redux/modules/updateRoutine'
import Swal from 'sweetalert2'

const RoutineCounter = () => {
    const dispatch = useDispatch()
    const countSet = useSelector((state) => state.updateAction.actions)
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 600,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })

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
                                count.actionCnt < 99 &&
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
                                : Toast.fire({
                                      icon: 'error',
                                      title: '동작은 1개 이상이어야 합니다.',
                                  })
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
