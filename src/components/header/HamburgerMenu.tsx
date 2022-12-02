import React from 'react'
import { Box } from '@mui/material'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { handleOpenMenu, handleCloseMenu } from '../../redux/slices/openMenuSlice'

export const HamburgerMenu: React.FC<{}> = () => {
	const openMenu = useSelector((state: RootState) => {
		return state.openMenu.value
	}, shallowEqual)

	const dispatch = useDispatch()

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
			onClick={() => {
				openMenu ? dispatch(handleCloseMenu()) : dispatch(handleOpenMenu())
			}}
		>
			<Box
				component='div'
				className={openMenu ? 'open' : ''}
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
				className={openMenu ? 'open' : ''}
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
				className={openMenu ? 'open' : ''}
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
