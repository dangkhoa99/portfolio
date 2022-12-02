import { createSlice } from '@reduxjs/toolkit'

export const setThemeInStorage = (_theme: string) => {
	localStorage.setItem('theme', _theme)
}

export const getThemeInStorage = () => {
	return localStorage.getItem('theme')
}

export interface ColorModeThemeState {
	value: string
}

const initialState: ColorModeThemeState = {
	value: getThemeInStorage() || 'dark',
}

export const colorModeThemeSlice = createSlice({
	name: 'colorModeTheme',
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			state.value = action.payload === 'light' ? 'dark' : 'light'
			setThemeInStorage(action.payload === 'light' ? 'dark' : 'light')
		},
	},
})

export const { changeTheme } = colorModeThemeSlice.actions

export default colorModeThemeSlice.reducer
