import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PostDesc from '../../elements/Moim/PostDesc'
import { history } from '../../redux/store'

const MoimPost = () => {
    const [likedsort, likedsortSet] = useState('')
    const [createdatsort, createdatsortSet] = useState('')
    const [locationsort, locationsortSet] = useState('')

    const moiminfo = useSelector((state) => state.moim.moim_all)

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
