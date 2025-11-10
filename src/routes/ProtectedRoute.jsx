import React from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // If there's no token, send user to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, show the protected page
  return children;
}
