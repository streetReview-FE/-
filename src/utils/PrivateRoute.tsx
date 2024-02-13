import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// PrivateRoute 컴포넌트는 자식 라우트들에 대해서도 인증을 요구합니다.
export const PrivateRoute: React.FC = () => {
  const isLoggedIn = useSelector((state:any) => state.auth.isLoggedin)

  return isLoggedIn? <Outlet /> : <Navigate to="/login" />;
};
