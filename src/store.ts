import { configureStore } from '@reduxjs/toolkit'
import countactusReducer from '@/features/contactus/contactusSlicer'
export default configureStore({
  reducer: {
    countactus: countactusReducer
  },
})