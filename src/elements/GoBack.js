import React from 'react'
import { history } from '../redux/store'
import Icon from '../components/icons/Icon'

const GoBack = () => {
    return (
        <>
            <div
                style={{ position: 'absolute', left: '20px' }}
                onClick={() => {
                    history.goBack()
                }}
            >
                <Icon icon="chevron-left" size="24px" />
            </div>
        </>
    )
}

export default GoBack
