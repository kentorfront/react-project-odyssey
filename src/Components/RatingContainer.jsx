import React from "react";
import AddRating from "./Rating/addRating";
import RatingList from "./Rating/ratingList";
import './Rating/addRating.css'

export default function RatingContainer(){
    return(
        <div className="Ratings">
            <h1>Leave a review</h1>
            <AddRating />
            <RatingList/>
        </div>
    )
}