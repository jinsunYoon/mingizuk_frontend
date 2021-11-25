import React from 'react'
import Swal from 'sweetalert2'
import '../styles/moim/chat.scss'
import 'moment/locale/ko'
import moment from 'moment'
import socketIOClient from 'socket.io-client'
import { history } from '../redux/store'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { getToken } from '../shared/utils'

const socketMoim = socketIOClient('https://mingijuk.shop/chat')

const Chat = () => {
    // ! toast
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })
    // ! axios 설정
    const instance = axios.create({
        baseURL: 'https://mingijuk.shop',
    })
    instance.interceptors.request.use(async (config) => {
        config.headers['accessToken'] = getToken().accessToken
        config.headers['refreshToken'] = getToken().refreshToken
        return config
    })

    const userNick = useSelector((state) => state?.user?.userInfo?.nickName)
    const userID = useSelector((state) => state?.user?.userInfo?.userID)
    const moimId = history?.location?.pathname?.split('/').slice(-1)

    const [roomId, setRoomId] = React.useState(-1)
    const [msgValue, setMsgValue] = React.useState('')
    const [messageArray, setMessageArray] = React.useState([])
    const [newMsgArray, setNewMsgArray] = React.useState([])

    React.useEffect(() => {
        socketMoim.on('connect', () => {
            console.log(
                '<>',
                '연결시 connect 하는 대상의 닉네임',
                userNick,
                userID
            )
        })
        instance
            .post(`/api/moims/${moimId}/chatRoom`)
            .then((res) => {
                socketMoim.emit('enterNewUser', userNick, res.data.roomId)
                setRoomId(res?.data?.roomId)
                console.log('<>roomIdpost', res?.data?.roomId, res)
                return res.data.roomId
            })
            .then((res) => {
                instance.get(`/api/moims/${moimId}/${res}`).then((resp) => {
                    console.log('<>get', resp)
                    setMessageArray(resp.data.chats)
                })
            })
        socketMoim.on('updateMsg', (data) => {
            if (data.name === 'SERVER') {
                Toast.fire({
                    icon: 'info',
                    title: data.msg,
                })
            } else if (data.name !== 'SERVER') {
                console.log('<>update', data)
                setNewMsgArray((newMsgArray) => [...newMsgArray, data])
            }
        })

        return () => {
            socketMoim.emit('leaveRoom', userNick, roomId)
        }
    }, [])

    // ! message 보내기 ( +post api )
    const sendMessage = () => {
        if (!msgValue) return false
        instance
            .post(`/api/moims/${moimId}/${roomId}`, {
                contents: msgValue,
            })
            .then((res) => console.log('<>res', res))
            .catch((error) => console.log('<>error', error))
        socketMoim.emit('sendMsg', userNick, msgValue, roomId)
        setMsgValue('')
        console.log('<>send', msgValue, roomId)
    }

    return (
        <>
            <div className="chat-warp">
                <section className="chat-zone">
                    {messageArray.map((msg, idx) => (
                        <div key={idx}>
                            {msg.MoimUser?.User?.nickName === userNick ? (
                                <div className="chat-me-container" key={idx}>
                                    <span className="chat-time">
                                        {moment(msg.createdAt).fromNow()}
                                    </span>
                                    <p className="chat-content">
                                        {msg.contents}
                                    </p>
                                </div>
                            ) : (
                                <div className="chat-others-container">
                                    <div className="chat-img" />
                                    <div className="chat-contents">
                                        <span className="chat-title">
                                            {msg.MoimUser?.User?.nickName}
                                        </span>
                                        <div>
                                            <p className="chat-content">
                                                {msg?.contents}
                                            </p>
                                            <span className="chat-time">
                                                {moment(
                                                    msg.createdAt
                                                ).fromNow()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {newMsgArray.map((message, idx) => (
                        <div key={idx}>
                            {message?.name === userNick ? (
                                <div className="chat-me-container" key={idx}>
                                    <span className="chat-time">
                                        {moment(message?.time).fromNow()}
                                    </span>
                                    <p className="chat-content">
                                        {message?.msg}
                                    </p>
                                </div>
                            ) : (
                                <div className="chat-others-container">
                                    <div className="chat-img" />
                                    <div className="chat-contents">
                                        <span className="chat-title">
                                            {message?.name}
                                        </span>
                                        <div>
                                            <p className="chat-content">
                                                {message?.msg}
                                            </p>
                                            <span className="chat-time">
                                                {moment(
                                                    message?.time
                                                ).fromNow()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </section>
                <div className="input-container">
                    <input
                        placeholder="메세지"
                        value={msgValue}
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
