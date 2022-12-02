import React from 'react'
import { Box, SwipeableDrawer, List, Stack } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { BlurImage } from '../blur'
import { HamburgerMenu } from './HamburgerMenu'
import { PAGES } from '../../constants/constant'
import { MenuItem } from './MenuItem'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { handleOpenMenu, handleCloseMenu } from '../../redux/slices/openMenuSlice'

export const Menu = () => {
	const location = useLocation()

	const pathname = location.pathname

	const openMenu = useSelector((state: RootState) => {
		return state.openMenu.value
	}, shallowEqual)

	const dispatch = useDispatch()

	return (
		<React.Fragment>
			<HamburgerMenu />

			<SwipeableDrawer
				anchor='top'
				transitionDuration={500}
				open={openMenu}
				onClose={() => dispatch(handleCloseMenu())}
				onOpen={() => dispatch(handleOpenMenu())}
			>
				<Box
					sx={{
						width: '100%',
						height: '100vh',
						backgroundColor: 'background.default',
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<BlurImage width='60%' height='500px' blur='250px' top='-40%' right='-20%' />

					<Stack sx={{ height: '100%' }} justifyContent='center' alignItems='center'>
						<List disablePadding sx={{ width: '100%' }}>
							{PAGES.map((page) => (
								<MenuItem key={page} text={page} pathname={pathname} />
							))}
						</List>
					</Stack>
				</Box>
			</SwipeableDrawer>
		</React.Fragment>
	)
}
