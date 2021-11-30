import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch, useSelector } from 'react-redux'
import { moimUpdateMD } from '../../redux/async/moim'
import config from '../../shared/aws_config'
import { uploadFile } from 'react-s3'
import MapSearch from './MapSearch'

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

    const [startDate, setStartDate] = React.useState(new Date())
    const [endDate, setEndDate] = React.useState(new Date())

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
                        startAt: startDate,
                        finishAt: endDate,
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
            const req = {
                title,
                contents,
                imgSrc: beforeImgSrc,
                moimId,
                startAt: startDate,
                finishAt: endDate,
            }
            dispatch(moimUpdateMD(req))
        }
    }

    return (
        <>
            {' '}
            <section className="moim-post">
                <h4 className="post-subtitle">모임 제목 수정</h4>
                <input
                    className="moim-post"
                    placeholder="모임 제목을 입력하세요. (ex. 한강 러닝 모집)"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <h4 className="post-subtitle">모임 내용 수정</h4>
                <textarea
                    onChange={(e) => setContents(e.target.value)}
                    value={contents}
                />
                <h4 className="post-subtitle">모임 위치 수정</h4>
                <MapSearch mapUpdate="true" />
                <h4 className="post-subtitle">모임 날짜 수정</h4>
                <div className="date-container">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                    />
                </div>
                <h4 className="post-subtitle">이미지 수정</h4>
                <label className="image-input" htmlFor="image">
                    +
                </label>
                <input
                    id="image"
                    type="file"
                    onChange={handleFileInput}
                    style={{ display: 'none' }}
                />
                <p>
                    모임 모집에 적합한 이미지만 올려주세요.
                    <br />
                    이미지는 <span>최대 1장</span>만 등록 가능합니다.
                </p>
            </section>
            <button className="submit-btn" onClick={() => update()}>
                수정하기
            </button>
        </>
    )
}

export default MoimUpdateWrite
