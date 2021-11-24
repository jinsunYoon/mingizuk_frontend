import React from 'react'
import { useDispatch } from 'react-redux'
import Icon from '../../components/icons/Icon'
import { moimLikeMD, moimUnlikeMD } from '../../redux/async/moim'

const LikeBtn = (props) => {
    const { moim_id, likeUsers, user_id } = props
    const dispatch = useDispatch()
    const confirm = likeUsers?.findIndex(({ userId }) => userId === user_id)

    return (
        <>
            {confirm !== -1 ? (
                <Icon
                    icon="heart"
                    size="20px"
                    color="#FD8787"
                    _onClick={() => {
                        dispatch(moimUnlikeMD(moim_id))
                    }}
                />
            ) : (
                <Icon
                    icon="heart"
                    size="20px"
                    color="lightgray"
                    _onClick={() => {
                        dispatch(moimLikeMD(moim_id))
                    }}
                />
            )}
        </>
    )
}

export default LikeBtn
