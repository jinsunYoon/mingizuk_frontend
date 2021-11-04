import React from 'react'
import Header from '../../components/Header'
import MoimTemplate from '../../components/Moim/MoimTemplate'
import MoimWritePost from '../../components/Moim/MoimWritePost'
import { FlexColumn } from '../../elements'
import dotenv from 'dotenv'

const MoimWrite = () => {
    console.log(process.env.REACT_APP_SECRET_ACCESS_KEY)
    console.log(process.env.REACT_APP_TESTAA)
    return (
        <>
            <div style={{ zIndex: '3' }}>
                <Header name="모임 글쓰기" />
            </div>
            <MoimTemplate>
                <FlexColumn _width="90vw" _height="80vh">
                    <MoimWritePost />
                </FlexColumn>
            </MoimTemplate>
        </>
    )
}

export default MoimWrite
