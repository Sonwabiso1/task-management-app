import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing/Signup.css';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        teamName: '', // Team name field remains
        organization: 'capaciti', // Default value
        password: '',
        confirmPass: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPass) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert('User registered successfully! You may login.');
                navigate('/login');
            } else {
                setError(`Registration failed: ${data.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred during registration.');
        }
    };

    return (
        <div id="signupPage">
            <div id="signupBar">
                <form id="signupForm" onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                        {/* <label htmlFor="teamName">Team Name:</label>
                        <input
                            type="text"
                            id="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            required
                        /> */}

                    <label htmlFor="organization">Organization:</label>
                    <select
                        id="organization"
                        value={formData.organization}
                        onChange={handleChange}
                    >
                        <option value="capaciti">Capaciti</option>
                    </select>

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="confirmPass">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPass"
                        value={formData.confirmPass}
                        onChange={handleChange}
                        required
                    />
                    
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}