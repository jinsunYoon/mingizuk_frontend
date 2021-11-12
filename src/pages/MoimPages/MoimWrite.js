import React from 'react'
import Header from '../../components/Header'
import MoimWritePost from '../../components/Moim/MoimWritePost'
import '../../styles/moim/moim-write.scss'

const MoimWrite = () => {
    return (
        <>
            <div style={{ zIndex: '3' }}>
                <Header name="모임 글쓰기" type="back" />
            </div>
            <section className="detail-post-layout">
                <MoimWritePost />
            </section>
        </>
    )
}

export default MoimWrite
