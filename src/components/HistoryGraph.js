// ! TODO 가입 하루 지나기 전에 moment로 인한 에러 처리 해야 함
import React from 'react'
import '../styles/routine/history.scss'
import { BarChart, Bar, XAxis, Label, Tooltip, LabelList } from 'recharts'
import { format, addDays, isWithinInterval } from 'date-fns'
import { finRoutinesActionsMD } from '../redux/async/routine'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

// TODO history today - joindate 로  dayLength 변수 제대로 값 넣어줘야 함....... / 7일 단위로 나눌 수 있게 해야함...
const HistoryGraph = () => {
    // * get data from server
    const dispatch = useDispatch()
    const graphActionData = []

    //* setting data from server
    const finActions = useSelector((state) => state.routine.fin.finActions)
    const finRoutines = useSelector((state) => state.routine.fin.finRoutines)
    const joinDate = useSelector((state) => state.routine.fin.joinDate)
    const daylength = 2

    const [startDay, setStartDay] = React.useState(0)
    const [week, setWeek] = React.useState(1)
    console.log('>>', joinDate, moment(joinDate).fromNow(true))

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
            }
        })

        history.map((data) =>
            graphActionData.push({
                name: data.date.slice(5, 10).replace('-', '/'),
                actionCtn: data.actions.length,
            })
        )

        return _inital
    }

    if (joinDate) {
        initialDate()
        console.log('<<', getHistory())
    }

    return (
        <>
            <section className="graph-group">
                <section className="graph-title">
                    <button onClick={() => {}}>-</button>
                    <h3>밍기적 {week}주차</h3>
                    <button onClick={() => {}}>+</button>
                </section>
                <section className="graph-container">
                    <p className="graph-desc">
                        밍기적 시작한지 <span>{daylength}</span>일 째 되는 날
                    </p>
                    <BarChart width={340} height={250} data={graphActionData}>
                        <XAxis dataKey="name" axisLine={false} />
                        <Bar
                            dataKey="actionCtn"
                            radius={[10, 10, 10, 10]}
                            fill="#6B76FF"
                            background="#eee"
                            barSize={20}
                        >
                            <LabelList dataKey="actionCtn" position="top" />
                        </Bar>
                    </BarChart>
                </section>
            </section>
        </>
    )
}

export default HistoryGraph
