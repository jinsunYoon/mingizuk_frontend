import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
    const {
        _onChange,
        _ph,
        _value,
        _others,
        _type,
        _width,
        _fontSize,
        _onKeyPress,
    } = props
    const styles = { _others, _width, _fontSize }

    return (
        <>
            <InputEl
                type={_type}
                {...styles}
                placeholder={_ph}
                onChange={_onChange}
                onKeyPress={_onKeyPress}
                // value={_value}
            />
        </>
    )
}

Input.defaultProps = {
    _onChange: () => {},
    _onKeyPress: () => {},
    _ph: '내용을 입력하세요.',
    _others: false,
    _type: 'text',
    _width: '20rem',
    _fontSize: '',
    // _value: ,
}

const InputEl = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.8rem;
    height: 3rem;
    width: ${(props) => props._width};
    border: 1px solid li ghtgray;
    font-size: ${(props) => props._fontSize};
    ${(props) => (props._others ? props._others : '')};
    ${(props) => (props._type ? props._type : '')};
`

export default Input
