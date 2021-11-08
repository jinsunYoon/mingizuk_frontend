import React from 'react'
import '../styles/routine/history.scss'
import { BarChart, Bar, XAxis, Legend, Tooltip } from 'recharts'
import { format, addDays, isWithinInterval } from 'date-fns'
import { finRoutinesActionsMD } from '../redux/async/routine'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

const HistoryGraph = () => {
    // * get data from server
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(finRoutinesActionsMD())
    }, [])

    //* setting data from server
    const [week, setWeek] = React.useState(1)
    const finActions = useSelector((state) => state.routine.fin)
    const finRoutines = useSelector((state) => state.routine.fin)
    const joinDate = useSelector((state) => state.routine.fin.joinDate)
    const daylength = moment(joinDate).fromNow().slice(0, 1)

    const [startDay, setStartDay] = React.useState(0)

    // * history에 쓰일 날짜들 전부
    const getHistory = () => {
        let history_date = []
        if (daylength % 7 !== 0) {
            for (let i = 0; i < Number(daylength) + (daylength % 7) + 1; i++) {
                history_date.push(
                    format(
                        addDays(new Date(joinDate.slice(0, 10)), i),
                        'yyyy-MM-dd'
                    )
                )
            }
        } else {
            for (let i = 0; i < Number(daylength); i++) {
                history_date.push(
                    format(
                        addDays(new Date(joinDate.slice(0, 10)), i),
                        'yyyy-MM-dd'
                    )
                )
            }
        }
        return history_date
    }

    const actionCount = [1, 6, 4, 6, 7, 11, 2]
    // * 1주차 초기 설정 값
    const initialDate = () => {
        let _inital = []
        let history = getHistory()
        for (let i = 0; i < 7; i++) {
            _inital.push({
                name: history[i]?.slice(5, 10)?.replace('-', '/'),
                Action: actionCount[i],
            })
        }
        return _inital
    }

    const data = initialDate()

    return (
        <>
            <section className="history-title">
                <button onClick={() => {}}>왼</button>
                <h3>밍기적 {week}주차</h3>
                <button onClick={() => {}}>오</button>
            </section>
            <section>
                <BarChart width={320} height={250} data={data}>
                    <XAxis dataKey="name" />
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
