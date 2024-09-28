import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addRating } from './ratingsSlice';
import './addRating.css';

const AddRating = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [rDesc, setRDesc] = useState('');
  const [errors, setErrors] = useState({}); 
  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};
    if (name.length > 20) {
      errors.name = 'Имя не должно превышать 10 символов.';
    }
    if (score < 1 || score > 5) {
      errors.score = 'Оценка должна быть от 1 до 5.';
    }
    if (rDesc.length > 500) {
      errors.rDesc = 'Отзыв не должен превышать 500 символов.';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRating = { name, rDesc, score: parseInt(score) };
    try {
      const response = await axios.post('http://localhost:8080/review', newRating);
      dispatch(addRating(response.data));
      setName('');
      setScore('');
      setRDesc('');
      setErrors({});
    } catch (error) {
      console.error('Error adding rating:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder='Enter your name'
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <input 
          type="number" 
          value={score} 
          placeholder='Enter Score'
          onChange={(e) => setScore(e.target.value)} 
          max="5" min="1" 
        />
        {errors.score && <p className="error">{errors.score}</p>}
      </div>
      <div>
        <input 
          type="text" 
          value={rDesc} 
          placeholder='Enter your review'
          onChange={(e) => setRDesc(e.target.value)} 
        />
        {errors.rDesc && <p className="error">{errors.rDesc}</p>}
      </div>
      <button type="submit">Add Rating</button>
    </form>
  );
};

export default AddRating;
