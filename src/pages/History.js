import React from 'react'
import HistoryGraph from '../components/HistoryGraph'
import Header from '../components/Header'
import ToggleTab from '../components/ToggleTab'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/routine/history.scss'
import { finRoutinesActionsMD } from '../redux/async/routine'

const History = () => {
    const status = useSelector((state) => state.routine.myPage)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(finRoutinesActionsMD())
    }, [])
    return (
        <>
            <Header name="통계" />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100vw',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ToggleTab
                    firstValue={'액션'}
                    secondValue={'루틴'}
                    select={status}
                />
                <section className="history-container">
                    <HistoryGraph select={status} />
                </section>
            </div>
        </>
    )
}

export default History
