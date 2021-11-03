import React from 'react'
import { useDispatch } from 'react-redux'
import { NavBar } from '../../components'
import Header from '../../components/Header'
import MoimPost from '../../components/Moim/MoimPost'
import MoimTemplate from '../../components/Moim/MoimTemplate'
import { moimReadMD } from '../../redux/async/moim'

const MoimMain = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(moimReadMD())
    }, [])

    return (
        <>
            <div style={{ zIndex: '3' }}>
                <Header name="모임" />
            </div>
            <MoimTemplate>
                <MoimPost />
            </MoimTemplate>
            <NavBar />
        </>
    )
}

export default MoimMain
