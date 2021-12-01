import React from 'react'
import { useSelector } from 'react-redux'

//* components
import { CollectionItem } from '../index'

//* sytle
import styled from 'styled-components'

const CollectionList = (props) => {
    const char = useSelector((state) => state.character.charList)

    const firstchar = () => {
        let result
        if (char.charName === '라이온')
            result = (
                <img
                    src="
                    https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1-1.png
        "
                    style={{ width: '6rem', height: '6rem' }}
                />
            )
        else if (char.charName === '무지')
            result = (
                <img
                    src="https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_2_1+1.png"
                    style={{ width: '6rem', height: '6rem' }}
                />
            )
        else if (char.charName === '제이지')
            result = (
                <img
                    src="https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_1_1+1.png"
                    style={{ width: '6rem', height: '6rem' }}
                />
            )

        return result
    }

    return (
        <>
            <div className="mypage-layout">
                <section className="contents">
                    <Flex>
                        <Item>
                            <Row>
                                <img
                                    src="https://minggizuk.s3.ap-northeast-2.amazonaws.com/character_2_1+1.png"
                                    style={{ width: '6rem', height: '6rem' }}
                                />
                                <CollectionItem />
                                <CollectionItem />
                            </Row>
                            <Row>
                                <CollectionItem />
                                <CollectionItem />
                                <CollectionItem />
                            </Row>
                            <Row>
                                <CollectionItem />
                                <CollectionItem />
                                <CollectionItem />
                            </Row>
                            <Row>
                                <CollectionItem />
                                <CollectionItem />
                                <CollectionItem />
                            </Row>
                        </Item>
                        <More>더 많은 캐릭터들을 기다려주세요!</More>
                    </Flex>
                </section>
            </div>
        </>
    )
}

const Flex = styled.div`
    display: flex;
    border: none;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.5rem;
    width: 100%;
    max-width: 500px;
    height: 100%;
    margin: 0 auto;
`

const Item = styled.div`
    display: flex;
    width: 100%;
    flex: 1 1 95%;
    flex-direction: column;
    justify-content: space-around;
    align-content: space-around;
`

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const More = styled.div`
    font-size: 0.813rem;
    font-weight: 500;
    color: #a5abb0;
    flex: 1 1 5%;
`

export default CollectionList
