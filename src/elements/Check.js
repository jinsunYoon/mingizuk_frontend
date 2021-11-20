import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, minusAction } from '../redux/modules/updateRoutine'
import Icon from '../components/icons/Icon'

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
                <Icon size="16px" color="#6B76FF" icon="check" />
            ) : (
                <Icon size="16px" color="#A5ABB0" icon="check" />
            )}
        </div>
    )
}

export default Check
