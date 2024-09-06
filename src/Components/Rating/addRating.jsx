// src/features/ratings/AddRating.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addRating } from './ratingsSlice';

const AddRating = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && score) {
      const newRating = { name, score: parseInt(score) };
      try {
        const response = await axios.post('http://localhost:5000/review', newRating); 
        dispatch(addRating(response.data));
        setName('');
        setScore('');
      } catch (error) {
        console.error('Error adding rating:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Score:</label>
        <input 
          type="number" 
          value={score} 
          onChange={(e) => setScore(e.target.value)} 
          max="5" min="1" 
        />
      </div>
      <button type="submit">Add Rating</button>
    </form>
  );
};

export default AddRating;
