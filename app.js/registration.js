import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!username || !password || password !== confirmPassword) {
      setError('Invalid input or passwords do not match');
      return;
    }

    try {
      // Make a request to your backend for user registration
      const response = await axios.post('/api/register', { username, password });
      
      // Check for success
      if (response.data.success) {
        // Redirect to a success page or do something else
        console.log('Registration successful!');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('Error during registration. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
      <button type="submit">Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Registration;
