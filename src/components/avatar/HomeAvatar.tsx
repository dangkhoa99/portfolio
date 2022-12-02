import React from 'react'
import { Avatar, Box } from '@mui/material'
import MyAvatar from '../../assets/images/avatar.jpg'

export const HomeAvatar: React.FC<{}> = () => {
	return (
		<Box
			sx={{
				width: '250px',
				height: '250px',
				border: `10px solid rgba(255, 255, 255, 0.08)`,
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
