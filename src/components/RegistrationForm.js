// src/components/RegistrationForm.js
import React, { useState } from 'react';
import './styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = () => {
    // Add your registration logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />

      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationForm;
// src/components/RegistrationForm.js
import React, { useState } from 'react';
import './styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = async () => {
    try {
      const response = await fetch('YOUR_BACKEND_API_ENDPOINT/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Registration successful!');
        // Add any additional logic you want after successful registration
      } else {
        console.error('Registration failed:', response.statusText);
        // Handle registration failure, show error message, etc.
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle network errors, unexpected issues, etc.
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />

      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default registrationForm;
