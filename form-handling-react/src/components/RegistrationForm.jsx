import React, { useState } from 'react';

const RegistrationForm = () => {
  // Set up state for each form field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Set up state for error messages
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: check if all fields are filled
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // If there are errors, set them and do not submit the form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, clear errors and handle form submission (e.g., send data to API)
      setErrors({});
      console.log('Form submitted with:', { username, email, password });
      // You can also reset the form after submission if needed:
      // setUsername('');
      // setEmail('');
      // setPassword('');
    }
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
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email} // Bind state to value
          onChange={(e) => setEmail(e.target.value)} // Update state on change
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password} // Bind state to value
          onChange={(e) => setPassword(e.target.value)} // Update state on change
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
