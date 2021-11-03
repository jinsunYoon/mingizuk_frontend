import React from 'react'
import Header from '../../components/Header'
import MoimPost from '../../components/Moim/MoimPost'
import MoimTemplate from '../../components/Moim/MoimTemplate'

const MoimMain = () => {
    
    return (
        <>
            <div style={{ zIndex: '3' }}>
                <Header name="모임" />
            </div>
            <MoimTemplate>
                <MoimPost />
            </MoimTemplate>
        </>
    )
}

export default MoimMain
