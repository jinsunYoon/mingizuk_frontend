import React from 'react'
import { ActiveUnderLine } from '../elements/index'
import { FlexRow, Text } from '../elements/index'

const ToggleTab = (props) => {
    const { firstValue, secondValue } = props
    const [myTab, setmytab] = React.useState(true)
    const [recommedTab, setrecommedTab] = React.useState(false)

    return (
        <FlexRow _width="320px" _border="none" _margin="0 0 10px 0">
            {myTab ? (
                <ActiveUnderLine
                    _onClick={() => {
                        setmytab(true)
                    }}
                    active
                >
                    <Text _fontWeight="700">{firstValue}</Text>
                </ActiveUnderLine>
            ) : (
                <ActiveUnderLine
                    _onClick={() => {
                        setmytab(true)
                        setrecommedTab(false)
                    }}
                >
                    {firstValue}
                </ActiveUnderLine>
            )}
            {recommedTab ? (
                <ActiveUnderLine
                    _onClick={() => {
                        setrecommedTab(false)
                    }}
                    active
                >
                    <Text _fontWeight="700">{secondValue}</Text>
                </ActiveUnderLine>
            ) : (
                <ActiveUnderLine
                    _onClick={() => {
                        setrecommedTab(true)
                        setmytab(false)
                    }}
                >
                    {secondValue}
                </ActiveUnderLine>
            )}
        </FlexRow>
    )
}

ToggleTab.defaultProps = {
    firstValue: 'firstValue',
    secondValue: 'secondValue',
}

export default ToggleTab
