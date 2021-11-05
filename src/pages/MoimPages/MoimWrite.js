import React from 'react'
import Header from '../../components/Header'
import MoimTemplate from '../../components/Moim/MoimTemplate'
import MoimWritePost from '../../components/Moim/MoimWritePost'
import { FlexColumn } from '../../elements'

const MoimWrite = () => {
    return (
        <>
            <div style={{ zIndex: '3' }}>
                <Header name="모임 글쓰기" type="back" />
            </div>
            <MoimTemplate>
                <FlexColumn
                    _width="90vw"
                    _height={'100%'}
                    _padding={'1rem 0px'}
                >
                    <MoimWritePost />
                </FlexColumn>
            </MoimTemplate>
        </>
    )
}

export default MoimWrite
