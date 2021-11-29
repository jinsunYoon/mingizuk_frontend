import React from 'react'
import '../styles/moim/loading.scss'

const Loading = () => {
    return (
        <>
            <section className="loading-container">
                <div className="loading-img-warp">
                    <img src="https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png" />
                </div>
                <div className="dot-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </>
    )
}

export default Loading
