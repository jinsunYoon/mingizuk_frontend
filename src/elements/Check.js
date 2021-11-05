import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, minusAction } from '../redux/modules/updateRoutine'
import ICheck from '../styles/shared/icon/ICheck'

const Check = (props) => {
    const [check, setCheck] = React.useState(false)
    const dispatch = useDispatch()
    const value = props.value
    const type = props.type

    return (
        <div
            onClick={(e) => {
                !check ? setCheck(true) : setCheck(false)
                !check
                    ? dispatch(addAction({ value, type }))
                    : dispatch(minusAction({ value, type }))
            }}
        >
            {check ? (
                <ICheck size="16px" fill="#6B76FF" />
            ) : (
                <ICheck size="16px" fill="#A5ABB0" />
            )}
        </div>
    )
}

export default Check
