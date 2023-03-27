import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/slice'
import userReducer from './userForm/slice'


const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
})

export default store
