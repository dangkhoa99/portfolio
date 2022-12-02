import React from 'react'
import { Stack, Typography, keyframes, useTheme, useMediaQuery } from '@mui/material'

const typing = (_matches: any) => keyframes`
0%, 90%,  100% { width: 1px; }
30%, 60% { width: ${_matches ? '250px' : '350px'}; }
`

const blinking = keyframes`
0%, 100% { opacity: 0; }
50% { opacity: 1; }
`

export const TypingText: React.FC<{ text: string }> = (props) => {
	const { text } = props

	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Stack
			direction={matches ? 'column' : 'row'}
			alignItems='center'
			justifyContent='center'
			flexWrap='wrap'
			spacing={1}
		>
			<Typography
				variant='h5'
				component='span'
				sx={{
					display: 'inline-block',
					color: 'primary.main',
					fontWeight: 'fontWeightMedium',
					pr: 1,
				}}
			>
				{`<code>`}
			</Typography>

			<Typography
				variant={matches ? 'h5' : 'h4'}
				component='span'
				sx={{
					display: 'inline-block',
					overflow: 'hidden',
					fontWeight: 'fontWeightMedium',
					whiteSpace: 'nowrap',
					animation: `${typing(matches)} 6s steps(19) infinite`,
					position: 'relative',
					'&::after': {
						content: '""',
						position: 'absolute',
						top: '0',
						right: '0',
						backgroundColor: 'text.primary',
						width: '2px',
						height: '100%',
						animation: `${blinking} 1s infinite`,
					},
				}}
			>
				{text}
			</Typography>

			<Typography
				variant='h5'
				component='span'
				sx={{
					display: 'inline-block',
					color: 'primary.main',
					fontWeight: 'fontWeightMedium',
					pl: 1,
				}}
			>
				{`</code>`}
			</Typography>
		</Stack>
	)
}
