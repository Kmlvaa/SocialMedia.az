import { createContext, useContext, useState, useEffect } from 'react';
import * as authApi from '../api/auth';

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({ children }) {
  const [user,  setUser]  = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) return;
    authApi.default.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, [token]);

  const login = async (creds) => {
    setLoading(true);
    const data = await authApi.login(creds);
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem('token', data.token);
    setLoading(false);
  };

  const register = async (info) => {
    setLoading(true);
    await authApi.register(info);
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    delete authApi.default.defaults.headers.common.Authorization;
  };

  const value = { user, token, loading, login, register, logout };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
