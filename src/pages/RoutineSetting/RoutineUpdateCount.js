import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../components'
import { Input } from '../../elements/index'
import RoutineTemplate from '../../components/Routine/RoutineTemplate'
import RoutineCounter from '../../components/Routine/RoutineCounter'
import { myRoutineUpdateMD } from '../../redux/async/routine'
import { resetAction } from '../../redux/modules/updateRoutine'

const RoutineUpdateCount = () => {
    const dispatch = useDispatch()
    const actionSet = useSelector((state) => state.updateAction.actions)
    const myset = useSelector((state) => state.routine.myRoutine)
    const myRoutineId = useSelector((state) => state.routine.updateRoutineRef)
    const myRoutineRef = myset?.filter((set) => set.id === myRoutineId)[0]
        .routineName

    const [name, setName] = React.useState(myRoutineRef)
    console.log(name)

    const updateRoutine = () => {
        const data = {
            routineId: myRoutineId,
            routineName: name,
            actions: actionSet,
            isMain: false,
        }
        console.log(data)
        dispatch(myRoutineUpdateMD(data))
        dispatch(resetAction())
    }
    return (
        <>
            <RoutineTemplate button="수정 완료" _onClick_={updateRoutine}>
                <div style={{ zIndex: '3' }}>
                    <Header name="내 루틴 수정하기 ( 2 / 2 )" />
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

export default RoutineUpdateCount
