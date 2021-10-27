import React from 'react'
import styled from 'styled-components'

const FlexColumn = (props) => {
    const {
        children,
        _width,
        _height,
        _justify,
        _align,
        _margin,
        _padding,
        _bgColor,
        _border,
        _others,
    } = props

    const styles = {
        _width,
        _height,
        _justify,
        _align,
        _margin,
        _padding,
        _border,
        _bgColor,
        _others,
    }
    return (
        <>
            <FlexColumnEl {...styles}>{children}</FlexColumnEl>
        </>
    )
}

FlexColumn.defaultProps = {
    children: '',
    _width: '10rem',
    _height: '10rem',
    _justify: 'center',
    _align: 'center',
    _margin: false,
    _padding: false,
    _border: '1px solid lightgray',
    _bgColor: '#fff',
    _others: '',
}

const FlexColumnEl = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props._width};
    height: ${(props) => props._height};
    justify-content: ${(props) => props._justify};
    align-items: ${(props) => props._align};
    border: ${(props) => props._border};
    background-color: ${(props) => props._bgColor};
    ${(props) => (props._margin ? `margin:${props._margin}` : '')};
    ${(props) => (props._padding ? `padding:${props._padding}` : '')};
    ${(props) => (props._others ? props._others : '')};
`

export default FlexColumn
