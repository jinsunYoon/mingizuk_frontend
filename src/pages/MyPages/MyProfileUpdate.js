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
import { useHistory } from 'react-router'
import Icon from '../../components/icons/Icon'

//* MD
import {
    logoutMD,
    byeMD,
    userInfoMD,
    loginCheckMD,
} from '../../redux/async/user'
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

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })

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

    const bye = () => {
        Swal.fire({
            text: '정말 회원 탈퇴하시겠어요 ?',
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
                dispatch(byeMD())
            } else return
        })
    }

    React.useEffect(() => {
        dispatch(loginCheckMD())
        dispatch(changeNav('mypage'))
    }, [])

    return (
        <div
            style={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <FlexColumn
                _width="100%"
                _height="false"
                _border="none"
                _padding={'2rem 1rem 1rem 1rem'}
                _margin={'3rem 0 0 0'}
                _others={'max-width:760px'}
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
                        maxWidth: '735px',
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
                        <div style={{ marginRight: '0.3rem' }}>
                            <Icon icon="right-tri" size="14px" color="A5ABB0" />
                        </div>
                    </FlexRow>
                </ButtonOutlined>
                <ButtonOutlined
                    _width="100%"
                    _padding="0"
                    _margin="0"
                    _border="none"
                    _others="border-bottom:1px solid #EEE"
                    _onClick={() => bye()}
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
                            탈퇴하기
                        </Text>
                        <div style={{ marginRight: '0.3rem' }}>
                            <Icon icon="right-tri" size="14px" color="A5ABB0" />
                        </div>
                    </FlexRow>
                </ButtonOutlined>
            </FlexColumn>
            <ButtonFill
                _width="100%"
                _margin="0px 0 4rem 0"
                _padding={'0'}
                _bgColor="#6B76FF"
                _others={
                    'position: fixed; bottom:0; height:4.1rem;max-width:768px'
                }
                _onClick={() => {
                    const data = { newNickName, newPwd }
                    if (newNickName.length > 9) {
                        Toast.fire({
                            icon: 'error',
                            title: '닉네임은 8자 이하로 가능합니다.',
                        })
                    } else if (newPwd.length < 7 || newPwd.length > 17) {
                        Toast.fire({
                            icon: 'error',
                            title: '비밀번호는 8자에서 16글자 입니다.',
                        })
                    } else {
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
                    }
                }}
            >
                수정하기
            </ButtonFill>
        </div>
    )
}

export default ProfileUpdate
