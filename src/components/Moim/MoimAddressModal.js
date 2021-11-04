import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ButtonFill, FlexRow, Text } from '../../elements/index'
import Icon from '../../components/icons/Icon'
import { CancelRounded } from '@material-ui/icons'

const MoimAddressModal = (props) => {
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
                                다시 맵 api 사용하기
                            </Text>
                        </FlexRow>
                    </Modal>
                </FlexRow>
            )}
            <div style={{ zIndex: '3' }}>
                <IconBtn
                    _onClick={() => {
                        {
                            console.log('눌리긴함')
                            modalStatus
                                ? setModalStatue(false)
                                : setModalStatue(true)
                        }
                    }}
                >
                    <Text _fontSize="14px">위치</Text>
                    <Icon icon="place-location" size="20px" />
                </IconBtn>
            </div>
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
const IconBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 25px;
    border: none;
    border-radius: 10px;
    margin: 0 5px;
`

export default MoimAddressModal
