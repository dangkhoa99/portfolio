import React from 'react'
import { Avatar, Box, useMediaQuery, useTheme } from '@mui/material'
import MyAvatar from '../../assets/images/avatar.jpg'

export const HomeAvatar: React.FC<{}> = () => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('sm'))
	return (
		<Box
			sx={{
				width: matches ? '240px' : '320px',
				height: matches ? '240px' : '320px',
				border: `${matches ? '5px' : '10px'} solid rgba(255, 255, 255, 0.08)`,
				borderColor: 'action.hover',
				borderRadius: '50%',
				overflow: 'hidden',
				margin: 'auto',
			}}
		>
			<Avatar
				src={MyAvatar}
				alt='Khoa Nguyen'
				sx={{
					width: '100%',
					height: '100%',
					transition: '0.3s ease-in-out',
					cursor: 'pointer',
					'&:hover': {
						transform: 'scale(1.1)',
					},
				}}
			/>
		</Box>
	)
}
