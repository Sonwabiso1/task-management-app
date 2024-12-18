import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('userId', data.user.id); // Save user ID in local storage

      // Navigate to user-specific page
      navigate(`/logged-in-home/${data.user.id}`);
    } else {
      setError('Invalid email or password');
    }
  } catch (error) {
    setError('Failed to login. Please try again.');
  }
};


  return (
    <div className="loginPage">
      <div className="loginBar">
        <h1>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form className="loginForm" onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;