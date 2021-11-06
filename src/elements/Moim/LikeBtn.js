import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../components/icons/Icon'
import { moimLikeMD, moimUnlikeMD } from '../../redux/async/moim'

const LikeBtn = (props) => {
    const { moim_id, likeUsers } = props
    const [likeColor, setLikeColor] = useState('lightgray')
    const user_id = useSelector((state) => state.user.userInfo.userID)
    const dispatch = useDispatch()

    const confirm = likeUsers?.findIndex(
        (likeuser) => likeuser?.userId === user_id
    )

    React.useEffect(() => {
        likeUsers?.findIndex((likeuser) => likeuser?.userId === user_id) === -1
            ? setLikeColor('lightgray')
            : setLikeColor('red')
    }, [likeUsers])

    console.log(
        likeUsers?.findIndex((likeuser) => likeuser?.userId === user_id)
    )
    console.log(user_id)

    return (
        <>
            <Icon
                icon="favorite"
                size="20px"
                color={likeColor}
                _onClick={() => {
                    confirm === -1
                        ? dispatch(moimLikeMD(moim_id))
                        : dispatch(moimUnlikeMD(moim_id))
                }}
            />
        </>
    )
}

export default LikeBtn
