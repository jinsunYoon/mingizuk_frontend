import React from 'react'

//* components
import { CollectionItem } from '../index'

//* sytle
import styled from 'styled-components'

const CollectionList = () => {
    return (
        <>
            <div className="mypage-layout">
                <section className="contents">
                    <Flex>
                        <Item>
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
    padding: 1rem;
    width: 100%;
    height: 100%;
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
