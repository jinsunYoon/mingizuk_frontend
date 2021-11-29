import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

//* elements
import {
    FlexColumn,
    FlexRow,
    ButtonOutlined,
    Text,
    ButtonFill,
    Input,
} from '../../elements/index'

//* style
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useHistory } from 'react-router'

//* MD
import { logoutMD } from '../../redux/async/user'
import { userInfoMD } from '../../redux/async/user'
import { changeNav } from '../../redux/modules/userSlice'

const ProfileUpdate = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [newNickName, setNewNickName] = useState('')
    const [newPwd, setNewPwd] = useState('')

    const nickName = useSelector((state) => state.user.userInfo.nickName)
    const charList = useSelector((state) => state.character.charList)
    const curChara =
        charList.length > 0 && charList[charList.length - 1].charName

    const logout = () => {
        Swal.fire({
            text: '로그아웃 하시겠어요 ?',
            showCancelButton: true,
            confirmButtonColor: '#6B76FF',
            cancelButtonColor: '#DEDEDE',
            confirmButtonText: '네',
            cancelButtonText: '아니요',
            width: '30rem',
            height: '15rem',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logoutMD())
            } else return
        })
    }
    React.useEffect(() => {
        dispatch(changeNav('mypage'))
    }, [])

    return (
        <>
            <FlexColumn
                _width="100%"
                _height="false"
                _border="none"
                _padding={'2rem 1rem 1rem 1rem'}
                _margin={'3rem 0 0 0'}
            >
                {curChara == '라이온' && (
                    <div
                        style={{
                            backgroundImage: `url(https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/char1.png)`,
                            width: '3.5rem',
                            height: '3.5rem',
                            borderRadius: '50%',
                        }}
                    />
                )}
                {curChara == '무지' && (
                    <div
                        style={{
                            backgroundImage: `url(https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/char3.png)`,
                            width: '3.5rem',
                            height: '3.5rem',
                            borderRadius: '50%',
                        }}
                    />
                )}
                {curChara == '제이지' && (
                    <div
                        style={{
                            backgroundImage: `url(https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/char2.png)`,
                            width: '3.5rem',
                            height: '3.5rem',
                            borderRadius: '50%',
                        }}
                    />
                )}
                <FlexColumn
                    _width={'100%'}
                    _height={'false'}
                    _border={'none'}
                    _align={'start'}
                >
                    <Text
                        _padding="2rem 0 0.5rem 0"
                        _fontSize={'0.75rem'}
                        _fontWeight={'500'}
                    >
                        닉네임
                    </Text>
                    <Input
                        _ph={nickName}
                        _width="100%"
                        _margin={'0 0 1rem 0'}
                        _others={'border-radius:4px'}
                        _onChange={(e) => setNewNickName(e.target.value)}
                    />
                    {/* <Text
                        _margin="1rem 0 0.5rem 0"
                        _fontSize={'0.75rem'}
                        _fontWeight={'500'}
                    >
                        현재 비밀번호
                    </Text>
                    <Input
                        _ph="현재 비밀번호를 입력하세요"
                        _margin="30px"
                        _type="password"
                        _width="100%"
                        _others={'border-radius:4px'}
                        _onChange={(e) => setNewPwd(e.target.value)}
                    /> */}
                    <Text
                        _margin="1rem 0 0.5rem 0"
                        _fontSize={'0.75rem'}
                        _fontWeight={'500'}
                    >
                        새로운 비밀번호
                    </Text>
                    <Input
                        _ph="변경할 비밀번호를 입력하세요"
                        _margin="30px"
                        _type="password"
                        _width="100%"
                        _others={'border-radius:4px'}
                        _onChange={(e) => setNewPwd(e.target.value)}
                    />
                </FlexColumn>
                <div
                    style={{
                        width: '100vw',
                        height: '1rem',
                        margin: '1rem 0',
                        backgroundColor: '#EFEFEF',
                    }}
                />
                <ButtonOutlined
                    _width="100%"
                    _padding="0"
                    _margin="0"
                    _border="none"
                    _others="border-bottom:1px solid #EEE"
                    _onClick={() => logout()}
                >
                    <FlexRow
                        _width="100%"
                        _height="3.5rem"
                        _justify="space-between"
                        _border="none"
                        _padding="0"
                        _margin="0"
                    >
                        <Text
                            _fontSize="0.875rem"
                            _fontWeight="500"
                            _color="#2E3A59"
                        >
                            로그아웃
                        </Text>
                        <ChevronRightIcon style={{ color: '#A5ABB0' }} />
                    </FlexRow>
                </ButtonOutlined>
            </FlexColumn>
            <ButtonFill
                _width="100%"
                _margin="0px 0 4rem 0"
                _padding={'0'}
                _bgColor="#6B76FF"
                _others={'position: fixed; bottom:0; height:4.1rem;'}
                _onClick={() => {
                    const data = { newNickName, newPwd }
                    Swal.fire({
                        text: '회원 정보를 수정하시겠어요 ?',
                        showCancelButton: true,
                        confirmButtonColor: '#6B76FF',
                        cancelButtonColor: '#DEDEDE',
                        confirmButtonText: '참여',
                        cancelButtonText: '취소',
                        width: '30rem',
                        height: '15rem',
                        reverseButtons: true,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch(userInfoMD(data))
                            history.push('/users')
                        } else return
                    })
                }}
            >
                수정하기
            </ButtonFill>
        </>
    )
}

export default ProfileUpdate
