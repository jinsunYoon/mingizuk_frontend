import React from 'react'
import styled from 'styled-components'

const ActiveUnderLine = (props) => {
    const { children } = props
    return (
        <>
            <ActiveUnderLineEl>{children}</ActiveUnderLineEl>
        </>
    )
}

const ActiveUnderLineEl = styled.button`
    width: 120px;
    height: 48px;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #020202;
`
export default ActiveUnderLine
