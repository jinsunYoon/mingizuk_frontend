import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../redux/store'

import styled from 'styled-components'
import Icon from '../icons/Icon'
import { Text } from '../../elements/index'
import { NavBar } from '../index'
import { myMoimLikeMD } from '../../redux/async/myMoim'

const MyLike = () => {
    const dispatch = useDispatch()
    const like_list = useSelector((state) => state.myMoim)
    console.log('>>>', like_list)

    React.useEffect(() => {
        dispatch(myMoimLikeMD())
    }, [])

    // 모임좋아요기능 끝나면, 마이모임좋아요기능 추가하기!
    return (
        <>
            <section className="mylike">{}</section>
            <NavBar />
        </>
    )
}

export default MyLike
