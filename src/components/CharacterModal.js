import React from 'react'
import styled from 'styled-components'
import { ButtonFill, FlexRow, Text } from '../elements/index'
import { CancelRounded } from '@material-ui/icons'
import LevelBar from './LevelBar'

const CharacterModal = (props) => {
    const [modalStatus, setModalStatue] = React.useState(false)
    return (
        <React.Fragment>
            {modalStatus && (
                <FlexRow _border={'none'}>
                    <div
                        style={{
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'black',
                            opacity: '0.3',
                            position: 'fixed',
                            top: '0',
                            left: '0',
                        }}
                        onClick={() => {
                            {
                                modalStatus && setModalStatue(false)
                            }
                        }}
                    ></div>
                    <Modal>
                        <button
                            style={{
                                position: 'absolute',
                                right: '1rem',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                modalStatus && setModalStatue(false)
                            }}
                        >
                            <CancelRounded />
                        </button>
                        <FlexRow
                            _border={'none'}
                            _width={'100%'}
                            _height={'100%'}
                        >
                            <Text _fontSize={'2rem'} _margin={'0px'}>
                                캐릭터 뽑기가
                                <br /> 나올 화면입니다
                            </Text>
                        </FlexRow>
                    </Modal>
                </FlexRow>
            )}
            <ButtonFill
                _width={'200px'}
                _color={'black'}
                _padding={'0px'}
                _margin={'0px 0px 1rem 0px'}
                _others={
                    'border : 1px solid gray; background-color: #C4C4C4; box-sizing: border-box; height: 200px;'
                }
                _bradius="50%"
                _onClick={() => {
                    {
                        modalStatus
                            ? setModalStatue(false)
                            : setModalStatue(true)
                    }
                }}
            >
                캐릭터를 뽑아주세요
            </ButtonFill>
            <LevelBar />
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
    opacity: 0.95;
    position: fixed;
    top: 4.3rem;
    left: 1.8rem;
    z-index: 3;
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

export default CharacterModal
