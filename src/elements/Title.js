import React from 'react'
import styled from 'styled-components'

const Title = (props) => {
    const { _align, children, _others } = props
    const styles = { _align, _others }
    return (
        <>
            <TitleEl {...styles}>{children}</TitleEl>
        </>
    )
}

Title.defaultProps = {
    _align: 'center',
    _others: false,
}

const TitleEl = styled.h1`
    text-align: ${(props) => props._align};
    font-size: 3rem;
    font-weight: 700;
    color: 'black';
    ${(props) => (props._others ? props._others : '')};
`

export default Title
