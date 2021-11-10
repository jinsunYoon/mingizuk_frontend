import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ButtonOutlined, FlexRow, Text } from '../elements/index'
import { CancelRounded } from '@material-ui/icons'
import '../styles/character/character.scss'

const CharacterModal = (props) => {
    const [modalStatus, setModalStatue] = React.useState(false)
    const is_login = useSelector((state) => state.user.isLogin)

    const confirm_login = () => {
        is_login
            ? setModalStatue(true)
            : window.alert('로그인 후 이용해주세요.')
    }

    return (
        <>
            <div
                className="addchar"
                onClick={() => {
                    confirm_login()
                }}
            >
                +
            </div>

            {modalStatus && (
                <div className="modal-container">
                    <div
                        className="modal-bg"
                        onClick={() => {
                            {
                                modalStatus && setModalStatue(false)
                            }
                        }}
                    >
                        <div className="modal">
                            <p>안녕~ 만나서 반가워! 난 무지라고해</p>
                            <div className="char">
                                캐릭터이미지보여줌 //아마도 아이디값
                            </div>
                            <div
                                className="close-btn"
                                onClick={() => {
                                    modalStatus && setModalStatue(false)
                                }}
                            >
                                무지랑같이 밍기적하러 가기
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CharacterModal
