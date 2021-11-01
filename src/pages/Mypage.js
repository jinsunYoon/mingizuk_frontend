import React, { Component, useState } from 'react';
import {history} from '../redux/store'
import { useSelector } from 'react-redux'

//* components
import { 
    Header, 
    NavBar
} from '../components/index'

//* elements
import {
    FlexColumn,
    FlexRow,
    Img,
    Text,
    ButtonOutlined,
} from '../elements/index'

//* sytle
import styled from 'styled-components'
import Icon from '../components/icons/Icon'


const MyPage =(props) => {
    const [userInfo, setUserInfo] = useState('')
    const nickName = useSelector((state)=> state.user.userInfo.nickName)
    const pwd = useSelector((state) => state.user.userInfo.userPw)

    console.log(nickName,"nickname")
    
    return(
        <>
            <Header name="마이페이지"/>
            <FlexColumn _width="100%"  _border="none">
                <FlexRow  _width="250px"  _border="none" _margin="100px 0 20px">
                    <Img 
                        _src="file.mk.co.kr/meet/neds/2021/09/image_readtop_2021_914472_16325446274794777.jpg"
                        _width="43px" 
                        _height="43px"
                        _bradius="50%"
                    />
                    <FlexColumn _height="3rem" _width="200px" _border="none" >
                        <Text _fontSize="16px" _margin="0 10px 0">
                            {nickName}
                        </Text>
                        <ButtonOutlined _padding="0" _margin="0" _width="auto" _border="none"
                                        _onClick={()=>{history.push('/users/info')}}
                        >
                            <FlexRow _border="none" _justify="Start" _width="auto">
                                <Text _fontSize="13px" _color="grey">
                                    회원정보수정하기
                                </Text>
                                <Icon icon="create" size="12px" color="grey"/>
                            </FlexRow>
                        </ButtonOutlined>
                    </FlexColumn>                       
                </FlexRow>
                <ButtonOutlined
                    _margin="20px"
                    _width="100%"
                    _onClick={()=>history.push('/users/collection')}
                    _border="none"
                    _height="20px"
                    _color="#000"
                >
                    마이 콜렉션
                </ButtonOutlined>
                <ButtonOutlined
                    _margin="20px"
                    _width="100%"
                    _onClick={()=>history.push('/users/moim')}
                    _border="none"
                    _padding="30px"
                    _color="#000"
                >
                내 모임
                </ButtonOutlined>
            </FlexColumn>
            <NavBar/>
        </>
    )
}

export default MyPage;


const Line = styled.div`
    border: solid 1px lightgrey;
    z-index:3;
    width:100%;
    `
