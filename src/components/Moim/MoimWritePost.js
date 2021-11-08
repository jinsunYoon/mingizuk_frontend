/*global kakao*/
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Input, FlexRow, Text } from '../../elements/index'
import Icon from '../../components/icons/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { moimCreateMD } from '../../redux/async/moim'
import config from '../../shared/aws_config'
import { uploadFile } from 'react-s3'
import MapSearch from './MapSearch'

const MoimWritePost = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = React.useState('')
    const [contents, setContents] = React.useState('')
    const [selectedFile, setSelectedFile] = React.useState(null)
    const [imgSrc, setImgSrc] = React.useState('')

    // * upload S3
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0])
    }
    const handleUpload = async (file) => {
        if (selectedFile !== null) {
            uploadFile(file, config)
                .then((data) => {
                    const req = { title, contents, imgSrc: data.location }
                    dispatch(moimCreateMD(req))
                })
                .catch((err) => console.error(err))
        } else return
    }

    const upload = () => {
        if (selectedFile !== null) {
            handleUpload(selectedFile)
        } else {
            const req = { title, contents, imgSrc: null }
            dispatch(moimCreateMD(req))
        }
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
                _margin="20px 0 10px 0"
                _border="none"
            >
                <IconBtn>
                    <input type="file" onChange={handleFileInput} />
                    {/* <Icon icon="color-palette" size="20px" />
                    <Text _fontSize="14px">사진</Text> */}
                </IconBtn>
            </FlexRow>
            <MapSearch />
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
    height: 25px;
    border: none;
    border-radius: 10px;
    margin: 0 5px;
`

export default MoimWritePost
