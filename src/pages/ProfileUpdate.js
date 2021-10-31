import React from 'react';

// import history from '../redux/store'

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
    ButtonFill,
    Input
} from '../elements/index'

//* style
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useHistory } from 'react-router';



const ProfileUpdate = () => {
    const history = useHistory()
    return(
        <>
            <Header name="프로필수정"/>
            <FlexColumn _width="100%" _height="400px" _border="none">
                <label for="profile">
                    <AccountCircleIcon style={{fontSize:'150px', color:'grey' }}/>
                </label>
                <input type="file" id="profile" 
                        style={{
                            position:'absolute',
                            top:'-99999px'}}
                />
                <Input _ph="" _width="70%"/>
                <Text _padding="10px 0 50px">프로필사진과 닉네임을 입력해주세요.</Text>

                <ButtonFill
                    _width="70%" 
                    _padding="10px"
                    _bgColor="grey"
                    _onClick={()=>{history.push('/users')}}
                >
                    완료
                </ButtonFill>     
            </FlexColumn>
            <NavBar/>
   
            </>
    )
}

export default ProfileUpdate;