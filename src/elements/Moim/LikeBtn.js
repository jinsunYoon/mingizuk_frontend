import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../components/icons/Icon'
import { moimLikeMD, moimUnlikeMD } from '../../redux/async/moim'

const LikeBtn = (props) => {
    const [likeColor, setLikeColor] = React.useState('lightgray')
    const dispatch = useDispatch()
    const { moim_id } = props
    console.log(moim_id)

    return (
        <>
            {confirm === -1 ? <p>{confirm}</p> : <p>{confirm}</p>}
            <Icon
                icon="favorite"
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
