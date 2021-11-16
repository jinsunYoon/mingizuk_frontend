/*global kakao*/
import React, { useState } from 'react'
import MapContainer from './MapContainer'
import { FlexRow, ButtonOutlined, ButtonFill } from '../../elements/index'
import { history } from '../../redux/store'

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
                    width: '100%',
                    display: 'flex',
                    marginTop: '2.938rem',
                    padding: '1rem',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <FlexRow _width={'100%'} _others={'max-width:48rem'}>
                    <input
                        onChange={onChange}
                        value={InputText}
                        placeholder="모임을 할 장소를 검색해주세요!"
                        style={{
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                            padding: '0 1rem',
                        }}
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
                    >
                        검색
                    </ButtonOutlined>
                </FlexRow>
                <MapContainer searchPlace={Place} />
            </form>
            <FlexRow
                _width={'100vw'}
                _border={'none'}
                _margin={'0'}
                _padding={'0'}
            >
                <ButtonFill
                    _bgColor={'#6B76FF'}
                    _width={'100%'}
                    _margin={'0'}
                    _padding={'0'}
                    _others={'height:3.5rem; max-width:48rem'}
                    _onClick={() => {
                        history.push('/moim/write')
                    }}
                >
                    위치 선택 완료
                </ButtonFill>
            </FlexRow>
        </>
    )
}

export default MapSearch
