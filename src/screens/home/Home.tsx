import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { BlurImage } from '../../components/blur'
import { BorderText, TypingText } from '../../components/text'
import { HomeAvatar } from '../../components/avatar'

export const Home: React.FC<{}> = () => {
	return (
		<Container sx={{ height: 'auto', mt: '88px', overflow: 'hidden' }} disableGutters>
			<BlurImage
				width='80%'
				height='500px'
				blur='200px'
				top='-60%'
				left='50%'
				transform='translateX(-50%)'
			/>

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
								fontSize='6rem'
								fontWeight='fontWeightRegular'
								fontFamily="'Bungee', cursive"
								borderWidth='6px'
								borderColor='primary.main'
								mr={2}
							/>
							<BorderText
								text='Nguyen'
								display='inline-block'
								fontSize='6rem'
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
		</Container>
	)
}
