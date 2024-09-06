import React from "react";
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound(){
    return(
        <div className="NotFound">
            <span>Error 404</span><br /> Page Not Found
            <Link to='/'>Go Back</Link>
        </div>
    )
}