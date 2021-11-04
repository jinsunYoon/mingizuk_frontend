import React, { Component, useState } from 'react';
import {history} from '../../redux/store'

//* components
import { 
    Header, 
    NavBar,
    ColectionItem,
    CollectionList
} from '../../components/index'

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
import Icon from '../../components/icons/Icon'



const MyCollection = () => {
    
    return(
        <>
            <CollectionList/>
        </>
    )
}

export default MyCollection;

