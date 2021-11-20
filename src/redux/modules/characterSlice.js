import { createSlice } from '@reduxjs/toolkit'
import { getCharacterMD, postCharacterMD } from '../async/character'

const initialState = {
    charList: [],
    characterName: '',
}

const characterSlice = createSlice({
    name: 'character',
    initialState: initialState,
    reducers: {
        charLevel: (state, action) => {
            state.charList.charLevel = action.payload
        },
    },

    extraReducers: {
        //* 캐릭터 정보조회
        [getCharacterMD.fulfilled]: (state, { payload }) => {
            const getLevel = (exp) => {
                let result
                if (exp <= 10000) {
                    result = 1
                } else if (exp >= 10000 && exp < 20000) {
                    result = 2
                } else if (exp >= 20000 && exp < 30000) {
                    result = 3
                } else if (exp >= 30000 && exp < 40000) {
                    result = 4
                } else if (exp >= 40000 && exp < 50000) {
                    result = 5
                } else if (exp >= 50000 && exp < 60000) {
                    result = 6
                } else if (exp >= 60000 && exp < 70000) {
                    result = 7
                } else if (exp >= 70000 && exp < 80000) {
                    result = 8
                } else if (exp >= 80000 && exp < 90000) {
                    result = 9
                } else if (exp >= 90000 && exp <= 92000) {
                    result = 10
                }
                return result
            }

            const getSrc = (name, level) => {
                let result
                if (name === '라이온') {
                    if (level === 1 || 2 || 3) {
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png`
                    } else if (level === 4 || 5 || 6) {
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-2.png`
                    } else if (level === 7 || 8 || 9 || 10) {
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-3.png`
                    }
                    return result
                }

                if (name === '제이지') {
                    if (level === 1 || 2 || 3) {
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1_1+1.png`
                    } else if (level === 4 || 5 || 6) {
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1_2+1.png`
                    } else if (level === 7 || 8 || 9 || 10) {
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1_3+1.png`
                    }
                    return result
                }

                if (name === '무지') {
                    if (level === 1 || 2 || 3) {
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_2_1+1.png`
                    } else if (level === 4 || 5 || 6) {
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_2_2+1.png`
                    } else if (level === 7 || 8 || 9 || 10) {
                        return `https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_2_3+1.png`
                    }
                    return result
                }
            }

            const charData = []

            payload.data.character.map((char) =>
                charData.push({
                    exp: char.exp,
                    expMax: char.expMax,
                    charName: char.characterName,
                    charLevel: getLevel(char.exp),
                    charSrc: getSrc(char.characterName, getLevel(char.exp)),
                })
            )
            state.charList = charData
        },
        [getCharacterMD.rejected]: (state, { payload }) => {
            console.log('erromsg')
        },

        //* 캐릭터 뽑기
        [postCharacterMD.fulfilled]: (state, { payload }) => {
            const data = {
                exp: 0,
                expMax: 10000,
                charName: payload.data.characterName,
                charLevel: 1,
            }
            state.charList = state.charList.push(data)
            state.characterName = payload.data.characterName
        },
        [postCharacterMD.rejected]: (state, { payload }) => {},
    },
})

//* slice export
export default characterSlice
