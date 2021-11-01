import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
// import 'react-calendar-heatmap/dist/styles.css'
import moment from 'moment'

const HabitTraker = () => {
    const startMonth = moment().format('YYYY-MM')
    const lastDay = moment().endOf('month').format('YYYY-MM-DD')
    console.log(startMonth, lastDay)

    return (
        <>
            <CalendarHeatmap
                values={[{ date: '2021-11-01', count: 3 }]}
                startDate={`${startMonth}-01`}
                showMonthLabels={false}
                endDate={lastDay}
                horizontal={false}
                gutterSize={5}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty'
                    }
                    return `color-scale-${value.count}`
                }}
            />
        </>
    )
}

export default HabitTraker
