import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ratings: [],
};

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    addRating: (state, action) => {
      state.ratings.push(action.payload);
    },
    setRatings: (state, action) => {
      state.ratings = action.payload;
    },
  },
});

export const { addRating, setRatings } = ratingsSlice.actions;  
export default ratingsSlice.reducer;
