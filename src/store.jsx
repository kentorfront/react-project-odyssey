import { configureStore } from '@reduxjs/toolkit';
import ratingsReducer from './Components/Rating/ratingsSlice'; 

export const store = configureStore({
  reducer: {
    ratings: ratingsReducer, 
  },
});