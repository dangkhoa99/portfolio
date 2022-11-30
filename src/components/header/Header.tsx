import * as React from 'react'
import MyLogo from '../../assets/images/logo/logo.jpg'
import { AppBar, Box, Toolbar, Container, Avatar } from '@mui/material'
import { Menu } from './Menu'

export const Header = () => {
	return (
		<AppBar position='fixed' color='transparent' sx={{ boxShadow: 'unset' }}>
			<Container maxWidth='xl'>
				<Toolbar variant='regular'>
					<Box sx={{ flexGrow: 1 }}>
						<Box
							sx={{
								width: '80px',
								height: '80px',
								position: 'relative',
								cursor: 'pointer',
								'&::before': {
									content: '""',
									position: 'absolute',
									top: '5px',
									right: '5px',
									width: '25%',
									height: '25%',
									borderTop: '4px dotted #6947ef',
									borderRight: '4px dotted #6947ef',
									opacity: '0.6',
									transition: '0.25s ease-in-out',
								},
								'&::after': {
									content: '""',
									position: 'absolute',
									bottom: '5px',
									left: '5px',
									width: '25%',
									height: '25%',
									borderBottom: '4px dotted #6947ef',
									borderLeft: '4px dotted #6947ef',
									opacity: '0.6',
									transition: '0.25s ease-in-out',
								},
								'&:hover::before': {
									transform: 'translate(calc(50% + 5px), calc(100% + 5px)) rotate(405deg)',
									borderTopStyle: 'solid',
									borderRightStyle: 'solid',
									opacity: '1',
								},
								'&:hover::after': {
									transform: 'translate(calc(-50% - 5px), calc(-100% - 5px)) rotate(405deg)',
									borderBottomStyle: 'solid',
									borderLeftStyle: 'solid',
									opacity: '1',
								},
							}}
						>
							<Avatar
								sx={{ width: '100%', height: '100%' }}
								src={MyLogo}
								alt='logo'
								variant='square'
							/>
						</Box>
					</Box>

					<Menu />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
