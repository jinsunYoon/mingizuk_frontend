import React, { Component, useState } from 'react'

//* components
import { CollectionItem } from '../index'

//* sytle
import styled from 'styled-components'

// 단계별(1,2,3)
const CollectionList = () => {
    return (
        <>
        
            <Flex>
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
            </Flex>
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
    padding: 35px 0;
    width: 100%;
`

export default CollectionList
