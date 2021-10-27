import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { FlexRow, Text } from '../../elements/index'
import Icon from '../../components/icons/Icon'
import { addCount, minusCount } from '../../redux/modules/updateRoutine'

const RoutineCounter = () => {
    const dispatch = useDispatch()
    const countSet = useSelector((state) => state.updateAction.actions)

    return (
        <>
            {countSet?.map((count, idx) => (
                <FlexRow
                    _width="85vw"
                    _height="56px"
                    _margin="0"
                    key={idx}
                    _justify="space-between"
                    _border="none"
                    _others="border-bottom:1px solid lightgray"
                >
                    <Text _others="width:50vw">{count.actionName}</Text>
                    <FlexRow _width="132px" _border="none">
                        <FlexRow
                            _width="96px"
                            _height="34px"
                            _border="1px solid #020202"
                            _bgColor="none"
                            _others="border-radius:5px"
                        >
                            <CountBtn
                                onClick={() => {
                                    dispatch(minusCount(count.actionName))
                                }}
                            >
                                <Icon icon="hyphen-minus" size="9.33px" />
                            </CountBtn>
                            <FlexRow
                                _width="32px"
                                _height="28px"
                                _border="none"
                            >
                                {count.actionCount}
                            </FlexRow>
                            <CountBtn
                                onClick={() => {
                                    dispatch(addCount(count.actionName))
                                }}
                            >
                                <Icon icon="add-plus" size="9.33px" />
                            </CountBtn>
                        </FlexRow>
                        <FlexRow _width="40px" _height="32px" _border="none">
                            <Icon icon="close-x" size="14px" />
                        </FlexRow>
                    </FlexRow>
                </FlexRow>
            ))}
        </>
    )
}

RoutineCounter.defaultProps = {}

const CountBtn = styled.button`
    width: 28px;
    height: 28px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`

export default RoutineCounter
