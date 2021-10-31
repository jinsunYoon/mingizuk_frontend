import React, { useState } from 'react';
import {history} from '../redux/store'

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
import Icon from '../components/icons/Icon'


const MyPage =(props) => {
    const [userInfo, setUserInfo] = useState('')
    return(
        <>
            <Header name="마이페이지"/>
            <FlexRow _border="none" _width="100%" _height="100px" _justify="start" _margin="0 40px">
                <Img 
                _width="43px" 
                _height="43px"
                _bradius="50%"
                _src='https://file.mk.co.kr/meet/neds/2021/09/image_readtop_2021_914472_16325446274794777.jpg'
                />
                <FlexColumn _border="none" _align="start" _padding="0 10px" _height="auto">
                    <Text _fontSize="16px" _margin="0 5px 0">
                        닉네임
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
            <hr/>
            
            <ButtonOutlined
                _margin="5px"
                _width="100%"
                _onClick={()=>history.push('/users/collection')}
                _border="none"
            >
                마이 콜렉션
            </ButtonOutlined>
            <hr/>
            <ButtonOutlined
                _margin="5px"
                _width="100%"
                _onClick={()=>history.push('/users/moim')}
                _border="none"
            >
                내 모임
            </ButtonOutlined>
            <hr/>
            <NavBar/>
        </>
    )
}

export default MyPage;


