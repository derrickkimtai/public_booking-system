// App.js
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import './styles/index.css';  // Updated import path

const App = () => {
  return (
    <div>
      <h1>Public Transport Booking System</h1>
      <RegistrationForm />
      {/* Add other components as needed */}
    </div>
  );
};

export default App;
