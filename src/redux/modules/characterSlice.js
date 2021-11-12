import { createSlice } from '@reduxjs/toolkit'
import { getCharacterMD, postCharacterMD } from '../async/character'

const initialState = {
    charList: [],
}

const characterSlice = createSlice({
    name: 'character',
    initialState: initialState,
    reducers: {},

    extraReducers: {
        //* 캐릭터 정보조회
        [getCharacterMD.fulfilled]: (state, { payload }) => {
            const getChar = (name) => {
                switch (name) {
                    case '라이언':
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png`

                    case '무지':
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-2.png`

                    case '제이지':
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-3.png`
                    default:
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png`
                }
            }

            const charData = []
            payload.data.character.map((char) =>
                charData.push({
                    exp: char.exp,
                    expMax: char.expMax,
                    characterName: char.characterName,
                    charSrc: getChar(char.characterName),
                })
            )

            state.charList = charData
        },
        [getCharacterMD.rejected]: (state, { payload }) => {
            console.log('erromsg')
        },

        //* 캐릭터 뽑기
        [postCharacterMD.fulfilled]: (state, { payload }) => {
            state.character = payload
            console.log(payload, '<<postCharacterMD 풀필드>>')
        },
        [postCharacterMD.rejected]: (state, { payload }) => {
            console.log('erromsg')
        },
    },
})

//* slice export
export default characterSlice
