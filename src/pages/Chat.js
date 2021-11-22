import React from 'react'
import '../styles/moim/chat.scss'
import io, { Socket } from 'socket.io-client'
import { history } from '../redux/store'
import { useSelector } from 'react-redux'

const Chat = () => {
    const userNick = useSelector((state) => state?.user?.userInfo?.nickName)
    const moimId = history?.location?.pathname?.split('/').slice(-1)
    const [msgValue, setMsgValue] = React.useState(false)

    // ! 최초 연결
    const socketMoim = io.connect(`http://localhost:8080/chat`)
    React.useEffect(() => {
        socketMoim.on('connect', () => {
            console.log('연결시 connect 하는 대상의 닉네임', userNick)
        })
    }, [])

    const sendMessage = () => {
        if (!msgValue) return false
        socketMoim.emit('sendMsg', { msgValue })
    }

    return (
        <>
            <div className="chat-warp">
                <section className="chat-zone">
                    <div className="chat-others-container">
                        <div className="chat-img" />
                        <div className="chat-contents">
                            <span className="chat-title">모임장 닉넴</span>
                            <div>
                                <p className="chat-content">
                                    대화내용내용내용내용
                                </p>
                                <span className="chat-time">시간나오는곳</span>
                            </div>
                        </div>
                    </div>
                    <div className="chat-others-container">
                        <div
                            style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                marginRight: '0.5rem',
                            }}
                        />
                        <div>
                            <p className="chat-content">대화내용내용내용내용</p>
                            <span className="chat-time">시간나오는곳</span>
                        </div>
                    </div>
                    <div className="chat-me-container">
                        <span className="chat-time">시간나오는곳</span>
                        <p className="chat-content">대화내용내용내용내용</p>
                    </div>
                    <div className="chat-me-container">
                        <span className="chat-time">시간나오는곳</span>
                        <p className="chat-content">대화내용내용내용내용</p>
                    </div>
                    <div className="chat-me-container">
                        <span className="chat-time">시간나오는곳</span>
                        <p className="chat-content">대화내용내용내용내용</p>
                    </div>
                </section>
                <div className="input-container">
                    <input
                        placeholder="메세지"
                        onChange={(e) => {
                            setMsgValue(e.target.value)
                        }}
                    />
                    <button onClick={() => sendMessage()}>전송</button>
                </div>
            </div>
        </>
    )
}

export default Chat
