import React from 'react'
import styled from 'styled-components'

const SubTitle = (props) => {
    const { _align, children, _others } = props
    const styles = { _align, _others }
    return (
        <>
            <SubTitleEl {...styles}>{children}</SubTitleEl>
        </>
    )
}

SubTitle.defaultProps = {
    childern: '',
    _align: 'center',
    _others: false,
}

const SubTitleEl = styled.h1`
    text-align: ${(props) => props._align};
    font-size: 2rem;
    font-weight: 600;
    color: 'black';
    ${(props) => (props._others ? props._others : '')};
`

export default SubTitle
