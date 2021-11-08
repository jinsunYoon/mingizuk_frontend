import React from 'react'
import styled from 'styled-components'
import { FlexColumn, Text } from '../elements'

const LevelBar = () => {
    return (
        <>
            <FlexColumn
                _width="85vw"
                _height={'false'}
                _border="none"
                _margin="1rem 0px"
                _justify="space-between"
                _bgColor={'none'}
            >
                <Text _fontWeight="500" _fontSize="0.875" _color={'#6B76FF'}>
                    Lv2{' '}
                    <span style={{ fontSize: '0.75rem', color: 'black' }}>
                        / 10
                    </span>
                </Text>
                <FullGauge>
                    <ExpGauge />
                </FullGauge>
            </FlexColumn>
        </>
    )
}

const FullGauge = styled.div`
    position: relative;
    width: 11.875rem;
    background-color: lightgray;
    height: 0.875rem;
    border-radius: 5rem;
    margin: 0.5rem 0px 0px 0px;
`

const ExpGauge = styled.div`
    width: 20vw;
    height: inherit;
    background-color: #6b76ff;
    z-index: 1;
    position: absolute;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
`

export default LevelBar
