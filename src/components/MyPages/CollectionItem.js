import React, { useState } from 'react';

//*style
import styled from 'styled-components'
import LockIcon from '@mui/icons-material/Lock';

const CollectionItem = () => {
    const [collection, setCollection] = useState(false);
    
    return(
        <>
            {
                collection    
            ?
                <ItemContainer>
                    <Item/>        
                </ItemContainer>    
            :
                <ItemContainer>
                    <LockIcon/>
                </ItemContainer>
            }            
        </>
    )
        }

const Item = styled.img`
    border:1px solid #000;
    width:5rem;
    height:5rem;
    border-radius:50%;
    display:flex;
    position:absolute;
`

const ItemContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-content:space-around;
    flex-direction: row;
    border:1px solid #000;
    width:5rem;
    height:5rem;
    border-radius:50%;
`



export default CollectionItem;

