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
import Theme from './themes'

const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<CssBaseline />
			<div className='App'>
				<Container maxWidth='xl' disableGutters>
					<Router>
						<Header />
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
