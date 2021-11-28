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
                            <CollectionItem />
                            <CollectionItem />
                            <CollectionItem />
                            <CollectionItem />
                            <CollectionItem />
                            <CollectionItem />
                            <CollectionItem />
                            <CollectionItem />
                            <CollectionItem />
                            <CollectionItem />
                            <CollectionItem />
                            <CollectionItem />
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
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    height: 100%;
`

const Item = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 95%;
    justify-content: space-around;
    align-content: space-around;
`

const More = styled.div`
    font-size: 0.813rem;
    font-weight: 500;
    color: #a5abb0;
    flex: 1 1 5%;
`

export default CollectionList
