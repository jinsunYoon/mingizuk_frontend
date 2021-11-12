import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexColumn, Text } from '../elements'

const LevelBar = ({ exp, expMax }) => {
    // * exp에 따라 1~10 level을 표시
    const testexp = 40000
    const level = () => {
        let result
        if (testexp <= 10000) {
            result = 1
        } else if (testexp >= 10000 && testexp < 20000) {
            result = 2
        } else if (testexp >= 20000 && testexp < 30000) {
            result = 3
        } else if (testexp >= 30000 && testexp < 40000) {
            result = 4
        } else if (testexp >= 40000 && testexp < 50000) {
            result = 5
        } else if (testexp >= 50000 && testexp < 60000) {
            result = 6
        } else if (testexp >= 60000 && testexp < 70000) {
            result = 7
        } else if (testexp >= 70000 && testexp < 80000) {
            result = 8
        } else if (testexp >= 80000 && testexp < 90000) {
            result = 9
        } else if (testexp >= 90000 && testexp <= 92000) {
            result = 10
        }
        return result
    }
    const calcLevelBar = (testexp - (level(testexp) - 1) * 10000) / 100
    console.log('>>', calcLevelBar)

    console.log('>>', level(testexp), testexp, expMax)

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
                    Lv.{level(testexp)}
                    <span style={{ fontSize: '0.75rem', color: 'black' }}>
                        / 10
                    </span>
                </Text>
                <FullGauge>
                    <ExpGauge
                        style={{
                            width: `${calcLevelBar}%`,
                        }}
                    />
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
    height: inherit;
    background-color: #6b76ff;
    z-index: 1;
    position: absolute;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
`

export default LevelBar
