// Login.tsx
import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (password: string) => {
    // The regex checks for at least 8 characters, 1 uppercase, 1 lowercase, and 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validatePassword(password)) {
      setError("Invalid password");
    } else {
      setError("");
      // Handle successful login here
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button className={styles.submitButton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
