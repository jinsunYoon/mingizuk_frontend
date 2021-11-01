import React from 'react'
import HistoryGraph from '../components/HistoryGraph'
import RoutineTemplate from '../components/Routine/RoutineTemplate'
import { FlexColumn, Title } from '../elements'
import { history } from '../redux/store'
import Header from '../components/Header'

const History = () => {
    return (
        <>
            <div style={{ zIndex: '3' }}>
                <Header name="히스토리" />
            </div>
            <RoutineTemplate
                _onClick_={() => {
                    history.push('/')
                }}
                button="메인으로"
            >
                <FlexColumn
                    _width="100vw"
                    _height="100vh"
                    _justify="space-between"
                    _padding="5rem 0 20rem 0 "
                >
                    <HistoryGraph />
                </FlexColumn>
            </RoutineTemplate>
        </>
    )
}

export default History
