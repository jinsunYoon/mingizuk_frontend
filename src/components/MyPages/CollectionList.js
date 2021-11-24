import React from 'react'

//* components
import { CollectionItem } from '../index'

//* sytle
import styled from 'styled-components'

const CollectionList = () => {
    return (
        <>
            <section className="contents">
                <Flex>
                    <CollectionItem />
                    <CollectionItem />
                    <CollectionItem />
                </Flex>
                <Flex>
                    <CollectionItem />
                    <CollectionItem />
                    <CollectionItem />
                </Flex>
                <Flex>
                    <CollectionItem />
                    <CollectionItem />
                    <CollectionItem />
                </Flex>
                <Flex>
                    <CollectionItem />
                    <CollectionItem />
                    <CollectionItem />
                </Flex>
            </section>
        </>
    )
}

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
    flex-direction: row;
    border: none;
    padding: 25px 0;
    width: 100%;
`

export default CollectionList
