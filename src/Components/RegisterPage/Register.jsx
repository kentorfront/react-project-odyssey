import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {

    return (
        <div className="LoginMain">
            <div className="UILogin">
                <h1>Register</h1>
                <div className="inputs">
                    <input className="usernameInput" placeholder="Enter username" />
                    <input className="passwordInput" placeholder="Enter password" />
                    <input className="emailInput" placeholder="Enter email" />
                </div>
                <button className="submitButton">Register</button>
            </div>
            <div className="reg">
                Already have account? <Link to='/login'>Login</Link>  
            </div>
        </div>
    )
}

