import React from 'react'
import styled from 'styled-components'

const Mobile = (props) => {
    const { children } = props
    return (
        <>
            <MobileGrid>{children}</MobileGrid>
        </>
    )
}

const MobileGrid = styled.section`
    width: 100vw;
    padding: 0 16px 36px 16px;
`

export default Mobile
