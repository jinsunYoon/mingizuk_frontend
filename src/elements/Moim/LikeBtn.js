import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../components/icons/Icon'
import { moimLikeMD, moimUnlikeMD } from '../../redux/async/moim'

const LikeBtn = (props) => {
    const [likeColor, setLikeColor] = useState('lightgray')

    const user_id = useSelector((state) => state.user.userInfo.userID)
    const likeUsers = useSelector((state) => state.moim.moim_detail.Likes)

    const { moim_id } = props
    const dispatch = useDispatch()

    const confirm = likeUsers?.findIndex(
        (likeuser) => likeuser?.userId === user_id
    )

    React.useEffect(() => {
        confirm === -1 ? setLikeColor('lightgray') : setLikeColor('red')
    }, [confirm])

    return (
        <>
            {confirm === -1 ? <p>{confirm}</p> : <p>{confirm}</p>}
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
