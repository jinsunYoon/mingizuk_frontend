import React from 'react'
import styled from 'styled-components'

const Img = (props) => {
    const { _width, _height, _src, _bradius, _others } = props

    const styles = {
        _width,
        _height,
        _bradius,
        _others,
    }

    return (
        <>
            <ImgEl {...styles} src={_src} />
        </>
    )
}

Img.defaultProps = {
    _width: '5rem',
    _height: '5rem',
    _src: 'http://via.placeholder.com/400x300',
    _bradius: '1rem',
    _others: false,
}

const ImgEl = styled.img`
    width: ${(props) => props._width};
    height: ${(props) => props._height};
    background-image: url(${(props) => props._src});
    background-size: cover;
    ${(props) => (props._bradius ? `border-radius:${props._bradius}` : '')};
    ${(props) => (props._others ? props._others : '')};
`

export default Img
