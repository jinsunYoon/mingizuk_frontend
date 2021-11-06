import React from 'react'
import { useDispatch } from 'react-redux'
import Icon from '../components/icons/Icon'
import { addAction, minusAction } from '../redux/modules/updateRoutine'

const UpdateCheck = (props) => {
    const [check, setCheck] = React.useState(false)
    const dispatch = useDispatch()
    const { value, type, pre_select } = props

    React.useEffect(() => {
        if (pre_select === true) {
            setCheck(true)
            dispatch(addAction({ value, type }))
        }
    }, [])

    return (
        <div
            onClick={() => {
                !check ? setCheck(true) : setCheck(false)
                !check
                    ? dispatch(addAction({ value, type }))
                    : dispatch(minusAction({ value, type }))
            }}
        >
            {check ? (
                <Icon size="16px" icon="done-check" color="#6B76FF" />
            ) : (
                <Icon size="16px" icon="done-check" color="#A5ABB0" />
            )}
        </div>
    )
}

export default UpdateCheck
