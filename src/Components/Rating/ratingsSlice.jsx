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
    delRating: (state, action) => {
      const itemId = action.payload;
      console.log('Deleting rating with ID from Redux:', itemId); // Debugging log
      state.ratings = state.ratings.filter((item) => item.id !== itemId);
      console.log('Updated ratings after deletion:', state.ratings); // Debugging log
    },
    editRating: (state, action) => {
      debugger
      const { id, updatedRating } = action.payload;
      state.ratings = state.ratings.map((item) =>
        item.id === id ? { ...item, ...updatedRating } : item
      );
    }
    
  },
});

export const { addRating, setRatings, delRating, editRating } = ratingsSlice.actions;  
export default ratingsSlice.reducer;
