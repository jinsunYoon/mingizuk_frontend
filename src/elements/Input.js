import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
    const { _onChange, _ph, _others, _type } = props
    const styles = { _others }

    return (
        <>
            <InputEl {...styles} placeholder={_ph} onChange={_onChange} type={_type} />
        </>
    )
}

Input.defaultProps = {
    _onChange: () => {},
    _ph: '내용을 입력하세요.',
    _others: false,
    _type: 'text'
}

const InputEl = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.8rem;
    width: 20rem;
    height: 3rem;
    border: 1px solid lightgray;
    ${(props) => (props._others ? props._others : '')};
    ${(props) => (props._type ? props._type : '')};
`

export default Input
