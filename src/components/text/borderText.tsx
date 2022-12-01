import React from 'react'
import { Typography } from '@mui/material'

type BORDER_TEXT = {
	text: string
	display?: string
	fontSize?: string
	fontWeight?: string
	fontFamily?: string
	borderWidth?: string
	textColor?: string
	borderColor?: string
	mr?: any
	transition?: string
	hoverBeforeBorderWidth?: string
	hoverBeforeTransform?: string
}

export const BorderText: React.FC<BORDER_TEXT> = (props) => {
	const {
		text,
		display = 'inline-block',
		fontSize = '6rem',
		fontWeight = 'fontWeightRegular',
		fontFamily = "'Poppins', san-serif",
		borderWidth = '10px',
		textColor = 'text.primary',
		borderColor = 'text.primary',
		mr = 'unset',
		transition = 'unset',
		hoverBeforeBorderWidth = borderWidth,
		hoverBeforeTransform = 'unset',
	} = props

	return (
		<Typography
			component='p'
			sx={{
				display: display,
				fontSize: fontSize,
				fontWeight: fontWeight,
				fontFamily: fontFamily,
				color: textColor,
				position: 'relative',
				mr: mr,
				zIndex: '1',
				'&::before': {
					content: `'${text}'`,
					position: 'absolute',
					top: '0',
					left: '0',
					color: borderColor,
					WebkitTextFillColor: 'transparent',
					WebkitTextStrokeWidth: borderWidth,
					zIndex: '-1',
					transition: transition,
				},
				'&:hover::before': {
					WebkitTextStrokeWidth: hoverBeforeBorderWidth,
					transform: hoverBeforeTransform,
				},
			}}
		>
			{text}
		</Typography>
	)
}
