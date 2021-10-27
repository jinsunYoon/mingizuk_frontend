import React from 'react'
import styled from 'styled-components'

const FlexRow = (props) => {
    const {
        children,
        _width,
        _height,
        _justify,
        _align,
        _margin,
        _padding,
        _others,
    } = props
    
    const styles = {
        _width,
        _height,
        _justify,
        _align,
        _margin,
        _padding,
        _others,
    }
    return (
        <>
            <FlexRowEl {...styles}>{children}</FlexRowEl>
        </>
    )
}

FlexRow.defaultProps = {
    children: null,
    _width: '10rem',
    _height: '',
    _justify: 'center',
    _align: 'center',
    _margin: false,
    _padding: false,
    _others: false,
}

const FlexRowEl = styled.div`
    display: flex;
    flex-direction: row;
    width: ${(props) => props._width};
    height: ${(props) => props._height};
    justify-content: ${(props) => props._justify};
    align-items: ${(props) => props._align};
    ${(props) => (props._margin ? `margin:${props._margin}` : '')};
    ${(props) => (props._padding ? `_padding:${props._padding}` : '')};
    ${(props) => (props._others ? props._others : '')};
`

export default FlexRow
