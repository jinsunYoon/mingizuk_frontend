import React from 'react'
import { FlexColumn, Text, Img } from '../elements/index'
import { useSelector } from 'react-redux'

const MainRoutineList = (props) => {
    const modal = useSelector((state) => state.actionComplete.modalStatus)
    const mainRoutine = useSelector((state) => state.setAction.mainRoutine)
    const num = mainRoutine?.Actions?.length - 1
    const result = useSelector((state) => state.actionComplete.result)

    const actionComplete = useSelector((state) => state.actionComplete)

    if (mainRoutine?.Actions?.length == result?.length) {
        return (
            <div style={{ display: 'flex', zIndex: '2' }}>
                <FlexColumn _width={'100%'} _height={'false'} _border={'none'}>
                    <Text
                        _fontSize={'0.875rem'}
                        _fontWeight={'500'}
                        _color={'#8F8F8F'}
                        _padding={'0.5rem 0 1rem 0'}
                    >
                        짝짝짝 ~ 🙌 루틴을 모두 마쳤어요.
                    </Text>
                </FlexColumn>
            </div>
        )
    }

    return (
        <div
            style={{
                display: 'flex',
                zIndex: '2',
                minHeight: '6.25rem',
                width: '100%',
                height: false,
                justifyContent: 'space-around',
            }}
        >
            {mainRoutine?.Actions?.map((routine, idx) => {
                return (
                    <>
                        <FlexColumn
                            _width={'100%'}
                            _height={'100%'}
                            _border={'none'}
                            _padding={'0px'}
                            _justify={'start'}
                        >
                            {routine?.actionType == 'stretching' ? (
                                result?.length > 0 &&
                                result?.length - 1 >= idx ? (
                                    <Img
                                        _src={
                                            'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/stretchdone.png'
                                        }
                                        _width={'3rem'}
                                        _height={'3rem'}
                                    />
                                ) : (
                                    <Img
                                        _src={
                                            'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/stretch.png'
                                        }
                                        _width={'3rem'}
                                        _height={'3rem'}
                                    />
                                )
                            ) : result?.length > 0 &&
                              result?.length - 1 >= idx ? (
                                <Img
                                    _src={
                                        'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/exercisedone.png'
                                    }
                                    _width={'3rem'}
                                    _height={'3rem'}
                                />
                            ) : (
                                <Img
                                    _src={
                                        'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/exercise.png'
                                    }
                                    _width={'3rem'}
                                    _height={'3rem'}
                                />
                            )}

                            {/* <FlexRow
                                    _width={'false'}
                                    _height={'1rem'}
                                    _bgColor={'black'}
                                    _border={'none'}
                                    _margin={'-40px -25px 20px 0px'}
                                    _others={
                                        'border-radius:1rem; min-width:1rem;'
                                    }
                                >
                                    <Text
                                        _color={'#fff'}
                                        _padding={'0px 3px 0px 3px'}
                                    >
                                        {routine?.actionCnt}
                                    </Text>
                                </FlexRow> */}
                            {routine?.actionName?.length > 5 ? (
                                result?.length > 0 &&
                                result?.length - 1 >= idx ? (
                                    <Text
                                        _margin={'5px 0px 0px 0px'}
                                        _fontSize={'0.75rem'}
                                        _color={'#6B76FF'}
                                    >
                                        {routine?.actionName?.split(' ')[0]}{' '}
                                        <br />{' '}
                                        {routine?.actionName?.split(' ')[1]}
                                    </Text>
                                ) : (
                                    <Text
                                        _margin={'5px 0px 0px 0px'}
                                        _fontSize={'0.75rem'}
                                    >
                                        {routine?.actionName?.split(' ')[0]}{' '}
                                        <br />{' '}
                                        {routine?.actionName?.split(' ')[1]}
                                    </Text>
                                )
                            ) : result?.length > 0 &&
                              result?.length - 1 >= idx ? (
                                <Text
                                    _margin={'5px 0px 0px 0px'}
                                    _fontSize={'0.75rem'}
                                    _color={'#6B76FF'}
                                >
                                    {routine?.actionName}
                                </Text>
                            ) : (
                                <Text
                                    _margin={'5px 0px 0px 0px'}
                                    _fontSize={'0.75rem'}
                                >
                                    {routine?.actionName}
                                </Text>
                            )}
                        </FlexColumn>
                        {/* {idx < num && (
                            <FlexRow _border={'none'} _width={'0.625rem'}>
                                <Icon icon={'chevron-right'} size={24} />
                            </FlexRow>
                        )} */}
                    </>
                )
            })}
        </div>
    )
}

export default MainRoutineList
