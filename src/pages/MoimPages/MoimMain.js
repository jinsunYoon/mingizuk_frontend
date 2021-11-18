import React from 'react'
import PostDesc from '../../elements/Moim/PostDesc'
import '../../styles/moim/moim-main.scss'
import { history } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { moimReadMD } from '../../redux/async/moim'

const MoimMain = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(moimReadMD())
    }, [])

    return (
        <>
            <section className="moim-main-layout">
                <PostDesc />
                <button
                    className="moim-add-btn"
                    onClick={() => {
                        history.push('/moim/write')
                    }}
                >
                    +
                </button>
            </section>
        </>
    )
}

export default MoimMain
