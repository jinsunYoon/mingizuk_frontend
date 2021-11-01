import moment from 'moment'
import React from 'react'
import Moment from 'react-moment'
import { Text } from '../elements/index'

const Time = (props) => {
    const { _format } = props
    const everyDay = ['일', '월', '화', '수', '목', '금', '토']
    const getDay = () => {
        const day = moment().day()
        return everyDay[day]
    }

    return (
        <Text _fontSize="16px" _fontWeight="700">
            <Moment format={_format}>{new Date()}</Moment> ({getDay()})
        </Text>
    )
}

Time.defaultProps = {
    _format: 'MM.DD',
}

export default Time
