/*global kakao*/
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MapContainer from './MapContainer'
import { FlexRow, ButtonOutlined, ButtonFill } from '../../elements/index'
import { history } from '../../redux/store'
import Icon from '../../components/icons/Icon'

const MapSearch = () => {
    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')
    const [map, setMap] = useState(false)
    const [reset, setReset] = useState(false)

    const getAddress = useSelector((state) => state.moim.address)
    const getPlace = useSelector((state) => state.moim.place)

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText)
        setInputText('')
    }

    return (
        <>
            {map && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        backgroundColor: '#fff',
                        zIndex: 4,
                    }}
                >
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            width: '100%',
                            height: '100vh',
                            display: 'flex',
                            padding: '4rem 1rem 4.5rem 1rem',
                            flexDirection: 'column',
                            justifyContent: 'start',
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
                        _others={'position: fixed; bottom:0'}
                    >
                        <ButtonFill
                            _bgColor={'#6B76FF'}
                            _width={'100%'}
                            _margin={'0'}
                            _padding={'0'}
                            _others={'height:3.5rem; max-width:48rem'}
                            _onClick={() => {
                                setMap(false)
                                setReset(true)
                            }}
                        >
                            위치 선택 완료
                        </ButtonFill>
                    </FlexRow>
                </div>
            )}
            <button
                className="map-btn"
                onClick={() => {
                    setMap(true)
                }}
            >
                <Icon icon={'create'} size={13} />
                {reset && getPlace ? (
                    <div style={{ color: 'black' }}>
                        {getPlace} - {getAddress}
                    </div>
                ) : (
                    '위치를 선택해주세요'
                )}
            </button>
        </>
    )
}

export default MapSearch
