import React from 'react'
import {
    ButtonFill,
    ButtonOutlined,
    FlexColumn,
    FlexRow,
    Img,
    Input,
    SubTitle,
    Text,
    Title,
} from '../elements/index'

const Footer = () => {
    return (
        <>
            <FlexColumn
                _align={'start'}
                _width={'100%'}
                _height={'false'}
                _padding={'1rem'}
                _margin={'0px 0px 3rem 0px'}
            >
                <div
                    style={{
                        borderBottom: '1px solid #dbdbdb',
                        paddingBottom: '1rem',
                        width: '100%',
                    }}
                >
                    <Text _fontWeight={'700'} _align={'start'} _width={'100%'}>
                        HANGHAE99
                        <br />
                        ACTUAL PROJECT
                        <br />
                        <span style={{ color: '#6dddd0' }}>MINGIJUK</span>
                        <br />
                        BY TEAM 6
                    </Text>
                </div>
                <Text
                    _padding={'1rem 0px 0px 0px'}
                    _fontWeight={'700'}
                    _color={'gray'}
                >
                    Front
                </Text>
                <Text _color={'gray'}>석지선 윤진선 이경아</Text>
                <Text
                    _padding={'1rem 0px 0px 0px'}
                    _fontWeight={'700'}
                    _color={'gray'}
                >
                    Back
                </Text>
                <Text _color={'gray'}>김영우 양주혁 임성찬</Text>
                <Text
                    _padding={'1rem 0px 0px 0px'}
                    _fontWeight={'700'}
                    _color={'gray'}
                >
                    Designer
                </Text>
                <Text _color={'gray'}>김수빈 김예진</Text>
            </FlexColumn>
        </>
    )
}

export default Footer
