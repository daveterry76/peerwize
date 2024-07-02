import React, { useEffect } from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { getToken } from "../../config/swr";

const ProtectedRoute = ({ children }) => {
  const token = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
