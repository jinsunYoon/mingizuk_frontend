/*global kakao*/
import React, { useEffect, useState } from 'react'
import MapContainer from './MapContainer'
import {
    FlexRow,
    FlexColumn,
    SubTitle,
    Title,
    Input,
    ButtonFill,
    ButtonOutlined,
    Text,
} from '../../elements/index'

const { kakao } = window

const MapSearch = () => {
    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')
    const [map, setMap] = useState(false)

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText)
        setInputText('')
    }

    const alert = () => {
        window.alert('검색어를 입력하세요.')
        setMap(false)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <FlexRow _width={'100%'}>
                    <Input
                        _ph="검색어를 입력하세요"
                        _onChange={onChange}
                        _value={InputText}
                        _others={'border:none; outline: none'}
                        _width={'100%'}
                    />
                    <ButtonOutlined
                        _width={'5rem'}
                        _padding={'0px 1rem'}
                        _margin={'none'}
                        _bradius={'0px'}
                        _border={'none'}
                        _others={
                            'height: 3rem; border-left: 1px solid lightgray'
                        }
                        _onClick={() => {
                            setMap(true)
                            InputText == '' && alert()
                        }}
                    >
                        검색
                    </ButtonOutlined>
                </FlexRow>
            </form>
            {map && <MapContainer searchPlace={Place} />}
        </>
    )
}

export default MapSearch
