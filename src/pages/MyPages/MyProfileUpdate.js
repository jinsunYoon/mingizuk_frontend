import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userInfoMD } from '../../redux/async/user'
// import history from '../redux/store'

//* elements
import { FlexColumn, Text, ButtonFill, Input } from '../../elements/index'

//* style
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useHistory } from 'react-router'

const ProfileUpdate = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [newNickName, setNewNickName] = useState('')
    const [newPwd, setNewPwd] = useState('')

    const nickName = useSelector((state) => state.user.userInfo.nickName)

    return (
        <>
            <FlexColumn _width="100%" _height="600px" _border="none">
                <Text>프로필</Text>
                <label for="profile">
                    <AccountCircleIcon
                        style={{
                            fontSize: '120px',
                            color: 'grey',
                            margin: '10px',
                        }}
                    />
                </label>
                <input
                    type="file"
                    id="profile"
                    style={{
                        position: 'absolute',
                        top: '-99999px',
                    }}
                />
                <Text _margin="10px">닉네임</Text>
                <Input
                    _ph={nickName}
                    _width="60%"
                    _onChange={(e) => setNewNickName(e.target.value)}
                />

                <Text _margin="30px 0 10px">비밀번호</Text>
                <Input
                    _ph="변경하실 비밀번호를 입력해주세요"
                    _margin="30px"
                    _type="password"
                    _width="60%"
                    _onChange={(e) => setNewPwd(e.target.value)}
                />

                <ButtonFill
                    _width="40%"
                    _padding="10px"
                    _margin="100px 0 0"
                    _bgColor="grey"
                    _onClick={() => {
                        const data = { newNickName, newPwd }
                        const result =
                            window.confirm('회원정보를 수정하시겠습니까 ?')
                        if (result) {
                            dispatch(userInfoMD(data))
                            history.push('/users')
                        } else {
                            return
                        }
                    }}
                >
                    완료
                </ButtonFill>
            </FlexColumn>
        </>
    )
}

export default ProfileUpdate
