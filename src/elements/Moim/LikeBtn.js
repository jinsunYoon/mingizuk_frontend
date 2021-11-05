import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../components/icons/Icon'
import { moimLikeMD, moimUnlikeMD } from '../../redux/async/moim'

const LikeBtn = (props) => {
    const [likeColor, setLikeColor] = useState('lightgray')
    const dispatch = useDispatch()
    const { moim_id } = props
    const isLogin = useSelector((state) => state.user.isLogin)
    const user_nick = useSelector((state) => state.user.userInfo.nickName)
    const state = useSelector((state) => state)

    console.log(state, 'state')

    return (
        <>
            {
                isLogin === true ? (
                    <Icon
                        icon="favorite"
                        size="20px"
                        color={likeColor}
                        _onClick={() => {
                            likeColor === 'red'
                                ? dispatch(moimUnlikeMD(moim_id)) &&
                                  setLikeColor('lightgray')
                                : dispatch(moimLikeMD(moim_id)) &&
                                  setLikeColor('red')
                        }}
                    />
                ) : null
                // window.alert('회원가입 후 이용하실수 있습니다!')
            }
        </>
    )
}

export default LikeBtn
