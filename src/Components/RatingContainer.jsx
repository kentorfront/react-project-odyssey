import React from "react";
import AddRating from "./Rating/addRating";
import RatingList from "./Rating/ratingList";

export default function RatingContainer(){
    return(
        <div className="Ratings">
            <h1>View all rating</h1>
            <AddRating />
            <RatingList />
        </div>
    )
}