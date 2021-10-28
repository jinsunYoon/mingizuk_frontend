import React from 'react'
import { FlexColumn, FlexRow, Text } from '../../elements/index'
import Icon from '../icons/Icon'

const RoutineDesc = (props) => {
    const { myRoutine, select, recommendRoutine } = props
    const [desc, setDesc] = React.useState('first')

    React.useEffect(() => {
        if (select === 'first') {
            setDesc('myRoutine')
        } else if (select === 'second') {
            setDesc('recommendRoutine')
        } else {
            setDesc('myRoutine')
        }
    })

    return (
        <>
            {desc === 'myRoutine' && (
                <FlexColumn _border="none" _width="320px">
                    {myRoutine.map((routine, idx) => (
                        <FlexRow _width="85vw" _border="none" key={idx}>
                            <FlexColumn
                                key={idx}
                                _width="85vw"
                                _height="77px"
                                _border="none"
                                _others="border-bottom:1px solid lightgray"
                                _align="flex-start"
                            >
                                <Text _fontWeight="600">{routine.key}</Text>
                                <Text _fontSize="11px" _margin="5px 0 0 0">
                                    {routine.value}
                                </Text>
                            </FlexColumn>
                            <FlexRow
                                _width="42px"
                                _height="77px"
                                _justify="space-between"
                                _border="none"
                                _others="border-bottom:1px solid lightgray"
                            >
                                <Icon icon="create" size="12px"></Icon>
                                <Icon icon="close-x" size="14px"></Icon>
                            </FlexRow>
                        </FlexRow>
                    ))}
                </FlexColumn>
            )}
            {desc === 'recommendRoutine' && (
                <FlexColumn _border="none" _width="320px">
                    {recommendRoutine.map((routine, idx) => (
                        <FlexRow _width="85vw" _border="none" key={idx}>
                            <FlexColumn
                                key={idx}
                                _width="85vw"
                                _height="77px"
                                _border="none"
                                _others="border-bottom:1px solid lightgray"
                                _align="flex-start"
                            >
                                <Text _fontWeight="600">{routine.key}</Text>
                                <Text _fontSize="11px" _margin="5px 0 0 0">
                                    {routine.value}
                                </Text>
                            </FlexColumn>
                            <FlexRow
                                _width="42px"
                                _height="77px"
                                _justify="space-between"
                                _border="none"
                                _others="border-bottom:1px solid lightgray"
                            >
                                <Icon icon="create" size="12px"></Icon>
                                <Icon icon="close-x" size="14px"></Icon>
                            </FlexRow>
                        </FlexRow>
                    ))}
                </FlexColumn>
            )}
        </>
    )
}

RoutineDesc.defaultProps = {
    myRoutine: [
        {
            key: '회사에서',
            value: '허리돌리기/어깨 돌리기/앉았다 일어나기/목 돌리기 ',
        },
        {
            key: '회사에서',
            value: '허리돌리기/어깨 돌리기/앉았다 일어나기/목 돌리기 ',
        },
    ],
    recommendRoutine: [
        {
            key: '집에서',
            value: '허리돌리기/어깨 돌리기/앉았다 일어나기/목 돌리기 ',
        },
        {
            key: '집에서',
            value: '허리돌리기/어깨 돌리기/앉았다 일어나기/목 돌리기 ',
        },
    ],
    select: 'first',
}

export default RoutineDesc
