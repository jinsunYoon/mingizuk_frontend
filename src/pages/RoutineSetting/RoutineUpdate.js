import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../components'
import RoutineUpdateSelect from '../../components/Routine/RoutineUpdateSelect'
import RoutineTemplate from '../../components/Routine/RoutineTemplate'
import ToggleTab from '../../components/ToggleTab'
import { myRoutineListMD } from '../../redux/async/routine'
import { history } from '../../redux/store'

const RoutineUpdate = () => {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.routine.myPage)
    const selectList = useSelector((state) => state.updateAction.actions)
    const selectNum = ` 선택 완료 ( ${selectList.length} / 전체 )`

    React.useEffect(() => {
        dispatch(myRoutineListMD())
    }, [])

    return (
        <>
            <Header name="내 루틴 수정하기 ( 1 / 2 )" />
            <RoutineTemplate
                button={selectNum}
                _onClick_={() => history.push('/routine/update/count')}
            >
                <ToggleTab firstValue={'스트레칭'} secondValue={'맨몸 운동'} />
                <RoutineUpdateSelect select={status} />
            </RoutineTemplate>
        </>
    )
}

export default RoutineUpdate
