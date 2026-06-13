import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../api/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On app load, restore session from token
  useEffect(() => {
    const token = localStorage.getItem("kaha_token");
    if (!token) {
      setLoading(false);
      return;
    }

    getMe()
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("kaha_token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("kaha_token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("kaha_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
