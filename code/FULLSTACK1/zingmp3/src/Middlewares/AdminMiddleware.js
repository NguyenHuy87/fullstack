import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const isAdmin =false;

export default function AdminMiddleware() {
  return isAdmin ? <Outlet /> : <Navigate to={"/login"} />;
}
