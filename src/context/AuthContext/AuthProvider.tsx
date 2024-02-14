import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { AuthContextType, User } from "../../types/Auth";
import { useNavigate } from 'react-router-dom';


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string>( localStorage.getItem("token") || "");
  const [ user, setUser] = useState<User>()
  
  const login: AuthContextType["login"] = (newToken, user) => {
    setToken(newToken);
    setUser(user);
    localStorage.setItem("token", newToken);
    navigate('/citas')
  };

  const logout: AuthContextType["logout"] = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate('/')
  };


  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


