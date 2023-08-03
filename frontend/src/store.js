import { configureStore } from '@reduxjs/toolkit'

import userReducer from './userReducerSlice';

export default configureStore({
  reducer: {
  	users: userReducer,
  },
})