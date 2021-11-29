import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import '../styles/character/character.scss'
import { getCharacterMD, postCharacterMD } from '../redux/async/character'
import LevelBar from '../components/LevelBar'

const CharacterModal = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })
    const charLv1 = [
        'https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png',
        'https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1_1+1.png',
        'https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_2_1+1.png',
    ]

    const charEx = [
        'https://minggizuk.s3.ap-northeast-2.amazonaws.com/Lv3.png',
        'https://minggizuk.s3.ap-northeast-2.amazonaws.com/Lv10.png',
    ]

    const charLv1Select = () => {
        if (charName === '라이온') return <img src={charLv1[0]} />
        else if (charName === '제이지') return <img src={charLv1[1]} />
        else if (charName === '무지') return <img src={charLv1[2]} />
    }

    const dispatch = useDispatch()
    const [modalState, setModalState] = useState(false)
    const is_login = useSelector((state) => state.user.isLogin)
    const charList = useSelector((state) => state.character.charList)
    const charName = useSelector((state) => state.character.characterName)

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
                                    setModalState(true)
                                    dispatch(postCharacterMD())
                                } else {
                                    Toast.fire({
                                        icon: 'error',
                                        title: '로그인 후 이용해주세요.',
                                    })
                                }
                            }}
                        >
                            +
                        </div>
                        <p>캐릭터를 추가하세요!</p>
                    </div>
                ) : (
                    <div className="char-container">
                        <img
                            className="char"
                            src={charList[charList?.length - 1]?.charSrc}
                        />
                        {charList[charList?.length - 1]?.charName ==
                            '라이온' && <p>밍기</p>}
                        {charList[charList?.length - 1]?.charName == '무지' && (
                            <p>무너</p>
                        )}
                        {charList[charList?.length - 1]?.charName ==
                            '제이지' && <p>몽실이</p>}
                        <LevelBar
                            exp={charList[charList?.length - 1]?.exp}
                            expMax={charList[charList?.length - 1]?.expMax}
                        />
                    </div>
                )
            }

            {setModalState && (
                <div className="modal-container">
                    {modalState && (
                        <div
                            className="modal-bg"
                            onClick={() => setModalState(false)}
                        >
                            <div className="modal">
                                <h3 className="charName">
                                    <span className="color name">
                                        {charName !== '' &&
                                            charName == '라이온' &&
                                            '밍기'}
                                        {charName !== '' &&
                                            charName == '무지' &&
                                            '무너'}
                                        {charName !== '' &&
                                            charName == '제이지' &&
                                            '몽실이'}
                                    </span>
                                    가 찾아왔어요!
                                    <br />
                                    <span>
                                        생성한 캐릭터는 획득한{' '}
                                        <span className="color">포인트</span>에
                                        따라{' '}
                                        <span className="color">3단계</span>로
                                        진화합니다!
                                    </span>
                                </h3>

                                <div className="charlevelbox">
                                    <div className="charlevel">
                                        <span>Lv.1</span>
                                        <br />
                                        {charLv1Select()}
                                    </div>

                                    <div className="charlevel">
                                        <span>Lv.4</span>
                                        <br />
                                        <img src={charEx[0]} />
                                    </div>
                                    <div className="charlevel">
                                        <span>Lv.7</span>
                                        <br />
                                        <img src={charEx[1]} />
                                    </div>
                                </div>
                                <div className="newchar">
                                    {charLv1Select()}
                                    <p>
                                        이 슬라임은 세상에 나온지 얼마안돼서
                                        <br />
                                        궁금한게 너무나도 많은 아이랍니다!
                                        <br /> 함께라면 기적을 일으킬 수 있겠죠?
                                    </p>
                                </div>
                                <div
                                    className="close-btn"
                                    onClick={() => {
                                        setModalState(false)
                                    }}
                                >
                                    밍기적 일으키러 가기
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default CharacterModal
