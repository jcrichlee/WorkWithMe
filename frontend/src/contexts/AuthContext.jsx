// src/contexts/AuthContext.jsx
import AuthService from '../services/authService';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AuthService.getCurrentUser()
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const login = async (data) => {
    const res = await AuthService.login(data);
    setUser(res.data);
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
