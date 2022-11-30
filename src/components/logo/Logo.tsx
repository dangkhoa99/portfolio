import React from 'react'
import { Avatar, Box } from '@mui/material'
import MyLogo from '../../assets/images/logo/logo.jpg'

export const Logo = () => {
	return (
		<Box sx={{ height: '80px', width: '80px' }}>
			<Avatar sx={{ width: '100%', height: '100%' }} src={MyLogo} alt='Logo' variant='square' />
		</Box>
	)
}
