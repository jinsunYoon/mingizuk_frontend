import React from 'react'
import styled from 'styled-components'
import {
    ButtonOutlined,
    FlexRow,
    FlexColumn,
    Text,
    Img,
} from '../elements/index'
import { Complete } from './index'
import Icon from '../components/icons/Icon'
import { useSelector } from 'react-redux'

const CompleteActionModal = (props) => {
    const [modalStatus, setModalStatue] = React.useState(false)
    const [actionName, setActionName] = React.useState('')
    const presetRoutine = useSelector((state) => state.setAction.mainRoutine)
    console.log('state', actionName)
    const num = presetRoutine?.actions?.length - 1

    return (
        <React.Fragment>
            {modalStatus && <Complete />}
            {presetRoutine?.actions?.map((routine, idx) => {
                return (
                    <>
                        <ButtonOutlined
                            _border={'none'}
                            _margin={'none'}
                            _padding={'none'}
                            _width={'false'}
                            _onClick={() => {
                                {
                                    modalStatus
                                        ? setModalStatue(false)
                                        : setModalStatue(true)
                                    setActionName(routine?.actionName)
                                }
                            }}
                        >
                            <FlexColumn
                                _width={'2.8rem'}
                                _height={'100%'}
                                _border={'none'}
                            >
                                <FlexRow
                                    _width={'2rem'}
                                    _height={'2rem'}
                                    _bgColor={'lightgray'}
                                    _border={'none'}
                                    _margin={'10px 0px 0px 0px'}
                                    _others={'border-radius:1rem'}
                                ></FlexRow>
                                <FlexRow
                                    _width={'1rem'}
                                    _height={'1rem'}
                                    _bgColor={'black'}
                                    _border={'none'}
                                    _margin={'-40px -25px 20px 0px'}
                                    _others={'border-radius:1rem;'}
                                >
                                    <Text _color={'#fff'}>5</Text>
                                </FlexRow>
                                <Text
                                    _margin={'5px 0px 0px 0px'}
                                    _fontSize={'0.75rem'}
                                >
                                    {routine?.actionName}
                                </Text>
                            </FlexColumn>
                        </ButtonOutlined>
                        {idx < num && (
                            <FlexRow _border={'none'} _width={'0.625rem'}>
                                <Icon icon={'chevron-right'} size={24} />
                            </FlexRow>
                        )}
                    </>
                )
            })}
        </React.Fragment>
    )
}

const Modal = styled.div`
    width: 300px;
    height: 30rem;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 4.3rem;
    left: 1.8rem;
    @media screen and (max-width: 280px) {
        width: 233px;
        left: 1.5rem;
    }
    @media screen and (min-width: 281px) and (max-width: 320px) {
        width: 263px;
    }
    @media screen and (min-width: 361px) and (max-width: 375px) {
        width: 318px;
    }
    @media screen and (min-width: 376px) and (max-width: 414px) {
        width: 353px;
    }
    @media screen and (min-width: 415px) and (max-width: 540px) {
        width: 460px;
        left: 2.5rem;
    }
    @media screen and (min-width: 700px) and (max-width: 768px) {
        width: 673px;
        left: 3rem;
    }
    @media screen and (min-width: 1000px) and (max-width: 1280px) {
        width: 897px;
        left: 4rem;
    }
`

export default CompleteActionModal
