import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
    const { _onChange, _ph, _label, _others } = props
    const styles = { _others }

    return (
        <>
            <label style={{ marginLeft: '0.8rem' }}>{_label}</label>
            <InputEl {...styles} placeholder={_ph} onChange={_onChange} />
        </>
    )
}

Input.defaultProps = {
    _onChange: () => {},
    _ph: '내용을 입력하세요.',
    _label: '인풋창 입니다.',
    _others: false,
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
`

export default Input
