import React, { useState } from 'react'
import { history } from '../../redux/store'
import { useSelector } from 'react-redux'

//* sytle
import '../../styles/mypage/mypage.scss'
import Icon from '../../components/icons/Icon'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const MyPage = (props) => {
    const [userInfo, setUserInfo] = useState('')
    const nickName = useSelector((state) => state.user.userInfo.nickName)
    const pwd = useSelector((state) => state.user.userInfo.userPw)
    const email = useSelector((state) => state.user.userInfo.userEmail)
    const char = useSelector((state) => state.user.userInfo.charUrl)

    return (
        <>
            <div className="mypage-layout">
                <section className="contents">
                    <div className="user-profile">
                        <div
                            className="user-image"
                            style={{ backgroundImage: `url(${char})` }}
                        />

                        <div className="user-info">
                            <div style={{ display: 'flex' }}>
                                <span className="user-nickname">
                                    {nickName}
                                </span>
                                <Icon
                                    className="user-info-update"
                                    _onClick={() => {
                                        history.push('/users/info')
                                    }}
                                    icon="ic_edit"
                                    size="24px"
                                    color="white"
                                />
                            </div>
                            <span className="user-email">{email}</span>
                        </div>
                    </div>

                    <ul className="mypage-list">
                        <li onClick={() => history.push('/users/collection')}>
                            <span>내 캐릭터 콜렉션</span>
                            <ChevronRightIcon />
                        </li>
                        <li onClick={() => history.push('/users/moim')}>
                            <span>내 모임</span>
                            <ChevronRightIcon />
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default MyPage
