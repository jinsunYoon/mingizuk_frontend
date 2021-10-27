import React from 'react'
import Check from '../../elements/Check'
import { FlexColumn, FlexRow, Text } from '../../elements/index'

const RoutineSelect = (props) => {
    const { stretching, body_exercise, select } = props
    const [desc, setDesc] = React.useState('first')

    React.useEffect(() => {
        if (select === 'first') {
            setDesc('stretching')
        } else if (select === 'second') {
            setDesc('body_exercise')
        } else {
            setDesc('stretching')
        }
    })

    return (
        <>
            {desc === 'stretching' && (
                <FlexColumn _border="none" _width="85vw">
                    {stretching.map((routine, idx) => (
                        <FlexRow
                            _width="85vw"
                            _height="60px"
                            _border="none"
                            _justify="space-between"
                            _others="border-bottom:1px solid lightgray"
                            key={idx}
                        >
                            <Text _fontSize="11px" _margin="10px 0">
                                {routine}
                            </Text>
                            <Check value={routine} />
                        </FlexRow>
                    ))}
                </FlexColumn>
            )}
            {desc === 'body_exercise' && (
                <FlexColumn _border="none" _width="85vw">
                    {body_exercise.map((routine, idx) => (
                        <FlexRow
                            _width="85vw"
                            _height="60px"
                            _border="none"
                            _justify="space-between"
                            _others="border-bottom:1px solid lightgray"
                            key={idx}
                        >
                            <Text _fontSize="11px" _margin="10px 0">
                                {routine}
                            </Text>
                            <Check />
                        </FlexRow>
                    ))}
                </FlexColumn>
            )}
        </>
    )
}

RoutineSelect.defaultProps = {
    stretching: [
        '앉았다 일어나기',
        '목 돌리기',
        '어깨 돌리기',
        '허리 돌리기',
        '무릎 돌리기',
    ],
    body_exercise: ['스쿼트', '런지', '플랭크', '푸쉬업'],
    select: 'first',
}

export default RoutineSelect
