import React from 'react'
import { useDispatch } from 'react-redux'
import { NavBar } from '../../components'
import Header from '../../components/Header'
import MoimPost from '../../components/Moim/MoimPost'
import MoimTemplate from '../../components/Moim/MoimTemplate'
import { moimReadMD } from '../../redux/async/moim'
import '../../styles/moim/moimpage.scss'
const MoimMain = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(moimReadMD())
    }, [])

    return (
        <>
            <div className="moim-layout">
                <Header name="모임" />
                <section className="contents">
                    <MoimTemplate>
                        <MoimPost />
                    </MoimTemplate>
                </section>
                <NavBar />
            </div>
        </>
    )
}

export default MoimMain
