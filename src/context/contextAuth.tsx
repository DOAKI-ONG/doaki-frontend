import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


type AuthContextType = {

  login: (token: string, profileImage: string) => void;
  logout: () => void;
  isLoggedIn: () => Boolean;
  token : string | null;
  profileImage: string | null;
};
type Props = {children: React.ReactNode}


const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }:Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  
  useEffect(() => {
    const usertoken = Cookies.get('token');

    if (usertoken) {
      setToken(usertoken); ;
    }
    setIsReady(true);
  }, []);

  const login = (token: string, profileImage: string) => {
    Cookies.set('token', token, { expires: 1/2 });
    setToken(token);
    setProfileImage(profileImage);
    navigate("/");

  };

  const logout = () => {
    Cookies.remove('token');
    navigate("/")
  };

  const isLoggedIn = () => {
    if(Cookies.get("token")){
      return true;
    } 
    return false;
  }

  return (
    <AuthContext.Provider value={{ token, login , logout, isLoggedIn, profileImage }}>
        {isReady ? children : null}
    </AuthContext.Provider>
  );

  
};

export const useAuth = () => React.useContext(AuthContext);