import React from "react";
import AddRating from "./addRating";
import RatingList from "./ratingList";
import './addRating.css';
import useAuth from "../HOC/useAuth";

export default function RatingContainer(){
    useAuth()

    return(
        <div className="Ratings">
            <h1>Leave a review</h1>
            <AddRating />
            <RatingList/>
        </div>
    )
}