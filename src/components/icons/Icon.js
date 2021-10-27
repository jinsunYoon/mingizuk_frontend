import React from 'react'
import IcomoonReact from 'icomoon-react'
import iconSet from './selection.json'

const Icon = (props) => {
    const { color, size = '100%', icon, className = '' } = props
    return (
        <div>
            <IcomoonReact
                iconSet={iconSet}
                color={color}
                size={size}
                icon={icon}
            />
        </div>
    )
}

export default Icon
