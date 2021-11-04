import React from 'react'
import styled from 'styled-components'
import { Input, FlexRow, Text } from '../../elements/index'
import Icon from '../../components/icons/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { moimUpdateMD } from '../../redux/async/moim'
import config from '../../shared/aws_config'
import { uploadFile } from 'react-s3'

const MoimUpdateWrite = () => {
    const dispatch = useDispatch()
    // * 이전요소들
    const refPost = useSelector((state) => state.moim.moim_ref_update)
    const beforeTitle = refPost?.title
    const beforeContent = refPost?.contents
    const beforeImgSrc = refPost?.imgSrc
    const moimId = refPost?.id

    // * update 할 요소들
    const [title, setTitle] = React.useState(beforeTitle)
    const [contents, setContents] = React.useState(beforeContent)
    const [selectedFile, setSelectedFile] = React.useState(null)

    // * upload S3 & update
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0])
    }
    const handleUpload = async (file) => {
        if (selectedFile !== null) {
            uploadFile(file, config)
                .then((data) => {
                    const req = {
                        title,
                        contents,
                        imgSrc: data.location,
                        moimId,
                    }
                    dispatch(moimUpdateMD(req))
                })
                .catch((err) => console.error(err))
        } else return
    }
    const update = () => {
        if (selectedFile !== null) {
            handleUpload(selectedFile)
        } else {
            const req = { title, contents, imgSrc: beforeImgSrc, moimId }
            dispatch(moimUpdateMD(req))
        }
    }

    return (
        <>
            <Input
                _ph="제목을 입력하세요"
                _width="80vw"
                _onChange={(e) => setTitle(e.target.value)}
                _valueType="customValue"
                _value={title}
            />
            <ContentsBox
                onChange={(e) => setContents(e.target.value)}
                value={contents}
            />
            <FlexRow
                _width="80vw"
                _height="40px"
                _margin="20px 0 0 0"
                _border="none"
            >
                <IconBtn>
                    <input type="file" onChange={handleFileInput} />
                    {/* <Icon icon="color-palette" size="20px" />
                    <Text _fontSize="14px">사진</Text> */}
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
                <IconBtn onClick={() => update()}>수정하기</IconBtn>
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

export default MoimUpdateWrite
