import React from 'react'
import { Avatar, Box } from '@mui/material'
import MyLogo from '../../assets/images/logo/logo.jpg'

const styleAvatarContainer = (isDarkTheme: boolean) => ({
	width: '40px',
	height: '40px',
	position: 'relative',
	cursor: 'pointer',
	backgroundColor: isDarkTheme ? 'transparent' : '#000',
	borderRadius: isDarkTheme ? '0' : '10px',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: '-5px',
		right: '-5px',
		width: '25%',
		height: '25%',
		borderTop: '4px dotted #fff',
		borderRight: '4px dotted #fff',
		borderColor: 'primary.main',
		opacity: '0.6',
		transition: '0.25s ease-in-out',
		zIndex: '1',
	},
	'&::after': {
		content: '""',
		position: 'absolute',
		bottom: '-5px',
		left: '-5px',
		width: '25%',
		height: '25%',
		borderBottom: '4px dotted #fff',
		borderLeft: '4px dotted #fff',
		borderColor: 'primary.main',
		opacity: '0.6',
		transition: '0.25s ease-in-out',
		zIndex: '1',
	},
	'&:hover::before': {
		width: '50%',
		height: '50%',
		transform: 'translate(calc(50% + 5px), calc(50% + 5px)) rotate(405deg)',
		borderTopStyle: 'solid',
		borderRightStyle: 'solid',
		opacity: '1',
	},
	'&:hover::after': {
		width: '50%',
		height: '50%',
		transform: 'translate(calc(-50% - 5px), calc(-50% - 5px)) rotate(405deg)',
		borderBottomStyle: 'solid',
		borderLeftStyle: 'solid',
		opacity: '1',
	},
})

export const Logo: React.FC<{ isDarkTheme: boolean }> = (props) => {
	const { isDarkTheme } = props
	return (
		<Box sx={styleAvatarContainer(isDarkTheme)}>
			<Avatar sx={{ width: '100%', height: '100%' }} src={MyLogo} alt='logo' variant='square' />
		</Box>
	)
}
