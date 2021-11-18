import React from 'react'

const Filter = () => {
    ;<>
        <select>
            <option value="a">서울특별시</option>
            <option value="b">부산광역시</option>
            <option value="c">인천광역시</option>
            <option value="d">대구광역시</option>
            <option value="e">대전광역시</option>
            <option value="f">광주광역시</option>
            <option value="g">울산광역시</option>
            <option value="h">경기도</option>
            <option value="i">충청북도</option>
            <option value="j">충청남도</option>
            <option value="k">경상북도</option>
            <option value="l">경상남도</option>
            <option value="m">전라북도</option>
        </select>

        {function selectCategory(e) {
            let _a = [
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
            ]
            let _b = [
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
            ]
            let _c = [
                '중구',
                '동구',
                '미추홀구',
                '연수구',
                '남동구',
                '부평구',
                '계양구',
                '서구',
            ]
            let _d = [
                '남구',
                '달서구',
                '동구',
                '북구',
                '서구',
                '수성구',
                '중구',
            ]
            let _e = ['대덕구', '동구', '서구', '유성구', '중구']
            let _f = ['광산구', '남구', '동구', '북구', '서구']
            let _g = ['남구', '동구', '북구', '중구']
            let _h = [
                '수원시',
                '성남시',
                '안양시',
                '고양시',
                '안산시',
                '용인시',
            ]
            let _i = ['청주시']
            let _j = ['천안시']
            let _k = ['포항시']
            let _l = ['창원시']
            let _m = ['전주시']
        }}
    </>
}

export default Filter
