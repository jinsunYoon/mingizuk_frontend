import React from 'react'
import Check from '../../elements/Check'
import { FlexColumn, FlexRow, Text } from '../../elements/index'
import { useDispatch, useSelector } from 'react-redux'

const RoutineUpdateSelect = (props) => {
    const { body_exercise, select } = props
    const [desc, setDesc] = React.useState('first')
    const myset = useSelector((state) => state.routine.myRoutine)
    const myRoutineId = useSelector((state) => state.routine.updateRoutineRef)
    const myRoutineRef = myset?.filter((set) => set.id === myRoutineId)[0]
        .Actions

    React.useEffect(() => {
        if (select === 'first') {
            setDesc('stretching')
        } else if (select === 'second') {
            setDesc('body_exercise')
        } else {
            setDesc('stretching')
        }
    })

    console.log(myRoutineRef)

    return (
        <>
            {desc === 'stretching' && (
                <FlexColumn _border="none" _width="85vw">
                    {myRoutineRef.map((routine, idx) => (
                        <FlexRow
                            _width="85vw"
                            _height="60px"
                            _border="none"
                            _justify="space-between"
                            _others="border-bottom:1px solid lightgray"
                            key={idx}
                        >
                            <Text _fontSize="11px" _margin="10px 0">
                                {routine.actionName}
                            </Text>
                            <Check value={routine.actionName} />
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

RoutineUpdateSelect.defaultProps = {
    body_exercise: ['스쿼트', '런지', '플랭크', '푸쉬업'],
    select: 'first',
}

export default RoutineUpdateSelect
