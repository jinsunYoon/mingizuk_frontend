import React from 'react'
import styled from 'styled-components'
import Icon from '../components/icons/Icon'

const ButtonOutlined = (props) => {
    const {
        children,
        _width,
        _fontSize,
        _margin,
        _border,
        _color,
        _bradius,
        _onClick,
        _others,
        navIcon,
        _icon,
    } = props

    const styles = {
        _width,
        _fontSize,
        _margin,
        _border,
        _color,
        _bradius,
        _onClick,
        _others,
        _icon,
    }

    if (navIcon) {
        return (
            <React.Fragment>
                <NavIcon onClick={_onClick}>
                    <Icon icon={_icon} size={24} />
                </NavIcon>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>
                {children}
            </ElButton>
        </React.Fragment>
    )
}

ButtonOutlined.defaultProps = {
    children: '이건버튼',
    _icon: '',
    _width: '6rem',
    _padding: '1.5rem',
    _fontSize: '1rem',
    _margin: '0.5rem',
    _border: '1px solid lightgray',
    _color: 'gray',
    _bradius: '3px',
    _others: '',
    _onClick: () => {},
}

const ElButton = styled.button`
    width: ${(props) => props._width};
    font-size: ${(props) => props._fontSize};
    margin: ${(props) => props._margin};
    background-color: ${(props) => props._bgColor};
    color: ${(props) => props._color};
    border-radius: ${(props) => props._bradius};
    border: ${(props) => props._border};
    ${(props) => props._others};
    background: none;
    cursor: pointer;
    padding:${(props) => props._padding};
`

const NavIcon = styled.div`
    margin: 0px;
    padding: 0px;
    width: 1.5rem;
    height: 1.5rem;
    position: fixed;
    background: none;
    border: none;
    top: 0.6rem;
    left: 1rem;
    cursor: pointer;
`

export default ButtonOutlined
