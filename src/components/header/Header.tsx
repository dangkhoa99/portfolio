import * as React from 'react'
import { AppBar, Box, Toolbar, Container } from '@mui/material'
import { Menu } from './Menu'
import { Logo } from './Logo'
import { SwitchTheme } from './SwitchTheme'

export const Header: React.FC<{}> = () => {
	return (
		<AppBar position='fixed' color='transparent' sx={{ boxShadow: 'unset' }}>
			<Container maxWidth='xl' disableGutters sx={{ pl: '56px', pr: '56px' }}>
				<Toolbar variant='regular' disableGutters sx={{ gap: '24px' }}>
					<Box sx={{ flexGrow: 1 }}>
						<Logo />
					</Box>

					<SwitchTheme />

					<Menu />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
