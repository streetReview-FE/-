import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const AuthenticationContext = createContext<AuthContextType | null>(null);

export const useAuth = () =>{
  const context = useContext(AuthenticationContext)
  if(context === null) {
    throw new Error('AuthenticationProvider error');
  }
  return context;
};

interface AuthenticationProviderProps {
  children: ReactNode;
}

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const value = {isAuthenticated, setIsAuthenticated};

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
