import React, { Component, useState } from 'react'

//* components
import { CollectionItem } from '../index'

//* sytle
import styled from 'styled-components'

const CollectionList = () => {
    return (
        <>
            <Container>
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
            </Container>
        </>
    )
}

const Container = styled.div`
    margin-top: 50px;
`

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
