import React from 'react'
import { Avatar, Box } from '@mui/material'
import MyLogoLightTheme from '../../assets/images/logo/logo_lightTheme.jpg'
import MyLogoDarkTheme from '../../assets/images/logo/logo_darkTheme.jpg'
import { RootState } from '../../redux/store'
import { useSelector, shallowEqual } from 'react-redux'

const styleAvatarContainer = {
	width: '40px',
	height: '40px',
	position: 'relative',
	cursor: 'pointer',
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
}

export const Logo: React.FC<{}> = () => {
	const colorModeTheme = useSelector((state: RootState) => {
		return state.colorModeTheme.value
	}, shallowEqual)

	const openMenu = useSelector((state: RootState) => {
		return state.openMenu.value
	}, shallowEqual)

	return (
		<React.Fragment>
			{openMenu ? (
				<React.Fragment></React.Fragment>
			) : (
				<Box sx={styleAvatarContainer}>
					<Avatar
						sx={{ width: '100%', height: '100%' }}
						src={colorModeTheme === 'light' ? MyLogoLightTheme : MyLogoDarkTheme}
						alt='logo'
						variant='square'
					/>
				</Box>
			)}
		</React.Fragment>
	)
}
