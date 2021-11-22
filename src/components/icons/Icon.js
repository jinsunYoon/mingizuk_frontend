import React from 'react'
import IcomoonReact from 'icomoon-react'
import iconSet from './selection.json'

const Icon = (props) => {
    const {
        color,
        size = '100%',
        icon,
        className = '',
        _onClick,
        _text,
    } = props
    return (
        <div onClick={_onClick} style={{ cursor: 'pointer' }}>
            <IcomoonReact
                iconSet={iconSet}
                color={color}
                size={size}
                icon={icon}
                className={className}
            >
                <div>{_text}</div>
            </IcomoonReact>
        </div>
    )
}

Icon.defaultProps = {
    _onClick: () => {},
}

export default Icon
