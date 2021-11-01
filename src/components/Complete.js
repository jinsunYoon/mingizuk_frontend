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
import { useSelector } from 'react-redux'

const CompleteActionModal = (props) => {
    const [modalStatus, setModalStatue] = React.useState(false)
    const [actionName, setActionName] = React.useState('')
    const [ImgSrc, setImgSrc] = React.useState(
        'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/ming.JPG'
    )
    const [actionBtn, setactionBtn] = React.useState('시작 !')
    const [CompleteModal, setCompleteModal] = React.useState(false)
    const presetRoutine = useSelector((state) => state.setAction.mainRoutine)
    console.log('state', actionName)
    const num = presetRoutine?.actions?.length - 1

    return (
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
                <Text _fontSize={'2rem'} _margin={'1.5rem 0px 0.5rem 0px'}>
                    {actionName}
                </Text>
                <Img
                    _src={ImgSrc}
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
                        {
                            setImgSrc(
                                'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/ming.gif'
                            )
                            setactionBtn('화이팅 !')
                            setTimeout(function () {
                                setactionBtn('완료하기 !')
                                CompleteModal
                                    ? setCompleteModal(false)
                                    : setCompleteModal(true)
                            }, 5000)
                        }
                    }}
                >
                    <Text _padding={'0.7rem 0px'}>{actionBtn}</Text>
                </ButtonOutlined>
            </Modal>
        </FlexRow>
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
