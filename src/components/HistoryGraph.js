import React from 'react'
import { BarChart, Bar, XAxis, Label, YAxis, LabelList } from 'recharts'
import { format, addDays } from 'date-fns'
import { finRoutinesActionsMD } from '../redux/async/routine'
import { useDispatch, useSelector } from 'react-redux'

const HistoryGraph = (props) => {
    const { select } = props
    const [graph, setGraph] = React.useState('')

    // * get data from server
    const dispatch = useDispatch()
    const graphActionData = []
    const graphActionDataDivSeven = []
    const graphRoutineData = []
    const graphRoutineDataDivSeven = []

    //* setting data from server
    const finActions = useSelector((state) => state.routine.fin.finActions)
    const finRoutines = useSelector((state) => state.routine.fin.finRoutines)
    const joinDate = useSelector((state) => state.routine.fin.joinDate)

    const daylength = Math.ceil(
        (new Date().getTime() - new Date(joinDate).getTime()) /
            (1000 * 60 * 60 * 24)
    )

    React.useEffect(() => {
        if (joinDate) return
        else {
            dispatch(finRoutinesActionsMD())
        }
    }, [])

    React.useEffect(() => {
        if (select === 'first') {
            setGraph('action')
        } else if (select === 'second') {
            console.log('secondfffe')
            setGraph('routine')
        } else {
            setGraph('action')
        }
    }, [select])

    const [startDay, setStartDay] = React.useState(0)
    const [endDay, setEndDay] = React.useState(7)
    const [week, setWeek] = React.useState(1)

    // * history에 쓰일 날짜들 전부
    const getHistory = () => {
        let history_date = []
        const dateLoop = (num) => {
            for (let i = 0; i < num; i++) {
                history_date.push({
                    date: format(
                        addDays(new Date(joinDate.slice(0, 10)), i),
                        'yyyy-MM-dd'
                    ),
                    actions: [],
                    routines: [],
                })
            }
        }
        switch (daylength % 7) {
            case 1:
                dateLoop(daylength + 6)
                break
            case 2:
                dateLoop(daylength + 5)
                break
            case 3:
                dateLoop(daylength + 4)
                break
            case 4:
                dateLoop(daylength + 3)
                break
            case 5:
                dateLoop(daylength + 2)
                break
            case 6:
                dateLoop(daylength + 1)
                break
            default:
                dateLoop(daylength)
        }
        return history_date
    }

    // * action 값 넣어주기
    const initialDate = () => {
        let _inital = []
        let history = getHistory()

        history.forEach((data) => {
            const idx = finActions?.findIndex(({ date }) => date === data.date)
            if (idx !== -1) {
                data.actions = finActions[idx]?.actions
                data.routines = finRoutines[idx]?.routines
            }
        })
        history.map((data) => {
            graphActionData.push({
                name: data.date.slice(5, 10).replace('-', '/'),
                actionCtn: data.actions.length,
            })
            graphRoutineData.push({
                name: data.date.slice(5, 10).replace('-', '/'),
                routineCtn: data.routines.length,
            })
        })
        return _inital
    }

    if (joinDate) {
        initialDate()
    }
    if (graphActionData.length > 0) {
        let a = startDay
        while (a < endDay) {
            graphActionDataDivSeven.push(graphActionData[a])
            graphRoutineDataDivSeven.push(graphRoutineData[a])
            a++
        }
    }

    return (
        <>
            <section className="graph-group">
                <section className="graph-title">
                    <button
                        onClick={() => {
                            if (endDay > 7) {
                                setStartDay(startDay - 7)
                                setEndDay(endDay - 7)
                                setWeek(week - 1)
                            } else return
                        }}
                    >
                        -
                    </button>
                    <h3>밍기적 {week}주차</h3>
                    <button
                        onClick={() => {
                            if (endDay < daylength) {
                                setStartDay(startDay + 7)
                                setEndDay(endDay + 7)
                                setWeek(week + 1)
                            } else return
                        }}
                    >
                        +
                    </button>
                </section>
                <section className="graph-container">
                    <p className="graph-desc">
                        밍기적 시작한지 <span>{daylength}</span>일 째 되는 날
                    </p>
                    {graph === 'action' && (
                        <BarChart
                            width={340}
                            height={270}
                            data={graphActionDataDivSeven}
                            margin={{ top: 25 }}
                        >
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                style={{
                                    fill: '#A5ABB0',
                                    fontSize: '12px',
                                }}
                            />
                            <Bar
                                dataKey="actionCtn"
                                radius={[10, 10, 10, 10]}
                                fill="#6B76FF"
                                background={{
                                    fill: '#eee',
                                    radius: [10, 10, 10, 10],
                                }}
                                barSize={20}
                            >
                                <LabelList
                                    dataKey="actionCtn"
                                    position="top"
                                    style={{
                                        fill: '#6B76FF',
                                        fontSize: '12px',
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    )}
                    {graph === 'routine' && (
                        <BarChart
                            width={340}
                            height={270}
                            data={graphRoutineDataDivSeven}
                            margin={{ top: 25 }}
                        >
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                style={{
                                    fill: '#A5ABB0',
                                    fontSize: '12px',
                                }}
                            />
                            <Bar
                                dataKey="routineCtn"
                                radius={[10, 10, 10, 10]}
                                fill="#6B76FF"
                                background={{
                                    fill: '#eee',
                                    radius: [10, 10, 10, 10],
                                }}
                                barSize={20}
                            >
                                <LabelList
                                    dataKey="routineCtn"
                                    position="top"
                                    style={{
                                        fill: '#6B76FF',
                                        fontSize: '12px',
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    )}
                </section>
            </section>
        </>
    )
}

export default HistoryGraph
