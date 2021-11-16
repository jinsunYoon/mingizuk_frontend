import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { setPlace, setAddress } from '../../redux/modules/moimSlice'

const { kakao } = window

const MapContainer = ({ searchPlace }) => {
    const dispatch = useDispatch()

    // 검색결과 배열에 담아줌
    const [Places, setPlaces] = useState([])

    const [latitude, setLatitude] = React.useState('')
    const [longitude, setLongitude] = React.useState('')
    const [addressName, setAddressName] = React.useState('')
    const [placeName, setPlaceName] = React.useState('')

    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position?.coords?.latitude)
        setLongitude(position?.coords?.longitude)
    })

    useEffect(() => {
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
        var markers = []
        const container = document.getElementById('myMap')
        const options = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3,
        }
        const map = new kakao.maps.Map(container, options)

        const ps = new kakao.maps.services.Places()

        ps.keywordSearch(searchPlace, placesSearchCB)

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds()

                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i])
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }

                map.setBounds(bounds)
                setPlaces(data)
            }
        }

        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
            })

            kakao.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(
                    `<div style="padding:5px;font-size:12px;border-bottom:1px solid lightgray">
                    ${place?.place_name}
                    </div>`
                )
                infowindow.open(map, marker)
                setAddressName(place?.address_name)
                setPlaceName(place?.place_name)
                dispatch(setPlace(place?.place_name))
                dispatch(setAddress(place?.address_name))
                console.log('place', place)
            })
        }
    }, [searchPlace, latitude, longitude])

    return (
        <>
            <FlexColumn
                _width={'100%'}
                _alignItems={'center'}
                _border={'1px solid lightgray'}
                _height={'100%'}
                _others={'max-width:48rem'}
            >
                <div
                    id="myMap"
                    style={{
                        width: '100%',
                        height: '20rem',
                    }}
                ></div>
                <FlexColumn
                    _width={'100%'}
                    _height={'7.5rem'}
                    _border={'none'}
                    _justify={'start'}
                    _others={'overflow-y: auto;'}
                >
                    <div id="result-list">
                        {Places.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    {
                                        item?.road_address_name
                                            ? setAddressName(
                                                  item?.road_address_name
                                              )
                                            : setAddressName(item?.address_name)
                                    }
                                    item?.road_address_name
                                        ? dispatch(
                                              setAddress(
                                                  item?.road_address_name
                                              )
                                          )
                                        : dispatch(
                                              setAddress(item?.address_name)
                                          )
                                    dispatch(setPlace(item?.place_name))
                                }}
                            >
                                <FlexColumn
                                    _border={'none'}
                                    _width={'100%'}
                                    _align={'start'}
                                    _height={'false'}
                                    _padding={'1rem'}
                                    _others={
                                        'border-bottom: 1px solid lightgray'
                                    }
                                >
                                    <h5>{item?.place_name}</h5>
                                    {item?.road_address_name ? (
                                        <div>
                                            <span>
                                                {item?.road_address_name}
                                            </span>
                                        </div>
                                    ) : (
                                        <span>{item?.address_name}</span>
                                    )}
                                    <span>{item?.phone}</span>
                                </FlexColumn>
                            </div>
                        ))}
                    </div>
                </FlexColumn>
            </FlexColumn>
            <FlexRow
                _margin={'1rem 0 0 0'}
                _width={'100%'}
                _others={'max-width:48rem'}
            >
                <Text _padding={'1rem'}>
                    {placeName
                        ? `선택한 주소 : ${placeName} - ${addressName}`
                        : '위치를 선택해주세요'}
                </Text>
            </FlexRow>
        </>
    )
}

export default MapContainer
