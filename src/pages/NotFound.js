import React from 'react';
import { Title, Text, ButtonOutlined, FlexRow, FlexColumn } from '../elements/index';
import { history } from '../redux/store' 

const NotFound = () => {
    return(
        <>
            <FlexColumn _width="100vw" _height="100vh" _border="none" _align="space-between">
                <Title>
                    404
                </Title>
                <Text>
                    찾을 수 없는 페이지 입니다.
                    <br/>
                    요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.
                </Text>
                <FlexRow _width="100%" _border="none" _margin="100px 0">
                    <div onClick={()=>{
                        history.push('/')
                    }}>           
                        <ButtonOutlined>
                            홈으로 이동
                        </ButtonOutlined>
                    </div>
                </FlexRow>
            </FlexColumn>            
        </>
    )
}

export default NotFound;
