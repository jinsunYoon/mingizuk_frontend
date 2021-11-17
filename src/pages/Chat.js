import React from 'react'
import { Header } from '../components'
import '../styles/moim/chat.scss'

const Chat = () => {
    return (
        <>
            <Header name="모임 참여자 채팅" />
            <section className="chat-zone">
                <div className="chat-others-container">
                    <span className="chat-title">모임장 닉넴</span>
                    <div>
                        <p className="chat-content">대화내용내용내용내용</p>
                        <span className="chat-time">시간나오는곳</span>
                    </div>
                </div>
                <div className="chat-others-container">
                    <span className="chat-title">모임장 닉넴</span>
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
        </>
    )
}

export default Chat
