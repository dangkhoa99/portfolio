import React from 'react'
import { IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { changeTheme } from '../../redux/slices/colorModeThemeSlice'

export const SwitchTheme: React.FC<{}> = () => {
	const colorModeTheme = useSelector((state: RootState) => {
		return state.colorModeTheme.value
	}, shallowEqual)

	const openMenu = useSelector((state: RootState) => {
		return state.openMenu.value
	}, shallowEqual)

	const dispatch = useDispatch()

	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<React.Fragment>
			{openMenu ? (
				<React.Fragment></React.Fragment>
			) : (
				<Tooltip title={colorModeTheme === 'light' ? 'Dark' : 'Light'} placement='bottom'>
					<IconButton
						onClick={() => dispatch(changeTheme(colorModeTheme))}
						sx={{
							color: 'text.primary',
							position: 'relative',
							width: matches ? '32px' : '40px',
							height: matches ? '32px' : '40px',
							p: matches ? '4px' : '8px',
						}}
					>
						<DarkModeIcon
							className={colorModeTheme === 'light' ? 'animate-dark' : ''}
							sx={{
								position: 'absolute',
								opacity: '0',
								transform: 'translateY(20%) rotateZ(50deg)',
								transition: 'all 0.5s ease-in-out',
								'&.animate-dark': {
									opacity: '1',
									transform: 'translateY(0%) rotateZ(0deg)',
								},
							}}
						/>

						<LightModeIcon
							className={colorModeTheme === 'light' ? 'animate-light' : ''}
							sx={{
								position: 'absolute',
								opacity: '1',
								transform: 'translateY(0) rotateZ(0deg)',
								transition: 'all 0.5s ease-in-out',
								'&.animate-light': {
									opacity: '0',
									transform: 'translateY(20%) rotateZ(100deg)',
								},
							}}
						/>
					</IconButton>
				</Tooltip>
			)}
		</React.Fragment>
	)
}
