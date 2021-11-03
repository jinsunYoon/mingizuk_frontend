import React, { Component, useState } from 'react';
import {history} from '../../redux/store'

//* components
import { 
    Header, 
    NavBar,
    CollectionItem
} from '../index'

//* elements
import {
    FlexColumn,
    FlexRow,
    Img,
    Text,
    ButtonOutlined,
} from '../../elements/index' 


//* sytle
import styled from 'styled-components'

const CollectionList = () => {
    return(
    <>
        <Header name="마이콜렉션"/>
        <Flex>
            <CollectionItem/>
            <CollectionItem/>
            <CollectionItem/>
        </Flex>
        <NavBar/>
    </>
    )
}

const Flex = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-content:space-around;
    flex-direction: row;
    border:none;
    padding:35px 0; 
    width: 100%;

`

export default CollectionList;



