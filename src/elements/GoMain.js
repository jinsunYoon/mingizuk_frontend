import React from 'react'
import { history } from '../redux/store'
import Icon from '../components/icons/Icon'

const GoMain = () => {
    return (
        <>
            <div
                style={{ position: 'absolute', left: '20px' }}
                onClick={() => {
                    history.push('/')
                }}
            >
                <Icon icon="coolicon" size="24px" />
            </div>
        </>
    )
}

export default GoMain
