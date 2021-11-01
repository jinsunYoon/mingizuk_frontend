import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import HabitToolTip from '../elements/HabitToolTip'
import { useSelector, useDispatch } from 'react-redux'
import { chageMyHabitModal } from '../redux/modules/routineSlice'

const HabitTrakerV2 = () => {
    const dispatch = useDispatch()
    const modalState = useSelector((state) => state.routine.habitModal)

    const [day, setDay] = React.useState('')
    const lastDay = moment().endOf('month').format('DD')
    const monthMap = []

    for (let i = 1; i < Number(lastDay) + 1; i++) {
        monthMap.push(i)
    }

    return (
        <>
            {monthMap.map((day, idx) => (
                <DayBox
                    // onMouseOver={(day) => {
                    //     setTipState(true)
                    //     setDay(day)
                    // }}
                    // onMouseLeave={(day) => {
                    //     setTipState(false)
                    //     setDay(day)
                    // }}
                    onClick={() => {
                        !modalState
                            ? dispatch(chageMyHabitModal(true))
                            : dispatch(chageMyHabitModal(false))
                        setDay(day)
                    }}
                    key={idx}
                ></DayBox>
            ))}
            {modalState && <HabitToolTip day={day} />}
        </>
    )
}

const DayBox = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background-color: #212121;
`

export default HabitTrakerV2
