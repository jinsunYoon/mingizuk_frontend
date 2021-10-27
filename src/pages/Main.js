import React from 'react'
import {
    FlexRow,
    FlexColumn,
    SubTitle,
    Title,
    Input,
    ButtonFill,
    ButtonOutlined,
    Text,
} from '../elements/index'
import {Modal, Header, Footer} from '../components/index'

const Main = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <FlexColumn
                _width={'360px'}
                _height={'100%'}
                _padding={'1rem'}
                _margin={'1rem 0rem'}
                _others={'border: 1px solid red; box-sizing: border-box;'}
            >
                {/* <Text _fontSize={'1.5rem'} _color={'black'} _padding={'0px'}>
                    오늘의{' '}
                    <span style={{ fontWeight: '700', color: '#2baffd' }}>
                        밍기적
                    </span>
                    을 이루세요!
                </Text> */}
                <Modal />
                <FlexColumn _align={'start'} _width={'100%'} _border={'none'}>
                    {' '}
                    <Text
                        _fontSize={'1rem'}
                        _margin={'0px 0px 1.15rem 0px'}
                        _padding={'0px'}
                    >
                        메인 루틴
                    </Text>
                    <FlexRow
                        _width={'100%'}
                        _height={'100px'}
                        _others={
                            'border : 1px solid gray; box-sizing: border-box; background-color: #C4C4C4;'
                        }
                    >
                        <ButtonOutlined
                            _width={'100%'}
                            _color={'black'}
                            _border={'none'}
                        >
                            당신의 루틴을 설정해보세요!
                        </ButtonOutlined>
                    </FlexRow>
                </FlexColumn>
            </FlexColumn>
            <Footer/>
        </React.Fragment>
    )
}

export default Main
