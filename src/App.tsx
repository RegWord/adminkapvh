import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import routes from "tempo-routes";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import AdminLayout from "./components/admin/layout/AdminLayout";
import DashboardOverview from "./components/admin/dashboard/DashboardOverview";
import ProductManagement from "./components/admin/products/ProductManagement";
import ApplicationsList from "./components/admin/applications/ApplicationsList";

// Импорт страниц сайта
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import MeasurementPage from "./pages/MeasurementPage";
import InstallationPage from "./pages/InstallationPage";
import AdminLogin from "./components/home";

// Защищенный маршрут, который проверяет аутентификацию
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Загрузка...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            {/* Публичные маршруты сайта */}
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/measurement" element={<MeasurementPage />} />
            <Route
              path="/services/installation"
              element={<InstallationPage />}
            />

            {/* Админ маршруты */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={<Navigate to="/admin/dashboard" replace />}
              />
              <Route path="dashboard" element={<DashboardOverview />} />
              <Route path="products/*" element={<ProductManagement />} />
              <Route path="applications" element={<ApplicationsList />} />
            </Route>
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
