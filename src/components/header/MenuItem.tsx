import React from 'react'
import { Box, ListItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { BorderText } from '../text'
import { useDispatch } from 'react-redux'
import { handleCloseMenu } from '../../redux/slices/openMenuSlice'

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

export const MenuItem: React.FC<{ text: string; pathname: any }> = (props) => {
	const { text, pathname } = props

	const link = text.toLowerCase() === 'home' ? '' : text.toLowerCase()

	const selected = pathname.replace('/', '')

	const dispatch = useDispatch()

	return (
		<ListItem sx={{ justifyContent: 'center' }} disableGutters>
			<Box
				component={Link}
				to={`/${link}`}
				onClick={() => dispatch(handleCloseMenu())}
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
