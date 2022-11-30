import React from 'react'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import MyAvatar from '../../assets/images/avatar.jpg'
import { BlurImage } from '../../components/blurImage'
import { BorderText, TypingText } from '../../components/text'

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
						<Box
							sx={{
								width: '250px',
								height: '250px',
								border: `10px solid rgba(255, 255, 255, 0.08)`,
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
								textColor='#fff'
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
								borderColor='#fff'
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
