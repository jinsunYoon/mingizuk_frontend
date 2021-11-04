import React from 'react'
import Icon from '../../components/icons/Icon'

const LikeBtn = () => {
    const [likeColor, setLikeColor] = React.useState('lightgray')
    return (
        <>
            <Icon
                icon="favorite"
                size="20px"
                color={likeColor}
                _onClick={() =>
                    likeColor === 'red'
                        ? setLikeColor('lightgray')
                        : setLikeColor('red')
                }
            />
        </>
    )
}

export default LikeBtn
