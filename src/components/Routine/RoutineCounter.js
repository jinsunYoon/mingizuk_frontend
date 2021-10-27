import React from 'react'
import { FlexRow, Text } from '../../elements/index'
import Icon from '../../components/icons/Icon'

const RoutineCounter = (props) => {
    const { countList } = props

    return (
        <>
            {countList.map((count, idx) => (
                <FlexRow
                    _width="85vw"
                    _height="56px"
                    _margin="0"
                    key={idx}
                    _justify="space-between"
                    _border="none"
                    _others="border-bottom:1px solid lightgray"
                >
                    <Text _others="width:50vw">{count}</Text>
                    <FlexRow _width="132px" _border="none">
                        <FlexRow
                            _width="96px"
                            _height="34px"
                            _border="1px solid #020202"
                            _bgColor="none"
                            _others="border-radius:5px"
                        >
                            <FlexRow
                                _width="32px"
                                _height="28px"
                                _border="none"
                            >
                                <Icon icon="hyphen-minus" size="9.33px" />
                            </FlexRow>
                            <FlexRow
                                _width="32px"
                                _height="28px"
                                _border="none"
                            >
                                0
                            </FlexRow>
                            <FlexRow
                                _width="32px"
                                _height="28px"
                                _border="none"
                            >
                                <Icon icon="add-plus" size="9.33px" />
                            </FlexRow>
                        </FlexRow>
                        <FlexRow _width="40px" _height="32px" _border="none">
                            <Icon icon="close-x" size="14px" />
                        </FlexRow>
                    </FlexRow>
                </FlexRow>
            ))}
        </>
    )
}

RoutineCounter.defaultProps = {
    countList: [
        '앉았다 일어나기',
        '목돌리기',
        '허리돌리기',
        '무릎 돌리기',
        '스쿼트',
    ],
}

export default RoutineCounter
