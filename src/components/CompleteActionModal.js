import React from 'react'
import styled from 'styled-components'
import {
    ButtonOutlined,
    FlexRow,
    FlexColumn,
    Text,
    Img,
} from '../elements/index'
import { CancelRounded } from '@material-ui/icons'
import Icon from '../components/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import {
    setActionBtn,
    setActionName,
    setModal,
    setImgSrc,
} from '../redux/modules/completeSlice'

const CompleteActionModal = (props) => {
    const dispatch = useDispatch()

    const modal = useSelector((state) => state.setModal.modalStatus)
    const modalImg = useSelector((state) => state.setModal.ImgSrc)
    const modalActionName = useSelector((state) => state.setModal.actionName)
    const modalactionBtn = useSelector((state) => state.setModal.actionBtn)
    const presetRoutine = useSelector((state) => state.setAction.mainRoutine)
    const num = presetRoutine?.actions?.length - 1

    return (
        <div style={{ display: 'flex', zIndex: '2' }}>
            {modal && (
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
                            dispatch(setModal(false))
                        }}
                    ></div>
                    <ModalEl>
                        <button
                            style={{
                                position: 'absolute',
                                right: '1rem',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                dispatch(setModal(false))
                            }}
                        >
                            <CancelRounded />
                        </button>
                        <Text
                            _fontSize={'2rem'}
                            _margin={'1.5rem 0px 0.5rem 0px'}
                        >
                            {modalActionName}
                        </Text>
                        <Img
                            _src={modalImg}
                            _width={'13rem'}
                            _height={'18rem'}
                            _bradius={'0px'}
                            _others={'background-color:#fff'}
                        ></Img>
                        <ButtonOutlined
                            _width={'13rem'}
                            _margin={'1rem 0px 0px 0px'}
                            _padding={'0px'}
                            _onClick={() => {
                                dispatch(
                                    setImgSrc(
                                        'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/ming.gif'
                                    )
                                )
                                dispatch(setActionBtn('화이팅 !'))
                                setTimeout(function () {
                                    dispatch(setActionBtn('완료하기 !'))
                                }, 5000)
                            }}
                        >
                            <Text _padding={'0.7rem 0px'}>
                                {modalactionBtn}
                            </Text>
                        </ButtonOutlined>
                    </ModalEl>
                </FlexRow>
            )}
            {presetRoutine?.actions?.map((routine, idx) => {
                return (
                    <>
                        <ButtonOutlined
                            _border={'none'}
                            _margin={'none'}
                            _padding={'none'}
                            _width={'false'}
                            _onClick={() => {
                                dispatch(setModal(true))
                                dispatch(setActionName(routine?.actionName))
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
        </div>
    )
}

const ModalEl = styled.div`
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
