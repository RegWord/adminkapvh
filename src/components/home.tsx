import React from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "./admin/LoginForm";
import { useAuth } from "../contexts/AuthContext";

interface AdminLoginProps {}

const AdminLogin = ({}: AdminLoginProps) => {
  const { isAuthenticated, isLoading, error, login } = useAuth();

  // If user is already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      await login(data.email, data.password);
    } catch (err) {
      // Ошибка уже обрабатывается в AuthContext
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Админ панель
          </h1>
          <p className="text-gray-600">Система управления продуктами</p>
        </div>

        <LoginForm
          onSubmit={handleLogin}
          isLoading={isLoading}
          error={error || ""}
        />
      </div>
    </div>
  );
};

export default AdminLogin;
