import React from 'react'
import { useDispatch } from 'react-redux'
import { NavBar } from '../../components'
import Header from '../../components/Header'
import MoimPost from '../../components/Moim/MoimPost'
import MoimTemplate from '../../components/Moim/MoimTemplate'
import { moimReadMD } from '../../redux/async/moim'
import '../../styles/moim/moim-main.scss'

const MoimMain = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(moimReadMD())
    }, [])

    return (
        <>
            <Header name="모임" />
            <section className="moim-main-layout">
                <MoimPost />
            </section>
            <NavBar />
        </>
    )
}

export default MoimMain
