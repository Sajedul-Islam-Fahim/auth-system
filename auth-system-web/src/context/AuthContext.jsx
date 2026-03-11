import { createContext, useContext, useState, useEffect } from "react";
import axios from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/profile-info");
      setUser(res.data);
    } catch (error) {
      logout();
    } finally {
      setLoading(false);
    }
  };

  const register = async (data) => {
    const res = await axios.post("/register", data);
    setToken(res.data.access_token);
    setUser(res.data.user);
    localStorage.setItem("token", res.data.access_token);
  };

    const login = async (data) => {
        const res = await axios.post("/login", data);
        setToken(res.data.access_token);
        setUser(res.data.user);
        localStorage.setItem("token", res.data.access_token);
    };

    const logout = async () => {
        try {
            await axios.post("/logout");
        } catch (err) {}
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
    };
    
    return (
        <AuthContext.Provider value={{ user, token, loading, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);