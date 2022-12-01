import React from 'react'
import { Stack, Typography, keyframes } from '@mui/material'

const typing = keyframes`
0%, 90%,  100% { width: 0; }
30%, 60% { width: 355px; }
`

const blinking = keyframes`
0%, 75% { opacity: 1; }
76%, 100% { opacity: 0; }
`

export const TypingText: React.FC<{ text: string }> = (props) => {
	const { text } = props
	return (
		<Stack direction='row' alignItems='center' justifyContent='center' flexWrap='wrap'>
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
				variant='h4'
				component='span'
				sx={{
					display: 'inline-block',
					overflow: 'hidden',
					fontWeight: 'fontWeightMedium',
					whiteSpace: 'nowrap',
					animation: `${typing} 8s steps(19) infinite`,
					position: 'relative',
					'&::after': {
						content: '""',
						position: 'absolute',
						top: '0',
						right: '0',
						backgroundColor: 'text.primary',
						width: '2px',
						height: '100%',
						animation: `${blinking} 1s steps(3) infinite`,
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
