import * as React from 'react'
import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { Menu } from './Menu'
import { Logo } from './Logo'
import { SwitchTheme } from './SwitchTheme'

export const Header: React.FC<{}> = () => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<AppBar color='transparent' sx={{ boxShadow: 'unset' }}>
			<Toolbar
				variant='regular'
				disableGutters
				sx={{
					pl: matches ? '16px' : '56px',
					pr: matches ? '16px' : '56px',
					gap: '24px',
				}}
			>
				<Box sx={{ flexGrow: 1 }}>
					<Logo />
				</Box>

				<SwitchTheme />

				<Menu />
			</Toolbar>
		</AppBar>
	)
}
