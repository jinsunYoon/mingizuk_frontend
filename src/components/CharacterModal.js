import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonOutlined, FlexRow, Text } from '../elements/index'
import { CancelRounded } from '@material-ui/icons'
import '../styles/character/character.scss'
import { getCharacterMD, postCharacterMD } from '../redux/async/character'
import LevelBar from '../components/LevelBar'

const CharacterModal = () => {
    const dispatch = useDispatch()
    const [modalStatus, setModalStatue] = useState(false)
    const is_login = useSelector((state) => state.user.isLogin)
    const charList = useSelector((state) => state.character.charList)

    console.log('>>', charList[0])
    console.log('>>', 'imgsrc', charList[0]?.charSrc)

    useEffect(() => {
        dispatch(getCharacterMD())
    }, [])

    // 캐릭터생성
    return (
        <>
            {
                // 캐릭터의 유무로 <추가하기> 또는 <캐릭터>가 나타난다
                charList.length === 0 ? (
                    <div className="addchar-container">
                        <div
                            className="addchar"
                            onClick={() => {
                                if (is_login) {
                                    setModalStatue(true)
                                    dispatch(postCharacterMD())
                                } else {
                                    window.alert('로그인 후 이용해주세요.')
                                }
                            }}
                        >
                            +
                        </div>
                        <p>캐릭터를 추가하세요!</p>
                    </div>
                ) : (
                    <div className="char-container">
                        <img className="char" src={charList[0]?.charSrc} />
                        <p>{charList[0]?.charName}</p>
                        <LevelBar
                            exp={charList[0]?.exp}
                            expMax={charList[0]?.expMax}
                        />
                    </div>
                )
            }

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
                            <p>
                                안녕~ 만나서 반가워! 난{charList[0]?.charName}
                                라고해
                            </p>
                            <div className="modal-char">
                                <img src={charList[0]?.charSrc} />
                            </div>
                            <div
                                className="close-btn"
                                onClick={() => {
                                    modalStatus && setModalStatue(false)
                                }}
                            >
                                {charList[0]?.charName}랑같이 밍기적하러 가기
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CharacterModal
