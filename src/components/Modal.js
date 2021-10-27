import React from 'react'
import { ButtonFill, FlexColumn } from '../elements/index'
import { CancelRounded } from '@material-ui/icons'

const Modal = (props) => {
    const [modalStatus, setModalStatue] = React.useState(false)
    return (
        <React.Fragment>
            {modalStatus && (
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
                        top: '2.5rem',
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
                </div>
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

export default Modal
