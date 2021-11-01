import React from 'react';

//* router
import {history} from '../redux/store'

//* elements
import { 
    Text, 
    FlexColumn, 
    FlexRow,
    ButtonOutlined
} from '../elements/index'

//* icons
import Icon from '../components/icons/Icon'
import HomeIcon from '@mui/icons-material/Home';
import CachedIcon from '@mui/icons-material/Cached';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { positions } from '@mui/system';

const NavBar = () => {
    const navPosition ={
        width:'100%',
        position: 'fixed',
        bottom: 0
    }
    return(
        <>
            <div style={navPosition}>
            <FlexRow _width="100%" _justify="space-between">
                <FlexColumn _border="none" _height="65px" > 
                    <ButtonOutlined _width="auto" _padding="0" _margin="0" _color="#000" _border="none" 
                                    _onClick={()=>{ history.push('/') }}> 
                        <HomeIcon/>
                        <Text _padding="2px 0 0" _fontSize="11px">홈버튼</Text>
                    </ButtonOutlined>
                </FlexColumn>    
                <FlexColumn _border="none" _height="65px">
                    <ButtonOutlined _width="auto" _padding="0" _margin="0" _color="#000" _border="none" 
                                    _onClick={()=>{ history.push('/routine/mypage') }}> 
                        <CachedIcon/>
                        <Text _padding="2px 0 0" _fontSize="11px">루틴</Text>
                    </ButtonOutlined>
                </FlexColumn>    
                <FlexColumn _border="none" _height="65px">
                    <ButtonOutlined _width="auto" _padding="0" _margin="0" _color="#000" _border="none" 
                                    _onClick={()=>{ history.push('/') }}> 
                        <PeopleOutlineIcon/>
                        <Text _padding="2px 0 0" _fontSize="11px">모임</Text>
                    </ButtonOutlined>
                </FlexColumn>    
                <FlexColumn _border="none" _height="65px">
                    <ButtonOutlined _width="auto" _padding="0" _margin="0" _color="#000" _border="none" 
                                    _onClick={()=>{ history.push('/') }}> 
                        <BarChartIcon/>
                        <Text _padding="2px 0 0" _fontSize="11px">통계</Text>
                    </ButtonOutlined>
                </FlexColumn>
                <FlexColumn _border="none" _height="65px">
                    <ButtonOutlined _width="auto" _padding="0" _margin="0" _color="#000" _border="none" 
                                    _onClick={()=>{ history.push('/users') }}> 
                        <PersonOutlineIcon/>
                        <Text _padding="2px 0 0" _fontSize="11px">마이페이지</Text>
                    </ButtonOutlined>
                </FlexColumn>
            </FlexRow>
            </div>
        </>
    )
} 

export default NavBar;