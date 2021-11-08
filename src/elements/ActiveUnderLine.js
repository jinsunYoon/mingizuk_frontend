import React from 'react'
import styled from 'styled-components'

const ActiveUnderLine = (props) => {
    const { active, children, _onClick } = props
    const styles = { active }

    return (
        <ActiveUnderLineEl {...styles} onClick={_onClick}>
            {children}
        </ActiveUnderLineEl>
    )
}

ActiveUnderLine.defaultProps = {
    _onClick: () => {},
    active: false,
}

const ActiveUnderLineEl = styled.button`
    min-width: 120px;
    height: 48px;
    background-color: #fff;
    border: none;
    ${(props) =>
        props.active
            ? `border-bottom: 2px solid #6B76FF;`
            : `border-bottom: 2px solid none;`}
`
export default ActiveUnderLine
