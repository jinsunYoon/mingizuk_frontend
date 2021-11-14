import React from 'react'
import Header from '../../components/Header'
import MoimUpdateWrite from '../../components/Moim/MoimUpdateWrite'
import '../../styles/moim/moim-write.scss'

const MoimUpdate = () => {
    return (
        <>
            <div style={{ zIndex: '3' }}>
                <Header name="모임 수정하기" type="back" />
            </div>
            <section className="detail-post-layout">
                <MoimUpdateWrite />
            </section>
        </>
    )
}

export default MoimUpdate
