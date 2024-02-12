import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthenticationContext';

// PrivateRoute 컴포넌트는 자식 라우트들에 대해서도 인증을 요구합니다.
export const PrivateRoute: React.FC = () => {
  const auth = useAuth();

  return auth?.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
