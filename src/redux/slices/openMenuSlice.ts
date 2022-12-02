import { createSlice } from '@reduxjs/toolkit'

export const openMenuSlice = createSlice({
	name: 'openMenu',
	initialState: {
		value: false,
	},
	reducers: {
		handleOpenMenu: (state) => {
			state.value = true
		},
		handleCloseMenu: (state) => {
			state.value = false
		},
	},
})

export const { handleOpenMenu, handleCloseMenu } = openMenuSlice.actions

export default openMenuSlice.reducer
