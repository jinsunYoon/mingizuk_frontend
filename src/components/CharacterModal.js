import React from 'react'
import { ButtonFill, FlexRow, Text } from '../elements/index'
import { CancelRounded } from '@material-ui/icons'

const CharacterModal = (props) => {
    const [modalStatus, setModalStatue] = React.useState(false)
    return (
        <React.Fragment>
            {modalStatus && (
                <FlexRow>
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
                    <div
                        style={{
                            width: '300px',
                            height: '30rem',
                            padding: '1rem',
                            boxSizing: 'border-box',
                            borderRadius: '10px',
                            backgroundColor: '#fff',
                            opacity: '0.95',
                            position: 'fixed',
                            top: '4.3rem',
                            left: '1.8rem',
                        }}
                    >
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
                    </div>
                </FlexRow>
            )}
            <ButtonFill
                _width={'330px'}
                _color={'black'}
                _padding={'0px'}
                _margin={'0px 0px 1rem 0px'}
                _others={
                    'border : 1px solid gray; background-color: #C4C4C4; box-sizing: border-box; height: 330px;'
                }
                _onClick={() => {
                    {
                        modalStatus
                            ? setModalStatue(false)
                            : setModalStatue(true)
                    }
                }}
            >
                당신의 첫 캐릭터를 뽑아주세요
            </ButtonFill>
        </React.Fragment>
    )
}

export default CharacterModal
