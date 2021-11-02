import React from 'react'
import styled from 'styled-components'
import {
    ButtonOutlined,
    FlexRow,
    FlexColumn,
    Text,
    Img,
} from '../elements/index'
import { CancelRounded } from '@material-ui/icons'
import Icon from '../components/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import {
    setActionBtn,
    setActionName,
    setModal,
    setImgSrc,
    setCompleteBtn,
    setDefaultBtn,
} from '../redux/modules/completeSlice'

const CompleteAfter = (props) => {
    return (
        <>
            <Text>왜 안나와</Text>
        </>
    )
}

export default CompleteAfter
