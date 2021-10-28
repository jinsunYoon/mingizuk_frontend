import React from 'react'
import IcomoonReact from 'icomoon-react'
import iconSet from './selection.json'

const Icon = (props) => {
    const { color, size = '100%', icon, className = '', _onClick } = props
    return (
        <div onClick={_onClick}>
            <IcomoonReact
                iconSet={iconSet}
                color={color}
                size={size}
                icon={icon}
            />
        </div>
    )
}

Icon.defaultProps = {
    _onClick: () => {},
}

export default Icon
