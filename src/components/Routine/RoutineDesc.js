import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../redux/store'
import { FlexColumn, FlexRow, Text, ButtonFill } from '../../elements/index'
import {
    myRoutinePresetMD,
    myRoutineListMD,
    myRoutineDeleteMD,
    setMainRoutineMD,
} from '../../redux/async/routine'
import Icon from '../icons/Icon'
import { updateRoutine } from '../../redux/modules/routineSlice'
import { setAction } from '../../redux/modules/mainRoutine'

const RoutineDesc = (props) => {
    const dispatch = useDispatch()
    const { select } = props
    const [desc, setDesc] = React.useState('first')
    const [mainBtnStatus, setMainBtnStatus] = React.useState(false)
    const preset = useSelector((state) => state.routine.presetRoutine)
    const myset = useSelector((state) => state.routine.myRoutine)
    console.log('마이셋', myset)
    console.log(mainBtnStatus)

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
                <FlexColumn _border="none" _width="320px" _height="70px">
                    {myset?.map((routine, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                !mainBtnStatus
                                    ? setMainBtnStatus(true)
                                    : setMainBtnStatus(false)
                                if (routine.Actions.length > 0) {
                                    const data = {
                                        routineId:
                                            routine?.Actions[0].routineId,
                                    }
                                    console.log('루틴아이디', data)
                                    dispatch(setMainRoutineMD(data))
                                }
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
                                            const answer =
                                                window.confirm(
                                                    '해당 루틴을 삭제하시겠습니까 ?'
                                                )
                                            if (answer) {
                                                dispatch(
                                                    myRoutineDeleteMD(
                                                        routine.id
                                                    )
                                                )
                                            } else return
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
                    {preset.length > 0 &&
                        preset?.map((routine, idx) => (
                            <div
                                onClick={() => {
                                    !mainBtnStatus
                                        ? setMainBtnStatus(true)
                                        : setMainBtnStatus(false)
                                    const data = {
                                        name: routine?.routineName,
                                        actions: routine.Actions,
                                    }
                                    dispatch(setAction(data))
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
                                        <div>
                                            <Text
                                                _fontSize="11px"
                                                _margin="5px 0 0 0"
                                            >
                                                {routine?.Actions?.map(
                                                    (action, idx) =>
                                                        action.actionName
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
                            </div>
                        ))}
                </FlexColumn>
            )}
            {mainBtnStatus && (
                <div
                    style={{
                        zIndex: '3',
                    }}
                >
                    <ButtonFill
                        _width="217px"
                        _height="48px"
                        _padding="16px 24px"
                        _margin="0"
                        _others="position:fixed;bottom: 80px;right:25vw;"
                        _onClick={() => {
                            history.push('/')
                        }}
                    >
                        메인 루틴으로 설정하기
                    </ButtonFill>
                </div>
            )}
        </>
    )
}

RoutineDesc.defaultProps = {
    select: 'first',
}

export default RoutineDesc
