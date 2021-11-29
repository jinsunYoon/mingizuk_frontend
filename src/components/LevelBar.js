import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import { FlexColumn, Text } from '../elements'
import { getCharacterMD } from '../redux/async/character'

const LevelBar = ({ exp, expMax }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCharacterMD(level(exp)))
    }, [])

    const level = () => {
        let result
        if (exp <= 10000) {
            result = 1
        } else if (exp >= 10000 && exp < 20000) {
            result = 2
        } else if (exp >= 20000 && exp < 30000) {
            result = 3
        } else if (exp >= 30000 && exp < 40000) {
            result = 4
        } else if (exp >= 40000 && exp < 50000) {
            result = 5
        } else if (exp >= 50000 && exp < 60000) {
            result = 6
        } else if (exp >= 60000 && exp < 70000) {
            result = 7
        } else if (exp >= 70000 && exp < 80000) {
            result = 8
        } else if (exp >= 80000 && exp < 90000) {
            result = 9
        } else if (exp >= 90000 && exp <= 92000) {
            result = 10
        }
        return result
    }
    const calcLevelBar = (exp - (level(exp) - 1) * 10000) / 100

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
                    Lv.{level(exp)}
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
    width: 40%;
    background-color: lightgray;
    height: 0.875rem;
    border-radius: 5rem;
    margin: 0.5rem 0px;
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
