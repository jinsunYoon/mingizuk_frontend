import React from 'react'
import styled from 'styled-components'
import { Input, FlexRow, Text } from '../../elements/index'
import Icon from '../../components/icons/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { moimCreateMD } from '../../redux/async/moim'

const MoimWritePost = () => {
    require('dotenv').config()
    console.log(process.env.REACT_APP_TEST) //YOU_API_KEY
    const dispatch = useDispatch()
    const [title, setTitle] = React.useState('')
    const [contents, setContents] = React.useState('')
    const data = { title, contents }
    const upload = () => {
        dispatch(moimCreateMD(data))
    }

    return (
        <>
            <Input
                _ph="제목을 입력하세요"
                _width="80vw"
                _onChange={(e) => setTitle(e.target.value)}
            />
            <ContentsBox onChange={(e) => setContents(e.target.value)} />
            <FlexRow
                _width="80vw"
                _height="40px"
                _margin="20px 0 0 0"
                _border="none"
            >
                <IconBtn>
                    <Icon icon="color-palette" size="20px" />
                    <Text _fontSize="14px">사진</Text>
                </IconBtn>
                <IconBtn>
                    <Text _fontSize="14px">위치</Text>
                    <Icon icon="place-location" size="20px" />
                </IconBtn>
            </FlexRow>
            <FlexRow
                _width="80vw"
                _height="20px"
                _margin="20px 0 0 0"
                _border="none"
            >
                <IconBtn>취소</IconBtn>
                <IconBtn onClick={() => upload()}>업로드</IconBtn>
            </FlexRow>
        </>
    )
}

const ContentsBox = styled.textarea`
    width: 80vw;
    height: 300px;
    margin-top: 20px;
`

const IconBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 25px;
    border: none;
    border-radius: 10px;
    margin: 0 5px;
`

export default MoimWritePost
