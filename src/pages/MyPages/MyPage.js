import React, { useState } from 'react'
import { history } from '../../redux/store'
import { useSelector } from 'react-redux'

//* components
import { Header, NavBar } from '../../components/index'

//* sytle
import '../../styles/mypage/mypage.scss'
import Icon from '../../components/icons/Icon'

const MyPage = (props) => {
    const [userInfo, setUserInfo] = useState('')
    const nickName = useSelector((state) => state.user.userInfo.nickName)
    const pwd = useSelector((state) => state.user.userInfo.userPw)
    const email = useSelector((state) => state.user.userInfo.userEmail)
    console.log(nickName, '>>nickname')
    console.log(pwd, '>>pwd')

    return (
        <>
            <div className="mypage-layout">
                <Header name="마이페이지" />
                <section className="contents">
                    <div className="user-profile">
                        <div className="user-image">{/* 캐릭터이미지 */}</div>
                        <div className="user-info">
                            <span className="user-nickname">{nickName}</span>
                            <span className="user-email">{email}</span>
                        </div>
                        <Icon
                            className="user-info-update"
                            _onClick={() => {
                                history.push('/users/info')
                            }}
                            icon="create"
                            size="12px"
                            color="white"
                        />
                    </div>

                    <ul className="mypage-list">
                        <li onClick={() => history.push('/users/collection')}>
                            <span>내 캐릭터 콜렉션</span>
                            <Icon
                                className="list-icon"
                                icon="chevron-right-lg"
                                size="12px"
                                color="#A5ABB0"
                            />
                        </li>
                        <li onClick={() => history.push('/users/moim')}>
                            <span>내 모임</span>
                            <Icon
                                icon="chevron-right-lg"
                                size="12px"
                                color="#A5ABB0"
                            />
                        </li>
                    </ul>
                </section>
                <NavBar />
            </div>
        </>
    )
}

export default MyPage
