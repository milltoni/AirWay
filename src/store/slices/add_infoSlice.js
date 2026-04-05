import { createSlice } from '@reduxjs/toolkit'

export const add_infoSlice = createSlice({
    name: 'add_info',
    initialState: {
        isShown: false
    },
    reducers: {
        ShowOrHideAddInfo: (state, action) => {state.isShown = action.payload},
    }
})

export const {ShowOrHideAddInfo} = add_infoSlice.actions
export default add_infoSlice.reducer