import React from 'react'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export const SwitchTheme: React.FC<{ isDarkTheme: boolean; changeTheme: () => void }> = (props) => {
	const { isDarkTheme, changeTheme } = props
	return (
		<IconButton onClick={changeTheme} sx={{ color: 'text.primary' }}>
			{isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	)
}
