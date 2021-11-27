import React from 'react'
import { useDispatch } from 'react-redux'
import { moimReadMD } from '../../redux/async/moim'
import { history } from '../../redux/store'
import InfinityScrollPost from '../../elements/Moim/InfinityScrollPost'
import '../../styles/moim/moim-main.scss'

const MoimMain = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(moimReadMD())
    }, [])
    return (
        <>
            <section className="moim-main-layout">
                <InfinityScrollPost />
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
