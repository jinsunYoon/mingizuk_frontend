import React from 'react'
import styled from 'styled-components'
import PostDesc from '../../elements/Moim/PostDesc'
import PostImg from '../../elements/Moim/PostImg'
import { history } from '../../redux/store'

const MoimPost = () => {
    // TODO img src 유무에 따른 컴포넌트 분기 처리 , 아마 PostDesc에서 한번에 해결해야 되지 않을까
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
    position: fixed;
    z-index: 2;
    bottom: 80px;
    right: 0;
    margin: 10px;
    width: 65px;
    height: 65px;
    font-size: 30px;
    border-radius: 50%;
    border: none;
`

export default MoimPost
