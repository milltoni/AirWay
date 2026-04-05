import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './slices/modeSlice'
import popupReducer from './slices/popupSlice'
import add_infoReducer from './slices/add_infoSlice'

export default configureStore({
  reducer: {
    mode: modeReducer,
    popup: popupReducer,
    add_info: add_infoReducer
  },
})