import React from 'react'
import Moment from 'react-moment'
import styled from 'styled-components'
import { BarChart, Bar } from 'recharts'
import moment from 'moment'
import { finRoutinesActionsMD } from '../redux/async/routine'
import { useDispatch, useSelector } from 'react-redux'

const HistoryGraph = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(finRoutinesActionsMD())
    }, [])
    const finActions = useSelector((state) => state.routine.finActions)
    const finRoutines = useSelector((state) => state.routine.finRoutines)
    const today = moment().format('YYYY-MM-DD')

    console.log(finActions, finRoutines)

    console.log(today)

    // * rechart example
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
                    <Bar
                        dataKey="Action"
                        radius={[10, 10, 10, 10]}
                        fill="#6B76FF"
                        background="#eee"
                        barSize={20}
                    />
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
