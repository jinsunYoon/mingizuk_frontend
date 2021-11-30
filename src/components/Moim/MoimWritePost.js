/*global kakao*/
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch, useSelector } from 'react-redux'
import { moimCreateMD } from '../../redux/async/moim'
import config from '../../shared/aws_config'
import { uploadFile } from 'react-s3'
import MapSearch from './MapSearch'
import Icon from '../../components/icons/Icon'
import Swal from 'sweetalert2'

const MoimWritePost = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = React.useState('')
    const [contents, setContents] = React.useState('')
    const [selectedFile, setSelectedFile] = React.useState(null)
    const [startDate, setStartDate] = React.useState(new Date())
    const [endDate, setEndDate] = React.useState(
        new Date(new Date().setDate(startDate.getDate() + 7))
    )
    const [imgState, setImageState] = React.useState(false)

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

    const getAddress = useSelector((state) => state.moim.address)
    const getPlace = useSelector((state) => state.moim.place)

    // * upload S3
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0])
        setImageState(true)
    }
    const handleUpload = async (file) => {
        if (selectedFile !== null) {
            uploadFile(file, config)
                .then((data) => {
                    const req = {
                        title,
                        contents,
                        imgSrc: data.location,
                        startAt: startDate,
                        finishAt: endDate,
                        location: `${getAddress} ${getPlace}`,
                        filter: `${getAddress.split(' ')[0]} ${
                            getAddress.split(' ')[1]
                        }`,
                    }

                    if (title === '') {
                        Toast.fire({
                            icon: 'error',
                            title: '제목을 입력해주세요',
                        })
                        return
                    } else if (contents === '') {
                        Toast.fire({
                            icon: 'error',
                            title: '내용을 입력해주세요.',
                        })
                        return
                    } else if (req.location === '') {
                        Toast.fire({
                            icon: 'error',
                            title: '위치를 입력해주세요.',
                        })
                        return
                    } else if (contents.length > 500) {
                        Toast.fire({
                            icon: 'error',
                            title: '내용은 500자 미만으로 입력 가능합니다.',
                        })
                        return
                    } else if (title.length > 30) {
                        Toast.fire({
                            icon: 'error',
                            title: '제목은 30자 이내로 입력 가능합니다.',
                        })
                        return
                    }
                    dispatch(moimCreateMD(req))
                })
                .catch((err) => console.error(err))
        } else return
    }

    const upload = () => {
        if (selectedFile !== null) {
            handleUpload(selectedFile)
        } else {
            const req = {
                title,
                contents,
                imgSrc: null,
                startAt: startDate,
                finishAt: endDate,
                location: `${getAddress}${getPlace}`,
                filter: `${getAddress.split(' ')[0]} ${
                    getAddress.split(' ')[1]
                }`,
            }

            if (title === '') {
                Toast.fire({
                    icon: 'error',
                    title: '제목을 입력해주세요',
                })
                return
            } else if (contents === '') {
                Toast.fire({
                    icon: 'error',
                    title: '내용을 입력해주세요.',
                })
                return
            } else if (req.location === '') {
                Toast.fire({
                    icon: 'error',
                    title: '위치를 입력해주세요.',
                })
                return
            } else if (contents.length > 500) {
                Toast.fire({
                    icon: 'error',
                    title: '내용은 500자 이내로 입력 가능합니다.',
                })
                return
            } else if (title.length > 30) {
                Toast.fire({
                    icon: 'error',
                    title: '제목은 30자 이내로 입력 가능합니다.',
                })
                return
            }
            dispatch(moimCreateMD(req))
        }
    }

    return (
        <>
            <section className="moim-post">
                <h4 className="post-subtitle">모임 제목</h4>
                <input
                    className="moim-post"
                    placeholder="모임 제목을 입력하세요. (ex. 한강 러닝 모집)"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <h4 className="post-subtitle">모임 내용</h4>
                <textarea
                    onChange={(e) => {
                        setContents(e.target.value)
                    }}
                />
                <h4 className="post-subtitle">모임 위치 설정</h4>
                <MapSearch />
                <h4 className="post-subtitle">모임 기간 설정</h4>
                <div className="date-container">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        minDate={new Date()}
                    />
                </div>
                <h4 className="post-subtitle">이미지 첨부</h4>
                {imgState ? (
                    <label className="image-input" htmlFor="image">
                        <Icon icon="check" size="3rem" color="white" />
                    </label>
                ) : (
                    <label className="image-input" htmlFor="image">
                        +
                    </label>
                )}

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
            <button className="submit-btn" onClick={() => upload()}>
                완료
            </button>
        </>
    )
}

export default MoimWritePost
