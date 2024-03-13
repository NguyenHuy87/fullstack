import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const islogin = false;

export default function AuthMiddlewares() {
  return islogin ? <Outlet /> : <Navigate to={"/login"} />;
}

