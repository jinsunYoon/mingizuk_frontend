import React from 'react'
import HistoryGraph from '../components/HistoryGraph'
import RoutineTemplate from '../components/Routine/RoutineTemplate'
import { ActiveUnderLine, FlexColumn, Title } from '../elements'
import { history } from '../redux/store'
import Header from '../components/Header'
import ToggleTab from '../components/ToggleTab'
import '../styles/routine/history.scss'

const History = () => {
    return (
        <>
            <Header name="통계" />
            <ToggleTab
                firstValue={'액션'}
                secondValue={'루틴'}
                select={status}
            />
            <section className="history-container">
                <HistoryGraph />
            </section>
        </>
    )
}

export default History
