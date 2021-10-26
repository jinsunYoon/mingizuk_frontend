import React from 'react'
import styled from 'styled-components'

const Text = (props) => {
	const {
		children,
		_fontSize,
		_color,
		_fontWeight,
		_align,
		_margin,
		_padding,
		_others,
	} = props

	const styles = {
		_fontSize,
		_color,
		_fontWeight,
		_align,
		_margin,
		_padding,
		_others,
	}

	return (
		<React.Fragment>
			<ElText {...styles}>{children}</ElText>
		</React.Fragment>
	)
}

Text.defaultProps = {
	children: '이건텍스트',
	_fontSize: '14px',
	_color: 'black',
	_fontWeight: '400',
	_align: 'center',
	_margin: '1rem',
	_padding: '1rem',
	others: '',
}

const ElText = styled.div`
	font-size: ${(props) => props._fontSize};
	color: ${(props) => props._color};
	font-weight: ${(props) => props._fontWeight};
	text-align: ${(props) => props._align};
	margin: ${(props) => props._margin};
	padding: ${(props) => props._padding};
	${(props) => props.others};
`

export default Text
