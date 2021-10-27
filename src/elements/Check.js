import React from 'react'
import { FlexRow } from '.'
import Icon from '../components/icons/Icon'

const Check = () => {
    const [check, setCheck] = React.useState(false)
    return (
        <div
            onClick={() => {
                !check ? setCheck(true) : setCheck(false)
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
