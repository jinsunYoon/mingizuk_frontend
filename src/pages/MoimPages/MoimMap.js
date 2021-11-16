import React from 'react'
import Header from '../../components/Header'
import MapSearch from '../../components/Moim/MapSearch'
import '../../styles/moim/moim-write.scss'

const MoimMap = () => {
    return (
        <>
            <div style={{ zIndex: '3' }}>
                <Header name="모임 위치 설정" type="back" />
            </div>
            <MapSearch />
        </>
    )
}

export default MoimMap
