import React from 'react'
import { useDispatch } from 'react-redux'
import { moimReadMD } from '../../redux/async/moim'
import { history } from '../../redux/store'
import InfinityScrollPost from '../../elements/Moim/InfinityScrollPost'
import PostDesc from '../../elements/Moim/PostDesc'
import '../../styles/moim/moim-main.scss'

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
