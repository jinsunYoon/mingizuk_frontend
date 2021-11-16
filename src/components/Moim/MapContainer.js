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
import { setMarker, setAddressName } from '../../redux/modules/moimSlice'

const { kakao } = window

const MapContainer = ({ searchPlace }) => {
    const dispatch = useDispatch()

    // 검색결과 배열에 담아줌
    const [Places, setPlaces] = useState([])

    const [latitude, setLatitude] = React.useState('')
    const [longitude, setLongitude] = React.useState('')

    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position?.coords?.latitude)
        setLongitude(position?.coords?.longitude)
    })

    const getMarker = useSelector((state) => state.moim.marker)
    const getAddressName = useSelector((state) => state.moim.addressName)

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
                    ${place.place_name}
                    </div>`
                )
                infowindow.open(map, marker)
                dispatch(setMarker(place.place_name))
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
                                            ? dispatch(
                                                  setAddressName(
                                                      item?.road_address_name
                                                  )
                                              )
                                            : dispatch(
                                                  setAddressName(
                                                      item?.address_name
                                                  )
                                              )
                                    }
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
                                    <h5>{item.place_name}</h5>
                                    {item.road_address_name ? (
                                        <div>
                                            <span>
                                                {item.road_address_name}
                                            </span>
                                            <span>{item.address_name}</span>
                                        </div>
                                    ) : (
                                        <span>{item.address_name}</span>
                                    )}
                                    <span>{item.phone}</span>
                                </FlexColumn>
                            </div>
                        ))}
                    </div>
                </FlexColumn>
            </FlexColumn>
            <FlexRow _margin={'1rem 0 0 0'} _width={'100%'}>
                <Text _padding={'1rem'}>선택한 주소 : {getAddressName}</Text>
            </FlexRow>
        </>
    )
}

export default MapContainer
