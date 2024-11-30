import React from 'react';
import { useAuth } from './redux/hooks/useAuth';

const LoginPage = () => {
  const { auth, login, logout } = useAuth();

  const handleLogin = () => {
    const credentials = { username: 'user', password: 'pass' };
    login(credentials);
  };

  return (
    <div>
      <h1>{auth.isAuthenticated ? 'Welcome!' : 'Please Log In'}</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
