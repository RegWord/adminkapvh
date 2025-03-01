import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { authService } from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Проверяем аутентификацию при загрузке
  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        // Если у вас есть эндпоинт для проверки текущего пользователя, используйте его
        // Например: const userData = await fetchWithAuth('/auth/me');

        // Временное решение - просто проверяем наличие токена
        if (authService.isAuthenticated()) {
          // Здесь должен быть запрос к API для получения данных пользователя
          // Для примера используем заглушку
          setUser({
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
            role: "admin",
          });
        }
      } catch (err) {
        console.error("Authentication check failed:", err);
        setError("Ошибка проверки аутентификации");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await authService.login(email, password);

      // Предполагаем, что API возвращает данные пользователя вместе с токеном
      setUser(
        response.user || {
          id: "1",
          name: "Admin User",
          email: email,
          role: "admin",
        },
      );
    } catch (err) {
      console.error("Login failed:", err);
      setError(err instanceof Error ? err.message : "Ошибка входа в систему");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await authService.logout();
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
      setError(err instanceof Error ? err.message : "Ошибка выхода из системы");
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
