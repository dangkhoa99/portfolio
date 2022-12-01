import { Box } from '@mui/material'
import React from 'react'

export const HamburgerMenu: React.FC<{
	isOpen: boolean
	closeMenu: () => void
	openMenu: () => void
}> = (props) => {
	const { isOpen, closeMenu, openMenu } = props

	return (
		<Box
			sx={{
				width: '40px',
				height: '40px',
				cursor: 'pointer',
				p: 1,
				borderRadius: '50%',
				transition: '0.3s ease-in-out',
				'&:hover': {
					backgroundColor: 'action.hover',
				},
			}}
			onClick={isOpen ? closeMenu : openMenu}
		>
			<Box
				component='div'
				className={isOpen ? 'open' : ''}
				sx={{
					height: '4px',
					width: '100%',
					backgroundColor: 'text.primary',
					display: 'block',
					borderRadius: '5px',
					transition: '0.3s ease',
					transform: 'translateY(3px)',
					'&.open': {
						transform: 'translateY(10px) rotateZ(-45deg)',
					},
				}}
			/>

			<Box
				component='div'
				className={isOpen ? 'open' : ''}
				sx={{
					height: '4px',
					width: '100%',
					backgroundColor: 'text.primary',
					display: 'block',
					borderRadius: '5px',
					transition: '0.3s ease',
					transform: 'translateY(6px)',
					'&.open': {
						opacity: '0',
					},
				}}
			/>

			<Box
				component='div'
				className={isOpen ? 'open' : ''}
				sx={{
					height: '4px',
					width: '100%',
					backgroundColor: 'text.primary',
					display: 'block',
					borderRadius: '5px',
					transition: '0.3s ease',
					transform: 'translateY(9px)',
					'&.open': {
						transform: 'translateY(2px) rotateZ(45deg)',
					},
				}}
			/>
		</Box>
	)
}
