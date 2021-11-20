import React from 'react'
import styled from 'styled-components'
import { FlexColumn, Text } from '.'
import { useSelector, useDispatch } from 'react-redux'
import { chageMyHabitModal } from '../redux/modules/routineSlice'
import moment from 'moment'

const HabitToolTip = (props) => {
    const dispatch = useDispatch()
    const { day } = props
    return (
        <>
            <ToolTip
                onClick={() => {
                    dispatch(chageMyHabitModal(false))
                }}
            >
                <FlexColumn _width={'inherit'} _height={'inherit'}>
                    <Text>
                        {moment().format('MM')}월 {day}일
                    </Text>
                    <Text>액션 n개 !</Text>
                    <Text>루틴 n개 !</Text>
                </FlexColumn>
            </ToolTip>
        </>
    )
}

const ToolTip = styled.article`
    width: 60vw;
    height: 100px;
    position: absolute;
    left: 20vw;
`

export default HabitToolTip
