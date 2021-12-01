import React, { useState } from 'react'
import { useSelector } from 'react-redux'
//*style
import styled from 'styled-components'
import LockIcon from '@mui/icons-material/Lock'

// console.log('>>?', charList)

// 레벨별(1.Lv ~10.Lv)
const CollectionItem = () => {
    // const char = useSelector((state) => state.character.charList)
    const [collection, setCollection] = useState(false)

    return (
        <>
            {collection ? (
                <ItemContainer></ItemContainer>
            ) : (
                <ItemContainer>
                    <LockIcon style={{ color: '#6B76FF' }} />
                </ItemContainer>
            )}
        </>
    )
}

const Item = styled.img`
    border: 1px solid #000;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    display: flex;
`

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
    flex-direction: row;
    border: none;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    background-color: #efefef;
`

export default CollectionItem
