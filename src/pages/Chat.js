import React from 'react'
import Swal from 'sweetalert2'
import '../styles/moim/chat.scss'
import 'moment/locale/ko'
import moment from 'moment'
import io, { Socket } from 'socket.io-client'
import { history } from '../redux/store'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { getToken } from '../shared/utils'

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
        baseURL: 'http://localhost:8080',
    })
    instance.interceptors.request.use(async (config) => {
        config.headers['accessToken'] =
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlcklkIjoibG9jYWx0ZXN0MUB0ZXN0LmNvbSIsImlhdCI6MTYzNzU5NDkyNSwiZXhwIjoxNjM3NjgxMzI1LCJpc3MiOiJtaW5naWp1ayJ9.FrXV2XRvYpZ3EWXWfUFYbkvmz2kzVw0AGshi1wGLMXc'
        config.headers['refreshToken'] =
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlcklkIjoibG9jYWx0ZXN0MUB0ZXN0LmNvbSIsImlhdCI6MTYzNzU5NDkyNSwiZXhwIjoxNjM4ODA0NTI1LCJpc3MiOiJtaW5naWp1ayJ9.mXjDtX7dK79SNvI-VtLoX7ys5kPk3wQD9BkG-Zsz_Fk'
        return config
    })

    const userNick = useSelector((state) => state?.user?.userInfo?.nickName)
    const [roomId, setRoomId] = React.useState(-1)
    const moimId = history?.location?.pathname?.split('/').slice(-1)
    const [msgValue, setMsgValue] = React.useState(false)
    const [messageArray, setMessageArray] = React.useState([])
    const [newMsgArray, setNewMsgArray] = React.useState(['a'])

    // ! 최초 연결
    const socketMoim = io.connect(`http://localhost:8080/chat`)
    React.useEffect(() => {
        socketMoim.on('connect', () => {
            console.log('<<><', '연결시 connect 하는 대상의 닉네임', userNick)
        })
        // ! room id 요청 api
        instance
            .post(`/api/moims/${moimId}/chatRoom`)
            .then((res) => {
                socketMoim.emit('enterNewUser', userNick, res.data.roomId)
                setRoomId(res.data.roomId)
                return res.data.roomId
            })
            .then((res) => {
                instance.get(`/api/moims/${moimId}/${res}`).then((res) => {
                    setMessageArray(res.data.chats)
                })
            })
    }, [])

    socketMoim.on('updateMsg', (data) => {
        if (data.name === 'SERVER') {
            Toast.fire({
                icon: 'info',
                title: data.msg,
            })
        } else if (data.name !== 'SERVER') {
            setNewMsgArray((newMsgArray) => [...newMsgArray, data])
        }
    })

    // ! message 보내기 ( +post api )
    const sendMessage = () => {
        if (!msgValue) return false
        instance.post(`/api/moims/${moimId}/${roomId}`, {
            contents: msgValue,
        })
        socketMoim.emit('sendMsg', userNick, msgValue)
        setMsgValue('')
    }

    return (
        <>
            <div className="chat-warp">
                <section className="chat-zone">
                    {messageArray.map(
                        (msg, idx) =>
                            msg.MoimUser?.User?.nickName === 'kk123123' && (
                                <div className="chat-me-container" key={idx}>
                                    <span className="chat-time">
                                        {moment(msg.createdAt).fromNow()}
                                    </span>
                                    <p className="chat-content">
                                        {msg.contents}
                                    </p>
                                </div>
                            )
                    )}
                    {newMsgArray.map((message, idx) => (
                        <div className="chat-me-container" key={idx}>
                            <span className="chat-time">
                                {moment(message.time).fromNow()}
                            </span>
                            <p className="chat-content">{message.msg}</p>
                        </div>
                    ))}

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
