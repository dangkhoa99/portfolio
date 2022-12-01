import React from 'react'
import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { PageNotFound } from './screens/404'
import { About } from './screens/about'
import { Contact } from './screens/contact'
import { Home } from './screens/home'
import { Portfolio } from './screens/portfolio'
import { darkTheme, lightTheme } from './themes'

const App = () => {
	const [isDarkTheme, setIsDarkTheme] = React.useState(true)

	const setThemeInStorage = (_theme: string) => {
		localStorage.setItem('theme', _theme)
	}

	const getThemeInStorage = () => {
		return localStorage.getItem('theme')
	}

	React.useEffect(() => {
		const theme = getThemeInStorage()

		if (!theme) {
			setThemeInStorage('dark')
			setIsDarkTheme(false)
		} else {
			setIsDarkTheme(theme === 'dark' ? true : false)
		}

		return () => {}
	}, [])

	const changeTheme = () => {
		setThemeInStorage(!isDarkTheme ? 'dark' : 'light')
		setIsDarkTheme(!isDarkTheme)
	}

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<CssBaseline />
			<div className='App'>
				<Container maxWidth='xl' disableGutters>
					<Router>
						<Header isDarkTheme={isDarkTheme} changeTheme={changeTheme} />

						<Routes>
							<Route path='*' element={<PageNotFound />} />
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/portfolio' element={<Portfolio />} />
							<Route path='/contact' element={<Contact />} />
						</Routes>
					</Router>
				</Container>
			</div>
		</ThemeProvider>
	)
}

export default App
