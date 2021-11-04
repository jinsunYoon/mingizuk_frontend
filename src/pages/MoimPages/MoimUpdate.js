import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/Header'
import MoimTemplate from '../../components/Moim/MoimTemplate'
import MoimUpdateWrite from '../../components/Moim/MoimWritePost'
import { FlexColumn } from '../../elements'

const MoimUpdate = () => {
    return (
        <>
            <div style={{ zIndex: '3' }}>
                <Header name="모임 수정하기" type="back" />
            </div>
            <MoimTemplate>
                <FlexColumn _width="90vw" _height="80vh">
                    <MoimUpdateWrite />
                </FlexColumn>
            </MoimTemplate>
        </>
    )
}

export default MoimUpdate
