import React from 'react'
import styled from 'styled-components'

const SubTitle = (props) => {
    const { _align, children, _others, _margin, _fontSize } = props
    const styles = { _align, _others, _margin, _fontSize }
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
    _margin:'1rem',
    _fontSize:'2rem',
}

const SubTitleEl = styled.h1`
    text-align: ${(props) => props._align};
    font-size: ${(props) => props._fontSize};
    font-weight: 600;
    color: 'black';
    ${(props) => (props._others ? props._others : '')};
    margin: ${(props) => props._margin };
    `

export default SubTitle;
