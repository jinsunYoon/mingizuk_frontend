import React from 'react';
import styled from 'styled-components';
import MyMoimPost from '../MyPages/MyMoimPost'

const MyCreate = () => {
    
    const data = {
        title: '주 2회 공원 걷기 모임',
        writer: 'kyuung',
        people: 8,
        publisedDate: '2021.10.11',
        likeCount: 5,
        commentCount: 3,
        contents:'서울 한강에서 매주 수,금 걷기운동 하실분 구합니다!'
    }

    return(
        <>
            <MyMoimPost/>
        </>
    )
}

export default MyCreate;