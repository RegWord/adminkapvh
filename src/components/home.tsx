import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "./admin/LoginForm";

interface HomeProps {
  isAuthenticated?: boolean;
  onLogin?: (data: { email: string; password: string }) => void;
  isLoading?: boolean;
  error?: string;
}

const Home = ({
  isAuthenticated = false,
  onLogin = () => {},
  isLoading = false,
  error = "",
}: HomeProps) => {
  // If user is already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600">Product Management System</p>
        </div>

        <LoginForm onSubmit={onLogin} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};

export default Home;
