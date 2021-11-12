import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../components/icons/Icon'
import { moimLikeMD, moimUnlikeMD } from '../../redux/async/moim'

const LikeBtn = (props) => {
    const { moim_id } = props
    const [likeColor, setLikeColor] = React.useState('lightgray')
    const dispatch = useDispatch()
    console.log(moim_id)

    return (
        <>
            <Icon
                icon="heart"
                size="20px"
                color={likeColor}
                _onClick={() => {
                    dispatch(moimLikeMD(moim_id))
                    likeColor === 'red'
                        ? setLikeColor('lightgray')
                        : setLikeColor('red')
                }}
            />
        </>
    )
}

export default LikeBtn
