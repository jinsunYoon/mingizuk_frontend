import React from 'react'
import styled from 'styled-components'

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
	_width: '6rem',
	padding: '2rem',
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
`

export default ButtonOutlined
