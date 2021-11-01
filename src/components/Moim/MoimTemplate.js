import React from 'react'
import styled from 'styled-components'
import { FlexColumn } from '../../elements'

const MoimTemplate = (props) => {
    const { children, is_btn } = props
    return (
        <>
            <FlexColumn
                _width="100vw"
                _border="none"
                _height="100%"
                _margin="10px 0"
            >
                {children}
            </FlexColumn>
            {is_btn && <PlusBtn>+</PlusBtn>}
        </>
    )
}

MoimTemplate.defaultProps = {
    children: '',
    is_btn: false,
}

const PlusBtn = styled.button`
    width: 50px;
    height: 50px;
`

export default MoimTemplate
