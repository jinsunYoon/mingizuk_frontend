import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Header } from '../../components'
import RoutineSelect from '../../components/Routine/RoutineSelect'
import RoutineTemplate from '../../components/Routine/RoutineTemplate'
import ToggleTab from '../../components/ToggleTab'

const RoutineUpdate = () => {
    const history = useHistory()
    const status = useSelector((state) => state.routine.myPage)
    const selectList = useSelector((state) => state.updateAction.actions)
    const selectNum = ` 선택 완료 ( ${selectList.length} / 전체 )`

    return (
        <>
            <Header name="내 루틴 수정하기 ( 1 / 2 )" />
            <RoutineTemplate
                button={selectNum}
                _onClick_={() => history.push('/routine/count')}
            >
                <ToggleTab firstValue={'스트레칭'} secondValue={'맨몸 운동'} />
                <RoutineSelect select={status} />
            </RoutineTemplate>
        </>
    )
}

export default RoutineUpdate
