import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActiveUnderLine } from '../elements/index'
import { FlexRow, Text } from '../elements/index'
import { changeMyPageModal } from '../redux/modules/routine'

const ToggleTab = (props) => {
    const dispatch = useDispatch()
    const { firstValue, secondValue, select } = props
    const [myTab, setmytab] = React.useState(true)
    const [recommedTab, setrecommedTab] = React.useState(false)

    React.useEffect(() => {
        if (select === 'first') {
            setmytab(true)
            setrecommedTab(false)
        } else if (select === 'second') {
            setmytab(false)
            setrecommedTab(true)
        } else {
            setmytab(true)
            setrecommedTab(false)
        }
    }, [select])

    return (
        <FlexRow _width="320px" _border="none" _margin="0 0 10px 0">
            {myTab ? (
                <ActiveUnderLine
                    _onClick={() => {
                        dispatch(changeMyPageModal('first'))
                        setmytab(true)
                    }}
                    active
                >
                    <Text _fontWeight="700">{firstValue}</Text>
                </ActiveUnderLine>
            ) : (
                <ActiveUnderLine
                    _onClick={() => {
                        dispatch(changeMyPageModal('first'))
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
                        dispatch(changeMyPageModal('second'))
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
    select: 'first',
}

export default ToggleTab
