import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RoutineTemplate from '../../components/Routine/RoutineTemplate'
import RoutineCounter from '../../components/Routine/RoutineCounter'
import { Input } from '../../elements/index'
import { Header } from '../../components'
import { myRoutineCreateMD } from '../../redux/async/routine'

const RoutineCount = () => {
    const dispatch = useDispatch()

    const actionSet = useSelector((state) => state.updateAction.actions)
    const [name, setName] = React.useState('')
    const addRoutine = () => {
        const data = {
            routineName: name,
            actions: actionSet,
            isMain: false,
        }
        dispatch(myRoutineCreateMD(data))
    }
    return (
        <>
            <RoutineTemplate button="수정 완료" _onClick_={addRoutine}>
                <div style={{ zIndex: '3' }}>
                    <Header name="내 루틴 추가하기 ( 2 / 2 )" />
                </div>
                <Input
                    _onChange={(e) => setName(e.target.value)}
                    _others="width:85vw;height=40px;margin-top:8px"
                    _value={name}
                />
                <RoutineCounter />
            </RoutineTemplate>
        </>
    )
}

export default RoutineCount
