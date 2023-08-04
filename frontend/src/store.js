import { configureStore } from '@reduxjs/toolkit'

import userReducer from './userReducerSlice';
import productReducer from './productReducer';

export default configureStore({
  reducer: {
  	users: userReducer,
    products: productReducer
  },
})