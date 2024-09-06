import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav(){
    return(
        <nav>
            <Link to='/'><div className="logo-nav"></div></Link>
            
            <div className="nav-links">
                <Link to='/stay-connected'>Stay Connected</Link>
                <a className="link-nav" href="#">Education</a>
                <a className="link-nav" href="#">Community</a>
                <a className="link-nav" href="#">About Us</a>
                <Link to='/login'><button className="nav-button">Log In</button></Link>
            </div>
        </nav>
    )
}