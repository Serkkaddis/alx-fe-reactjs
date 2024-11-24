import React, { useState } from 'react';

const RegistrationForm = () => {
  // Set up state for each form field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form validation or send the data to an API
    console.log('Form submitted with:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username} // Bind state to value
          onChange={(e) => setUsername(e.target.value)} // Update state on change
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email} // Bind state to value
          onChange={(e) => setEmail(e.target.value)} // Update state on change
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password} // Bind state to value
          onChange={(e) => setPassword(e.target.value)} // Update state on change
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
