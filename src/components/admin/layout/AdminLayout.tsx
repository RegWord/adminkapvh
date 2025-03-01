import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface AdminLayoutProps {
  children?: ReactNode;
  user?: {
    name: string;
    email: string;
    avatarUrl?: string;
  };
  onLogout?: () => void;
}

const AdminLayout = ({
  children,
  user = {
    name: "Admin User",
    email: "admin@example.com",
    avatarUrl: "",
  },
  onLogout = () => console.log("Logout clicked"),
}: AdminLayoutProps) => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Sidebar */}
      <div className="h-full">
        <Sidebar onLogout={onLogout} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header user={user} onLogout={onLogout} notifications={3} />

        {/* Content Area */}
        <main className="flex-1 overflow-auto">{children || <Outlet />}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
