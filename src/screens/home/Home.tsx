import React from 'react'
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { BlurImage } from '../../components/blur'
import { BorderText, TypingText } from '../../components/text'
import { HomeAvatar } from '../../components/avatar'

export const Home: React.FC<{}> = () => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('sm'))
	return (
		<Container
			maxWidth='xl'
			disableGutters
			sx={{
				height: `calc(100vh - ${matches ? '56px' : '64px'})`,
				position: 'relative',
			}}
		>
			<BlurImage
				width='100%'
				height='500px'
				blur='300px'
				top='-50%'
				left='50%'
				transform='translateX(-50%)'
			/>

			<Box
				sx={{
					width: '100%',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: `translate(-50%, -50%)`,
				}}
			>
				<Grid container spacing={2} direction='row' sx={{ textAlign: 'center' }}>
					<Grid item xs={12}>
						<Box sx={{ width: '100%', height: '100%' }}>
							<HomeAvatar />
						</Box>
					</Grid>

					<Grid item xs={12}>
						<Box>
							<Typography variant='h2' sx={{ letterSpacing: 10 }}>
								<BorderText
									text='Khoa'
									display='inline-block'
									fontSize={matches ? '48px' : '96px'}
									fontWeight='fontWeightRegular'
									fontFamily="'Bungee', cursive"
									borderWidth='6px'
									borderColor='primary.main'
									mr={2}
								/>
								<BorderText
									text='Nguyen'
									display='inline-block'
									fontSize={matches ? '48px' : '96px'}
									fontWeight='fontWeightRegular'
									fontFamily="'Bungee', cursive"
									borderWidth='6px'
									textColor='primary.main'
								/>
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={12}>
						<TypingText text="I'm a Web Developer" />
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}
