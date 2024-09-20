import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setRatings, delRating, editRating } from './ratingsSlice';
import Preloader from '../Preloader/Preloder';
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";



const RatingList = (props) => {
  const [validatedRatings, setValidatedRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);

  const [valueRDesc, setValueRDesc] = useState("");
  const [valueScore, setValueScore] = useState(1);
  

  const [currentEditId, setCurrentEditId] = useState(null); 

  const ratings = useSelector((state) => state.ratings.ratings);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/review');
        dispatch(setRatings(response.data));
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching ratings:', error);
        setLoading(false);
      }
    };
    fetchRatings();
  }, [dispatch]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/review/${id}`)
      .then((response) => {
        dispatch(delRating(id));
      })
      .catch((error) => {
        console.error('Error deleting rating:', error);
      });
  };

  const handleEdit = (rating) => {
    setEdit(true);
    setCurrentEditId(rating.id); 
    setValueRDesc(rating.rDesc);
    setValueScore(rating.score);
  };

  const handleSubmitEdit = (id) => {
    const updatedRating = {
      rDesc: valueRDesc,
      score: valueScore,
    };

    axios.put(`http://localhost:5000/review/${id}`, updatedRating)
      .then((response) => {
        // Dispatch the editRating action with the id and updated rating values
        dispatch(editRating({ id, updatedRating }));

        // Optionally, exit edit mode or show success message
        setEdit(false);
      })
      .catch((error) => {
        console.error('Error updating rating:', error);
      }); 

    setEdit(false);
    setCurrentEditId(null);
    // You might need to dispatch an action to update the Redux store after editing
  };

  useEffect(() => {
    const validateRatings = () => {
      const validRatings = ratings.map((rating) => {
        const { name, rDesc } = rating;
        let isValid = true;

        if (name.length > 20) {
          isValid = false;
        } else if (rDesc.length > 500) {
          isValid = false;
        }

        return isValid
          ? { ...rating }
          : { ...rating, name: 'Неверное имя', rDesc: 'Неверный отзыв' };
      });
      setValidatedRatings(validRatings);
    };

    validateRatings();
  }, [ratings]);

  const renderStars = (score) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= score ? 'filled-star' : 'empty-star'}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  if (loading) {
    return <Preloader/>
  }

  return (
    <div>
      {!edit ? (
        <>
          <h2>Все отзывы</h2>
          <ul>
            {validatedRatings.length > 0 ? (
              validatedRatings.map((rating) => (
                <li key={rating.id}>
                  <div className='upCard'>
                    <div className='name'>{rating.name}</div>
                    <div className='stars'>{renderStars(rating.score)}</div>
                    <button className='delButton' onClick={() => handleDelete(rating.id)}>
                      <TiDelete />
                    </button>
                    <button className='editButton' onClick={() => handleEdit(rating)}>
                      <MdEdit />
                    </button>
                  </div>
                  <div className='downCard'>
                    <div className='allReview'>{rating.rDesc}</div>
                  </div>
                </li>
              ))
            ) : (
              <p>Отзывы отсутствуют</p>
            )}
          </ul>
        </>
      ) : (
        <>
          <div className='editInput'>
            <input
              className='review-rDesk'
              placeholder='Edit review description'
              type='text'
              value={valueRDesc}
              onChange={(e) => setValueRDesc(e.target.value)}
            />

            <input
              className='review-stars'
              placeholder='Edit review score'
              type='number'
              max="5"
              min="1"
              value={valueScore}
              onChange={(e) => setValueScore(e.target.value)}
            />
          </div>
          <button className='handleEdit' type='submit' onClick={() => handleSubmitEdit(currentEditId)}>
            Save
          </button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default RatingList;
