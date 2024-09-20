import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addUser } from './RegisterSlice';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const dispatch = useDispatch();

    const validate = () => {
        const errors = {};
        if (username.length > 10) {
            errors.username = 'Имя не должно быть более 10 символов';
        }
        if (password.length < 10 || password.length > 30) {
            errors.password = 'Пароль должен быть от 10 до 30 символов';
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

        const newUser = { username, password };
        try {
            const response = await axios.post('http://localhost:8000/user', newUser);
            dispatch(addUser(response.data));
            setUsername('');
            setPassword('');
            setErrors({});
            setServerError('');
        } catch (error) {
            setServerError('Error adding user. Please try again.');
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="LoginMain">
            <div className="UILogin">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="usernameInput"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                    <input
                        className="passwordInput"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                    <button type="submit">Register</button>
                    {serverError && <p className="error">{serverError}</p>}
                </form>
                <Link to="/login">Already have an account? Login here</Link>
            </div>
        </div>
    );
}
