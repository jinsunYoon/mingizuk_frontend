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
import Header from '../components/Header'
import { useMutation, useQuery } from 'react-query'
import Icon from '../components/icons/Icon'

const socketMoim = socketIOClient('https://mingijuk.shop/chat')

const Chat = () => {
    const chatzoneRef = React.useRef(null)

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

    // ! axios config
    const instance = axios.create({
        baseURL: 'https://mingijuk.shop',
    })
    instance.interceptors.request.use(async (config) => {
        config.headers['accessToken'] = getToken().accessToken
        config.headers['refreshToken'] = getToken().refreshToken
        return config
    })

    // ! user, moimnum info
    const userNick = useSelector((state) => state?.user?.userInfo?.nickName)
    const host = useSelector((state) => state?.moim?.chat_host)
    const userID = useSelector((state) => state?.user?.userInfo?.userID)
    const moimId = history?.location?.pathname?.split('/').slice(-1)

    // ! set variable
    const [roomId, setRoomId] = React.useState(false)
    const [msgValue, setMsgValue] = React.useState('')
    const [noticeValue, setNoticeValue] = React.useState('')
    const [noticeId, setNoticeId] = React.useState(false)
    const [noticeContent, setNoticeContent] = React.useState('')
    const [noticeStatus, setNoticeStatue] = React.useState(true)
    const [noticeOptStatus, setNoticeOptStatus] = React.useState(false)
    const [messageArray, setMessageArray] = React.useState([])
    const [newMsgArray, setNewMsgArray] = React.useState([])

    // ! use ReactQuery
    const setChatRoom = (id) => {
        return instance.post(`/api/moims/${id}/chatRoom`)
    }
    const getChatRoom = useMutation(setChatRoom)
    const getHistoryChats = useQuery(['getHistoryChats', roomId], () =>
        instance
            .get(`/api/moims/${moimId}/${roomId}`)
            .then(({ data }) => {
                setMessageArray(data?.chats)
            })
            .catch((err) => {})
    )
    const getHistoryNotice = useQuery(['getHistoryNotice', roomId], () =>
        instance
            .get(`/api/moims/${moimId}/${roomId}/notice`)
            .then(({ data }) => {
                if (data.targetNotice !== null) {
                    setNoticeContent(data.targetNotice.contents)
                    setNoticeId(data.targetNotice.id)
                }
            })
    )
    const deleteNotice = useMutation(() => {
        return instance
            .delete(`/api/moims/${moimId}/${roomId}/${noticeId}`)
            .then((res) => {
                setNoticeContent('')
                setNoticeOptStatus(false)
            })
    })
    const updateNotice = useMutation((data) => {
        return instance
            .put(`/api/moims/${moimId}/${roomId}/${noticeId}`, {
                contents: data,
            })
            .then((res) => setNoticeId(res.data.nowNotice.id))
    })

    // ! go to scroll bottom
    React.useEffect(() => {
        window.scrollTo(0, chatzoneRef.current.scrollHeight)
    }, [messageArray, newMsgArray])

    // ! socket, get message
    React.useEffect(() => {
        let isSubscribe = true

        getChatRoom.mutateAsync(moimId).then(({ data }) => {
            socketMoim.emit('enterNewUser', userNick, data?.roomId)
            setRoomId(data?.roomId)
        })

        socketMoim.on('connect', () => {
            console.log(
                '<>',
                '연결시 connect 하는 대상의 닉네임',
                userNick,
                userID
            )
        })

        socketMoim.on('updateMsg', (data) => {
            if (isSubscribe) {
                if (data.name === 'SERVER') {
                    Toast.fire({
                        icon: 'info',
                        title: data.msg,
                    })
                } else if (data.name !== 'SERVER') {
                    setNewMsgArray((newMsgArray) => [...newMsgArray, data])
                }
            }
        })
        return () => {
            isSubscribe = false
        }
    }, [])

    // ! post message ( +post api )
    const sendMessage = () => {
        if (msgValue === '') return false
        instance
            .post(`/api/moims/${moimId}/${roomId}`, {
                contents: msgValue,
            })
            .then((res) => {})
            .catch((error) => {})
        socketMoim.emit('sendMsg', userNick, msgValue, roomId)
        setMsgValue('')
    }

    // ! post / update Notice
    const postNotice = (noticeValue) => {
        if (noticeContent === '') {
            Swal.fire({
                text: '공지로 등록하시겠어요 ?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '등록',
                cancelButtonText: '취소',
            }).then((result) => {
                if (result.isConfirmed) {
                    instance
                        .post(`/api/moims/${moimId}/${roomId}/notice`, {
                            contents: noticeValue,
                        })
                        .then((res) => {
                            setNoticeContent(noticeValue)
                            setNoticeId(res.data.noticeId)
                        })
                        .catch((error) => {})
                }
            })
        } else {
            Swal.fire({
                text: '공지를 수정하시겠어요 ?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '수정',
                cancelButtonText: '취소',
            }).then((result) => {
                if (result.isConfirmed) {
                    updateNotice.mutate(noticeValue)
                    setNoticeContent(noticeValue)
                }
            })
        }
    }

    return (
        <>
            <div
                className="notice-warp"
                onClick={() => {
                    socketMoim.emit('leaveRoom', userNick, roomId)
                }}
            >
                <Header name="참여자 채팅" type="back" />
                {noticeContent !== '' && noticeStatus && (
                    <div className="notice-warp">
                        <div className="chat-notice">
                            <div style={{ display: 'flex' }}>
                                <span>모임장 공지</span>
                                <p>{noticeContent}</p>
                            </div>
                            <div className="chat-notice-option-btn">
                                <div onClick={() => setNoticeOptStatus(true)}>
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="chat-warp">
                <button
                    className="chat-notice-icon"
                    onClick={() =>
                        noticeStatus
                            ? setNoticeStatue(false)
                            : setNoticeStatue(true)
                    }
                >
                    <Icon icon="notice" size="24px" />
                </button>
                <section className="chat-zone" ref={chatzoneRef}>
                    {messageArray.length > 0 &&
                        messageArray.map((msg, idx) => (
                            <div key={idx}>
                                {msg.MoimUser?.User?.nickName === userNick ? (
                                    <div
                                        className="chat-me-container"
                                        key={idx}
                                    >
                                        <span className="chat-time">
                                            {moment(msg.createdAt).fromNow()}
                                        </span>
                                        <p
                                            className="chat-content"
                                            onClick={() => {
                                                userNick === host &&
                                                    postNotice(msg.contents)
                                            }}
                                        >
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
                    {newMsgArray.length > 0 &&
                        newMsgArray.map((message, idx) => (
                            <div key={idx}>
                                {message?.name === userNick ? (
                                    <div
                                        className="chat-me-container"
                                        key={idx}
                                    >
                                        <span className="chat-time">
                                            {moment(message?.time).fromNow()}
                                        </span>
                                        <p
                                            className="chat-content"
                                            onClick={() => {
                                                userNick === host &&
                                                    postNotice(message?.msg)
                                            }}
                                        >
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
            {noticeOptStatus && (
                <div
                    className="option-background"
                    onClick={() => setNoticeOptStatus(false)}
                >
                    <div className="opt-warp">
                        <div
                            className="option-container"
                            onClick={(e) => e.stopPropagation()}
                            style={{ height: '7rem' }}
                        >
                            <button
                                onClick={() => {
                                    Swal.fire({
                                        text: '공지를 삭제하시겠어요 ?',
                                        showCancelButton: true,
                                        confirmButtonColor: '#6B76FF',
                                        cancelButtonColor: '#DEDEDE',
                                        confirmButtonText: '삭제',
                                        cancelButtonText: '취소',
                                        width: '30rem',
                                        height: '15rem',
                                        reverseButtons: true,
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            deleteNotice.mutate()
                                        }
                                    })
                                }}
                            >
                                <Icon icon="Trash_light" size="24px" />
                                <span>삭제하기</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Chat
