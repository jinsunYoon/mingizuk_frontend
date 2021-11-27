import React from 'react'

//* components
import { CollectionItem } from '../index'

//* sytle
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

const CollectionList = () => {
    return (
        <>
            <section className="contents">
                <Div100vh>
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
                </Div100vh>
            </section>
        </>
    )
}

const Flex = styled.div`
    display: flex;
    border: none;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.125rem 2rem 1.125rem;
    width: 100%;
    height: 100%;
`

const Item = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const More = styled.div`
    font-size: 0.813rem;
    font-weight: 500;
    color: #a5abb0;
`

export default CollectionList
