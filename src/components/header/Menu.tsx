import React from 'react'
import { Box, SwipeableDrawer, List, ListItem, Stack } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { BlurImage } from '../blurImage'
import { BorderText } from '../text'
import { HamburgerMenu } from './HamburgerMenu'

const PAGES = ['Home', 'About', 'Portfolio', 'Contact']

const styleLink = {
	'&::before': {
		content: '""',
		position: 'absolute',
		top: '50%',
		left: '0',
		transform: 'translateY(50%)',
		height: '1px',
		width: '0%',
		opacity: '0',
		backgroundColor: 'primary.main',
		transition: '0.5s ease-in-out',
	},
	'&:hover::before, &.active:hover::before': {
		width: '35%',
		opacity: '1',
	},
	'&.active::before': {
		width: '20%',
		opacity: '1',
	},
	'&.active > p::before': {
		WebkitTextStrokeWidth: '5px',
	},
	'&.active > p:hover::before': {
		WebkitTextStrokeWidth: '5px',
		transform: 'translateX(-3px)',
	},
}

const MenuItem: React.FC<{ text: string; onClick: () => void; pathname: any }> = (props) => {
	const { text, onClick, pathname } = props
	const link = text.toLowerCase() === 'home' ? '' : text.toLowerCase()
	const selected = pathname.replace('/', '')

	return (
		<ListItem sx={{ justifyContent: 'center' }} disableGutters>
			<Box
				component={Link}
				to={`/${link}`}
				onClick={onClick}
				sx={styleLink}
				className={selected === link ? 'active' : ''}
			>
				<BorderText
					text={text}
					fontSize='60px'
					fontWeight='fontWeightBold'
					borderWidth='1px'
					borderColor='primary.main'
					transition='0.3s ease-in-out'
					hoverBeforeBorderWidth='5px'
					hoverBeforeTransform='translateX(-3px)'
				/>
			</Box>
		</ListItem>
	)
}

export const Menu = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const location = useLocation()
	const pathname = location.pathname

	const openMenu = () => {
		setIsOpen(true)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<React.Fragment>
			<HamburgerMenu isOpen={isOpen} closeMenu={closeMenu} openMenu={openMenu} />

			<SwipeableDrawer anchor='top' open={isOpen} onClose={closeMenu} onOpen={openMenu}>
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
							{PAGES.map((text) => (
								<MenuItem key={text} text={text} onClick={closeMenu} pathname={pathname} />
							))}
						</List>
					</Stack>
				</Box>
			</SwipeableDrawer>
		</React.Fragment>
	)
}
