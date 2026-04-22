import { createSlice } from '@reduxjs/toolkit'

export const about_projectSlice = createSlice({
    name: 'about_project',
    initialState: {
        isShown: false
    },
    reducers: {
        ShowOrHideAboutProject: (state, action) => {state.isShown = action.payload},
    }
})

export const {ShowOrHideAboutProject} = about_projectSlice.actions
export default about_projectSlice.reducer