import React from 'react'
import Check from '../../elements/Check'
import { FlexColumn, FlexRow, Text } from '../../elements/index'

const RoutineSelect = (props) => {
    const { selectRoutine } = props
    return (
        <>
            <FlexColumn _border="none" _width="85vw">
                {selectRoutine.map((routine, idx) => (
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
        </>
    )
}

RoutineSelect.defaultProps = {
    selectRoutine: [
        '앉았다 일어나기',
        '목 돌리기',
        '어깨 돌리기',
        '허리 돌리기',
        '무릎 돌리기',
    ],
}

export default RoutineSelect
