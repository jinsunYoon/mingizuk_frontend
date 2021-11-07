import React from 'react'
import '../styles/routine/history.scss'
import { BarChart, Bar } from 'recharts'
import moment from 'moment'
import { format, addDays, isWithinInterval } from 'date-fns'
import { finRoutinesActionsMD } from '../redux/async/routine'
import { history } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'

const HistoryGraph = () => {
    const dispatch = useDispatch()
    const [week, setWeek] = React.useState(1)
    React.useEffect(() => {
        dispatch(finRoutinesActionsMD())
    }, [])

    //* setting datas
    const finActions = useSelector((state) => state.routine.finActions)
    const finRoutines = useSelector((state) => state.routine.finRoutines)
    const today = format(new Date('2021, 11, 20'), 'yyyy-MM-dd') // * 예시로 넣어놓은 값이다.
    const joinDate = new Date() // * 예시로 넣어놓은 값이다.

    // * settign dates
    let history_date = []
    React.useEffect(() => {
        let j = 7
        while (history_date.findIndex((day) => day === today) === -1) {
            for (let i = 0; i < j; i++) {
                history_date.push(format(addDays(joinDate, i), 'yyyy-MM-dd'))
            }
            j = j + 7
        }
        console.log('>>>', history_date)
    }, [])

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
            <section className="history-title">
                <button onClick={() => setWeek(week - 1)}>왼</button>
                <h3>밍기적 {week}주차</h3>
                <button onClick={() => setWeek(week + 1)}>오</button>
            </section>
            <section>
                <p>밍기적 시작한지 n일째 되는 날</p>
                <BarChart width={310} height={250} data={data}>
                    <Bar
                        dataKey="Action"
                        radius={[10, 10, 10, 10]}
                        fill="#6B76FF"
                        background="#eee"
                        barSize={20}
                    />
                </BarChart>
            </section>
        </>
    )
}

export default HistoryGraph
