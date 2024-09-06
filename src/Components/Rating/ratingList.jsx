// src/features/ratings/RatingList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setRatings } from './ratingsSlice';

const RatingList = () => {
  const ratings = useSelector((state) => state.ratings.ratings);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/review'); 
        dispatch(setRatings(response.data));
      } catch (error) {
        console.error('Error fetching ratings:', error);
      }
    };
    fetchRatings();
  }, [dispatch]);

  return (
    <div>
      <h2>User Ratings:</h2>
      <ul>
        {ratings.map((rating, index) => (
          <li key={index}>
            {rating.name}: {rating.score}/5
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingList;
