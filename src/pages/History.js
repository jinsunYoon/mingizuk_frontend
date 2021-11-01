import React from 'react'
import HistoryGraph from '../components/HistoryGraph'
import RoutineTemplate from '../components/Routine/RoutineTemplate'
import { FlexColumn, Title } from '../elements'
import { history } from '../redux/store'

const History = () => {
    return (
        <>
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
                    <Title _others="margin:0 0 5rem 0">Graph</Title>
                    <HistoryGraph />
                </FlexColumn>
            </RoutineTemplate>
        </>
    )
}

export default History
