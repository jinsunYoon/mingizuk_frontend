import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ButtonOutlined, FlexRow, Text } from '../elements/index'
import { CancelRounded } from '@material-ui/icons'

const CharacterModal = (props) => {
    const [modalStatus, setModalStatue] = React.useState(false)
    const is_login = useSelector((state) => state.user.isLogin)
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
                            zIndex: '3',
                        }}
                        onClick={() => {
                            {
                                modalStatus && setModalStatue(false)
                            }
                        }}
                    ></div>
                    <Modal>
                        {/* <button
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
                        </button> */}
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
            <FlexRow
                _width={'7.5rem'}
                _height={'7.5rem'}
                _bgColor={'#DEDEDE'}
                _margin={'1rem 0px'}
                _others={'border-radius: 50%'}
            >
                <ButtonOutlined
                    _width={'7.5rem'}
                    _padding={'0px'}
                    _margin={'0px'}
                    _border={'2px dashed #B8C0C4'}
                    _others={'height: 7.5rem;'}
                    _bradius="50%"
                    _onClick={() => {
                        {
                            is_login
                                ? setModalStatue(true)
                                : window.alert('로그인 후 이용해주세요.')
                        }
                    }}
                >
                    <Text _fontSize={'2.25rem'} _color={'#B8C0C4'}>
                        +
                    </Text>
                </ButtonOutlined>
            </FlexRow>
        </React.Fragment>
    )
}

const Modal = styled.div`
    width: 100vw;
    height: 29.5rem;
    padding: 1rem;
    box-sizing: border-box;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 4;
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
