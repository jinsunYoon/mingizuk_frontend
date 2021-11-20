import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { moimLocationMD } from '../redux/async/moim'

const Filter = () => {
    const dispatch = useDispatch()
    const locations = {
        _a: [
            '강남구',
            '강동구',
            '강북구',
            '강서구',
            '관악구',
            '광진구',
            '구로구',
            '금천구',
            '노원구',
            '도봉구',
            '동대문구',
            '동작구',
            '마포구',
            '서대문구',
            '서초구',
            '성동구',
            '성북구',
            '송파구',
            '양천구',
            '영등포구',
            '용산구',
            '은평구',
            '종로구',
            '중구',
            '중랑구',
        ],
        _b: [
            '강서구',
            '금정구',
            '남구',
            '동구',
            '동래구',
            '부산진구',
            '북구',
            '사상구',
            '사하구',
            '서구',
            '수영구',
            '연제구',
            '영도구',
            '중구',
            '해운대구',
        ],
        _c: [
            '중구',
            '동구',
            '미추홀구',
            '연수구',
            '남동구',
            '부평구',
            '계양구',
            '서구',
        ],
        _d: ['남구', '달서구', '동구', '북구', '서구', '수성구', '중구'],
        _e: ['대덕구', '동구', '서구', '유성구', '중구'],
        _f: ['광산구', '남구', '동구', '북구', '서구'],
        _g: ['남구', '동구', '북구', '중구'],
        _h: ['-'],
        _i: [
            '수원시',
            '성남시',
            '의정부시',
            '안양시',
            '부천시',
            '광명시',
            '동두천시',
            '평택시',
            '안산시',
            '고양시',
            '과천시',
            '구리시',
            '남양주시',
            '오산시',
            '시흥시',
            '군포시',
            '의왕시',
            '하남시',
            '용인시',
            '파주시',
            '이천시',
            '안성시',
            '김포시',
            '화성시',
            '광주시',
            '양주시',
            '포천시',
            '여주시',
        ],
        _j: [
            '춘천시',
            '원주시',
            '강릉시',
            '동해시',
            '태백시',
            '속초시',
            '삼척시',
        ],
        _k: ['청주시', '충추시', '제천시'],
        _l: [
            '천안시',
            '공주시',
            '보령시',
            '아산시',
            '서산시',
            '논산시',
            '계룡시',
            '당진시',
        ],
        _m: [
            '포항시',
            '경주시',
            '김천시',
            '안동시',
            '구미시',
            '영주시',
            '영천시',
            '상주시',
            '문경시',
            '경산시',
        ],
        _n: [
            '창원시',
            '통영시',
            '사천시',
            '진주시',
            '김해시',
            '밀양시',
            '거제시',
            '양산시',
        ],
        _o: [
            '전주시',
            '완산구',
            '덕진구',
            '군산시',
            '익산시',
            '정읍시',
            '남원시',
            '김제시',
        ],
        _p: ['목포시', '여수시', '순천시', '나주시', '광양시'],
    }

    const locationGu = useSelector((state) => state.moim.moim_all)

    const [location1, setLocation1] = React.useState('_a')
    const [location2, setLocation2] = React.useState('a')

    console.log('>>>>>', locationGu)
    console.log('>>>>>', location2)
    return (
        <>
            <select onChange={(e) => setLocation1(`_${e.target.value}`)}>
                <option value="a">서울특별시</option>
                <option value="b">부산광역시</option>
                <option value="c">인천광역시</option>
                <option value="d">대구광역시</option>
                <option value="e">대전광역시</option>
                <option value="f">광주광역시</option>
                <option value="g">울산광역시</option>
                <option value="h">세종특별자치시</option>

                <option value="i">경기도</option>
                <option value="j">강원도</option>
                <option value="k">충청북도</option>
                <option value="l">충청남도</option>
                <option value="m">경상북도</option>
                <option value="n">경상남도</option>
                <option value="o">전라북도</option>
                <option value="p">전라남도</option>
            </select>
            <select onChange={(e) => setLocation2(e.target.value)}>
                {locations[location1]?.map((e) => (
                    <option value={e}> {e}</option>
                ))}
            </select>
            <button onClick={() => dispatch(moimLocationMD(location2))}>
                검색하기
            </button>
        </>
    )
}
export default Filter
