import React from 'react'
import moment from 'moment'
import clsx from 'clsx'
import '../../styles/routine/habit-traker.scss'
import { useSelector, useDispatch } from 'react-redux'
import { finRoutinesActionsMD } from '../../redux/async/routine'

const HabitTraker = () => {
    const dispatch = useDispatch()
    const [day, setDay] = React.useState('')
    React.useEffect(() => {
        dispatch(finRoutinesActionsMD())
    }, [])
    const finActions = useSelector((state) => state.routine.fin.finActions)
    const finRoutines = useSelector((state) => state.routine.fin.finRoutines)
    const lastDay = moment().endOf('month').format('DD')
    const designMap = []
    const monthMap = []

    // * 해당 달에 대한 배열
    for (let i = 1; i < Number(lastDay) + 1; i++) {
        monthMap.push({ date: i, actions: [], routines: [] })
    }

    // * 디자인적 요소를 위한 배열
    if (monthMap.length < 31) {
        for (let i = 1; i < 31; i++) {
            designMap.push(i)
        }
    } else {
        for (let i = 1; i < 41; i++) {
            designMap.push(i)
        }
    }
    const getExerciseData = () => {
        monthMap.forEach((data) => {
            const idx = finActions?.findIndex(
                ({ date }) => Number(date.slice(8, 10)) === data.date
            )
            const idx2 = finRoutines?.findIndex(
                ({ date }) => Number(date.slice(8, 10)) === data.date
            )
            if (idx !== -1) {
                data.actions = finActions[idx]?.actions
            }
            if (idx2 !== -1) {
                data.routines = finRoutines[idx]?.routines
            }
        })
        return monthMap
    }
    // console.log(finActions)

    return (
        <div className="all-container">
            <p className="habit-title">이번달 해빗 트래커</p>
            <section className="habit-container">
                {designMap.map((day, idx) => (
                    <div className="habit-box" key={idx} />
                ))}
                <section className="day-container">
                    {monthMap.map((day, idx) => (
                        <div key={idx}>
                            {day.date === 1 && (
                                <span className="first-day">1일</span>
                            )}
                            <div
                                className={clsx(
                                    'habit-box-dark',
                                    day.actions.length !== 0 && 'habit-action'
                                )}
                                key={idx}
                            />
                            {day.date === Number(lastDay) && (
                                <span className="last-day">{lastDay}일</span>
                            )}
                        </div>
                    ))}
                </section>
            </section>
        </div>
    )
}

export default HabitTraker
