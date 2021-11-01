import React from 'react'
import styled from 'styled-components'
import { FlexRow, Text } from '../elements'

const LevelBar = () => {
    return (
        <>
            <FlexRow
                _width="85vw"
                _height="20px"
                _border="none"
                _margin="0 0 15px 0"
                _justify="space-between"
            >
                <Text _fontWeight="700" _fontSize="16px">
                    Lv2
                </Text>
                <Text _fontSize="13px" _color="#C4C4C4">
                    / 10
                </Text>
                <FullGauge>
                    <ExpGauge />
                </FullGauge>
            </FlexRow>
        </>
    )
}

const FullGauge = styled.div`
    position: relative;
    width: 65vw;
    background-color: lightgray;
    height: 10px;
`

const ExpGauge = styled.div`
    width: 20vw;
    height: inherit;
    background-color: blue;
    z-index: 1;
    position: absolute;
`

export default LevelBar
