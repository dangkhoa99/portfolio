import { configureStore } from '@reduxjs/toolkit'
import colorModeThemeSlice from './slices/colorModeThemeSlice'
import openMenuSlice from './slices/openMenuSlice'

export const store = configureStore({
	reducer: {
		colorModeTheme: colorModeThemeSlice,
		openMenu: openMenuSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
