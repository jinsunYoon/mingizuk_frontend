import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../redux/store'
import { FlexColumn, FlexRow, Text } from '../../elements/index'
import {
    myRoutinePresetMD,
    myRoutineListMD,
    myRoutineDeleteMD,
} from '../../redux/async/routine'
import Icon from '../icons/Icon'
import { updateRoutine } from '../../redux/modules/routineSlice'

const RoutineDesc = (props) => {
    const dispatch = useDispatch()
    const { select } = props
    const [desc, setDesc] = React.useState('first')
    const preset = useSelector((state) => state.routine.presetRoutine)
    const myset = useSelector((state) => state.routine.myRoutine)

    React.useEffect(() => {
        if (select === 'first') {
            setDesc('myRoutine')
        } else if (select === 'second') {
            console.log('secondfffe')
            setDesc('recommendRoutine')
        } else {
            setDesc('myRoutine')
        }
    }, [select])

    React.useEffect(() => {
        dispatch(myRoutinePresetMD())
        dispatch(myRoutineListMD())
    }, [])

    return (
        <>
            {desc === 'myRoutine' && (
                <FlexColumn _border="none" _width="320px">
                    {myset?.map((routine, idx) => (
                        <div
                            onClick={() => {
                                console.log(routine.id)
                            }}
                        >
                            <FlexRow _width="85vw" _border="none" key={idx}>
                                <FlexColumn
                                    key={idx}
                                    _width="85vw"
                                    _height="77px"
                                    _border="none"
                                    _others="border-bottom:1px solid lightgray"
                                    _align="flex-start"
                                >
                                    <Text _fontWeight="600">
                                        {routine?.routineName}
                                    </Text>
                                    <Text _fontSize="11px" _margin="5px 0 0 0">
                                        {routine?.Actions?.map(
                                            (action, idx) => action.actionName
                                        )}
                                    </Text>
                                </FlexColumn>
                                <FlexRow
                                    _width="42px"
                                    _height="77px"
                                    _justify="space-between"
                                    _border="none"
                                    _others="border-bottom:1px solid lightgray"
                                >
                                    <div
                                        onClick={() => {
                                            dispatch(updateRoutine(routine.id))
                                            history.push('/routine/update')
                                        }}
                                    >
                                        <Icon icon="create" size="12px" />
                                    </div>
                                    <Icon
                                        _onClick={() => {
                                            console.log('delete')
                                            dispatch(
                                                myRoutineDeleteMD(routine.id)
                                            )
                                        }}
                                        icon="close-x"
                                        size="14px"
                                    ></Icon>
                                </FlexRow>
                            </FlexRow>
                        </div>
                    ))}
                </FlexColumn>
            )}
            {desc === 'recommendRoutine' && (
                <FlexColumn _border="none" _width="320px">
                    {preset?.map((routine, idx) => (
                        <FlexRow _width="85vw" _border="none" key={idx}>
                            <FlexColumn
                                key={idx}
                                _width="85vw"
                                _height="77px"
                                _border="none"
                                _others="border-bottom:1px solid lightgray"
                                _align="flex-start"
                            >
                                <Text _fontWeight="600">
                                    {routine?.routineName}
                                </Text>
                                <div>
                                    <Text _fontSize="11px" _margin="5px 0 0 0">
                                        {routine?.Actions?.map(
                                            (action, idx) => action.actionName
                                        )}
                                    </Text>
                                </div>
                            </FlexColumn>
                            <FlexRow
                                _width="42px"
                                _height="77px"
                                _justify="space-between"
                                _border="none"
                                _others="border-bottom:1px solid lightgray"
                            >
                                {/* <Icon icon="create" size="12px" />

                                <Icon icon="close-x" size="14px" /> */}
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
