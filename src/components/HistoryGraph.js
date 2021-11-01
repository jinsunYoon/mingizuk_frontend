import React from 'react'
import Moment from 'react-moment'
import styled from 'styled-components'
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from 'recharts'
import moment from 'moment'

const HistoryGraph = () => {
    const data = []
    const actionCount = [1, 6, 4, 6, 7, 11, 2]
    for (let i = 0; i < 7; i++) {
        data.unshift({
            name: moment().subtract(i, 'days').format('MM/DD'),
            Action: actionCount[i],
        })
    }
    return (
        <>
            <SemiPosition>
                <BarChart width={310} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Action" fill="#8884d8" />
                </BarChart>
            </SemiPosition>
        </>
    )
}

const SemiPosition = styled.div`
    position: relative;
    right: 3.5vw;
`

export default HistoryGraph
