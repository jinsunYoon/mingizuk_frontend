import moment from 'moment'
import React from 'react'
import Moment from 'react-moment'
import { Text } from '../elements/index'

const Time = (props) => {
    const { _format, type } = props
    const everyDay = ['일', '월', '화', '수', '목', '금', '토']
    const getDay = () => {
        const day = moment().day()
        return everyDay[day]
    }

    if (type === 'every') {
        return (
            <Text _fontSize="0.875rem" _fontWeight="500" _padding={'1rem'}>
                <Moment format={_format}>{new Date()}</Moment> ({getDay()})
            </Text>
        )
    }

    if (type === 'num') {
        return (
            <Text _fontSize="0.875rem" _fontWeight="500" _padding={'1rem'}>
                <Moment format={_format}>{new Date()}</Moment>월
            </Text>
        )
    }
}

Time.defaultProps = {
    _format: 'MM.DD',
    type: 'every',
}

export default Time
