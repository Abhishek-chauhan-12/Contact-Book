import { configureStore } from '@reduxjs/toolkit'
import Formreducer from '../Redux/FormReducer'
const store = configureStore({
  reducer: {
    user: Formreducer,
  },
})

export default store