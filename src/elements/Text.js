import React from 'react'
import styled from 'styled-components'

const Text = (props) => {
    const {
        children,
        _fontSize,
        _color,
        _fontWeight,
        _align,
        _margin,
        _padding,
        _others,
        _font,
    } = props

    const styles = {
        _fontSize,
        _color,
        _fontWeight,
        _align,
        _margin,
        _padding,
        _others,
        _font,
    }

    return (
        <React.Fragment>
            <ElText {...styles}>{children}</ElText>
        </React.Fragment>
    )
}

Text.defaultProps = {
    children: '이건텍스트',
    _fontSize: '14px',
    _color: 'black',
    _fontWeight: '400',
    _align: 'center',
    _margin: false,
    _padding: false,
    _font: "'Noto Sans KR', sans-serif;",
    others: '',
}

const ElText = styled.div`
    font-size: ${(props) => props._fontSize};
    color: ${(props) => props._color};
    font-weight: ${(props) => props._fontWeight};
    text-align: ${(props) => props._align};
    margin: ${(props) => props._margin};
    padding: ${(props) => props._padding};
    font-family: ${(props) => props._font};
    ${(props) => props.others};
`

export default Text
