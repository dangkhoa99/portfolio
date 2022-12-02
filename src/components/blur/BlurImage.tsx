import React from 'react'
import { Box } from '@mui/material'

export const BlurImage: React.FC<{
	width: string
	height: string
	blur: string
	top?: string
	left?: string
	right?: string
	bottom?: string
	transform?: string
}> = (props) => {
	const {
		width,
		height,
		blur,
		top = 'unset',
		left = 'unset',
		right = 'unset',
		bottom = 'unset',
		transform = 'unset',
	} = props

	return (
		<Box
			sx={{
				position: 'absolute',
				top: top,
				left: left,
				right: right,
				bottom: bottom,
				transform: transform,
				width: width,
				height: height,
				filter: `blur(${blur})`,
				backgroundColor: 'primary.main',
				borderRadius: '9999px',
			}}
		/>
	)
}
