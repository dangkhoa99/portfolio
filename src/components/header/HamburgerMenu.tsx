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
				width: '60px',
				height: '60px',
				cursor: 'pointer',
				p: 1.5,
				borderRadius: '50%',
				transition: '0.3s ease-in-out',
				'&:hover': {
					backgroundColor: 'rgba(255, 255, 255, 0.05)',
				},
			}}
			onClick={isOpen ? closeMenu : openMenu}
		>
			<Box
				component='div'
				className={isOpen ? 'open' : ''}
				sx={{
					height: '5px',
					width: '100%',
					backgroundColor: '#fff',
					display: 'block',
					borderRadius: '5px',
					transition: '0.3s ease',
					transform: 'translateY(6px)',
					'&.open': {
						transform: 'translateY(16px) rotateZ(-45deg)',
					},
				}}
			/>

			<Box
				component='div'
				className={isOpen ? 'open' : ''}
				sx={{
					height: '5px',
					width: '100%',
					backgroundColor: '#fff',
					display: 'block',
					borderRadius: '5px',
					transition: '0.3s ease',
					transform: 'translateY(10px)',
					'&.open': {
						opacity: '0',
					},
				}}
			/>

			<Box
				component='div'
				className={isOpen ? 'open' : ''}
				sx={{
					height: '5px',
					width: '100%',
					backgroundColor: '#fff',
					display: 'block',
					borderRadius: '5px',
					transition: '0.3s ease',
					transform: 'translateY(14px)',
					'&.open': {
						transform: 'translateY(6px) rotateZ(45deg)',
					},
				}}
			/>
		</Box>
	)
}
