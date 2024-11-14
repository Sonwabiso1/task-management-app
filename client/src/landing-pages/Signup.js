import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing/Signup.css';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: 'capaciti', // Default option
        password: '',
        confirmPass: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if passwords match
        if (formData.password !== formData.confirmPass) {
            alert('Passwords do not match');
            return;
        }

        // Send POST request to server
        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    organization: formData.organization,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('User registered successfully!');
                navigate('/home'); // Redirect to the home page on success
            } else {
                alert(`Registration failed: ${data.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration.');
        }
    };

    return (
        <div id="signupPage">
            <div id="signupBar">
                <form id="signupForm" onSubmit={handleSubmit}>
                    <h1>Sign up</h1>
                    <label htmlFor="name">Full name:</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="organization">Choose an organization:</label>
                    <select id="organization" value={formData.organization} onChange={handleChange}>
                        <option value="capaciti">Capaciti</option>
                    </select>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={formData.password} onChange={handleChange} required />

                    <label htmlFor="confirmPass">Confirm password:</label>
                    <input type="password" id="confirmPass" value={formData.confirmPass} onChange={handleChange} required />
                    
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}