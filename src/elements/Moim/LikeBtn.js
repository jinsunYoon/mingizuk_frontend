import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../components/icons/Icon'
import { moimLikeMD, moimUnlikeMD } from '../../redux/async/moim'

const LikeBtn = (props) => {
    const [likeColor, setLikeColor] = useState('lightgray')
    const dispatch = useDispatch()
    const { moim_id } = props

    const post_data = useSelector((state) => state.moim.moim_detail.MoimUsers)
    const user_id = useSelector((state) => state.user.userInfo.userID)

    return (
        <>
            <Icon
                icon="favorite"
                size="20px"
                color={likeColor}
                _onClick={() => {
                    console.log(
                        '로긴유저아이디:',
                        user_id,
                        '포스트유저아이디:',
                        post_data[0].userId
                    )
                     user_id === post_data[0].userId
                        ? setLikeColor('red') 
                        : setLikeColor('ligtgrey')
                }}
            />
        </>
    )
}

export default LikeBtn
