import React from 'react'
import { Container, CssBaseline, useMediaQuery, useTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { PageNotFound } from './screens/404'
import { About } from './screens/about'
import { Contact } from './screens/contact'
import { Home } from './screens/home'
import { Portfolio } from './screens/portfolio'
import { darkTheme, lightTheme } from './themes'
import { RootState } from './redux/store'
import { useSelector, shallowEqual } from 'react-redux'

const App = () => {
	const colorModeTheme = useSelector((state: RootState) => {
		return state.colorModeTheme.value
	}, shallowEqual)
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('sm'))
	return (
		<ThemeProvider theme={colorModeTheme === 'light' ? lightTheme : darkTheme}>
			<CssBaseline />
			<div className='App'>
				<Router>
					<Header />
					<Container maxWidth='xl' disableGutters sx={{ mt: matches ? '56px' : '64px' }}>
						<Routes>
							<Route path='*' element={<PageNotFound />} />
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/portfolio' element={<Portfolio />} />
							<Route path='/contact' element={<Contact />} />
						</Routes>
					</Container>
				</Router>
			</div>
		</ThemeProvider>
	)
}

export default App
