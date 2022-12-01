import { createTheme } from '@mui/material/styles'

const renderTheme = (mode: any) => {
	return createTheme({
		palette: {
			mode: mode,
			primary: {
				main: '#0095ff',
			},
			secondary: {
				main: '#fe6b02',
			},
		},
		typography: {
			fontFamily: "'Poppins', san-serif",
		},
		mixins: {
			toolbar: {
				minHeight: '64px',
			},
		},
		zIndex: {
			appBar: 1200,
			drawer: 1100,
		},
	})
}

// const Theme = createTheme({
// 	palette: {
// 		mode: 'light',
// 		primary: {
// 			main: '#6947ef',
// 			contrastText: '#fff',
// 		},
// 		secondary: {
// 			main: '#ef476f',
// 			contrastText: '#fff',
// 		},
// 		text: {
// 			primary: '#fff',
// 		},
// 		divider: 'rgba(255, 255, 255, 0.05)',
// 		background: {
// 			default: '#111',
// 		},
// 	},
// 	typography: {
// 		htmlFontSize: 16,
// 		fontFamily: "'Poppins', san-serif",
// 		fontSize: 14,
// 		fontWeightLight: 300,
// 		fontWeightRegular: 400,
// 		fontWeightMedium: 500,
// 		fontWeightBold: 700,
// 	},
// 	mixins: {
// 		toolbar: {
// 			minHeight: 88,
// 		},
// 	},
// 	zIndex: {
// 		appBar: 1200,
// 		drawer: 1100,
// 	},
// })

export const lightTheme = renderTheme('light')
export const darkTheme = renderTheme('dark')
