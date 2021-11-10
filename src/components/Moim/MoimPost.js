import React from 'react'
import PostDesc from '../../elements/Moim/PostDesc'
import { history } from '../../redux/store'

const MoimPost = () => {
    return (
        <>
            <PostDesc />
            <button
                className="moim-add-btn"
                onClick={() => {
                    history.push('/moim/write')
                }}
            >
                +
            </button>
        </>
    )
}

export default MoimPost
