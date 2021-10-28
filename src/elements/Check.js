import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FlexRow } from '.'
import Icon from '../components/icons/Icon'
import { addAction, minusAction } from '../redux/modules/updateRoutine'

const Check = (props) => {
    const [check, setCheck] = React.useState(false)
    const dispatch = useDispatch()
    const value = props.value

    return (
        <div
            onClick={(e) => {
                !check ? setCheck(true) : setCheck(false)
                !check
                    ? dispatch(addAction(value))
                    : dispatch(minusAction(value))
            }}
        >
            {check ? (
                <FlexRow
                    _width="18px"
                    _height="18px"
                    _bgColor="#020202"
                    border="none"
                    _others="border-radius:2px"
                >
                    <Icon size="16px" icon="done-check" color="#fff" />
                </FlexRow>
            ) : (
                <FlexRow
                    _width="18px"
                    _height="18px"
                    _border="2px solid #020202"
                    _others="border-radius:2px"
                ></FlexRow>
            )}
        </div>
    )
}

export default Check