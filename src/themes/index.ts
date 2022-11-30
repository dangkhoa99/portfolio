import { createTheme } from '@mui/material/styles'

const Theme = createTheme({
	palette: {
		primary: {
			main: '#6947ef',
			contrastText: '#fff',
		},
		secondary: {
			main: '#ef476f',
			contrastText: '#fff',
		},
		text: {
			primary: '#fff',
		},
		divider: 'rgba(255, 255, 255, 0.05)',
		background: {
			default: '#111',
		},
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: "'Poppins', san-serif",
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
	mixins: {
		toolbar: {
			minHeight: 88,
		},
	},
	zIndex: {
		appBar: 1200,
		drawer: 1100,
	},
})

export default Theme
