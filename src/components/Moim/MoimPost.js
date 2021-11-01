import React from 'react'
import styled from 'styled-components'
import PostDesc from '../../elements/Moim/PostDesc'
import PostImg from '../../elements/Moim/PostImg'
import { history } from '../../redux/store'

const MoimPost = () => {
    return (
        <>
            <PostDesc />
            <PostImg />
            <PlusBtn
                onClick={() => {
                    history.push('/moim/write')
                }}
            >
                +
            </PlusBtn>
        </>
    )
}

const PlusBtn = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 20px;
    width: 65px;
    height: 65px;
    font-size: 30px;
    border-radius: 50%;
    border: none;
`

export default MoimPost
