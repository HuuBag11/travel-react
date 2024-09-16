// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { notification } from 'antd';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const [api, contextHolder] = notification.useNotification();

  const openNotification = ({ message, description, duration = 4.5, pauseOnHover = false }) => {
    api.open({
      message,
      description,
      duration,
      placement: 'bottomRight',
      showProgress: true,
      pauseOnHover,
    });
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []);

  const login = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
    localStorage.setItem('userName', name);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
    localStorage.removeItem('userName');
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout, openNotification }}>
      {contextHolder}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
