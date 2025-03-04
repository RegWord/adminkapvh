// Базовый URL вашего API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Вспомогательная функция для выполнения запросов
async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  // Получаем токен из localStorage или другого хранилища
  const token = localStorage.getItem("adminToken");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // Добавляем токен авторизации, если он есть
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Проверяем статус ответа
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: "Произошла ошибка при выполнении запроса",
    }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Сервис для аутентификации
export const authService = {
  async login(email: string, password: string) {
    try {
      const data = await fetchWithAuth("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      // Сохраняем токен в localStorage
      if (data.token) {
        localStorage.setItem("adminToken", data.token);
      }

      return data;
    } catch (error) {
      console.warn("Login API error:", error);

      // Для демонстрационных целей: если email содержит admin, считаем логин успешным
      if (email.includes("admin")) {
        // Создаем демо-токен и сохраняем его
        const demoToken = "demo-token-" + Date.now();
        localStorage.setItem("adminToken", demoToken);

        // Устанавливаем cookie для сохранения состояния авторизации
        document.cookie = "adminAuth=true; path=/; max-age=86400"; // 24 часа

        return {
          token: demoToken,
          user: {
            id: "1",
            name: "Admin User",
            email: email,
            role: "admin",
          },
        };
      }

      // Если email не содержит admin, пробрасываем ошибку дальше
      throw error;
    }
  },

  async logout() {
    localStorage.removeItem("adminToken");
    // Удаляем cookie
    document.cookie =
      "adminAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    return { success: true };
  },

  isAuthenticated() {
    // Проверяем наличие токена в localStorage
    const token = localStorage.getItem("adminToken");

    // Для демонстрационных целей, если токена нет, но есть cookie с именем adminAuth,
    // считаем пользователя авторизованным и сохраняем токен в localStorage
    if (!token && document.cookie.includes("adminAuth")) {
      const demoToken = "demo-token-" + Date.now();
      localStorage.setItem("adminToken", demoToken);
      return true;
    }

    return !!token;
  },
};

// Сервис для работы с продуктами
export const productsService = {
  // Окна
  async getWindows() {
    return fetchWithAuth("/window");
  },

  async getWindow(id: string) {
    return fetchWithAuth(`/window/${id}`);
  },

  async createWindow(windowData: any) {
    return fetchWithAuth("/window", {
      method: "POST",
      body: JSON.stringify(windowData),
    });
  },

  async updateWindow(id: string, windowData: any) {
    return fetchWithAuth(`/window/${id}`, {
      method: "PUT",
      body: JSON.stringify(windowData),
    });
  },

  async deleteWindow(id: string) {
    return fetchWithAuth(`/window/${id}`, {
      method: "DELETE",
    });
  },

  // Модели окон
  async getWindowModels() {
    return fetchWithAuth("/window/model");
  },

  async getWindowModel(id: string) {
    return fetchWithAuth(`/window/model/${id}`);
  },

  async createWindowModel(modelData: any) {
    return fetchWithAuth("/window/model", {
      method: "POST",
      body: JSON.stringify(modelData),
    });
  },

  async updateWindowModel(id: string, modelData: any) {
    return fetchWithAuth(`/window/model/${id}`, {
      method: "PUT",
      body: JSON.stringify(modelData),
    });
  },

  async deleteWindowModel(id: string) {
    return fetchWithAuth(`/window/model/${id}`, {
      method: "DELETE",
    });
  },

  // Материалы
  async getMaterials() {
    return fetchWithAuth("/materials");
  },

  async getMaterial(id: string) {
    return fetchWithAuth(`/materials/${id}`);
  },

  async createMaterial(materialData: any) {
    return fetchWithAuth("/materials", {
      method: "POST",
      body: JSON.stringify(materialData),
    });
  },

  async updateMaterial(id: string, materialData: any) {
    return fetchWithAuth(`/materials/${id}`, {
      method: "PUT",
      body: JSON.stringify(materialData),
    });
  },

  async deleteMaterial(id: string) {
    return fetchWithAuth(`/materials/${id}`, {
      method: "DELETE",
    });
  },

  // Системы
  async getSystems() {
    return fetchWithAuth("/systems");
  },

  async getSystem(id: string) {
    return fetchWithAuth(`/systems/${id}`);
  },

  async createSystem(systemData: any) {
    return fetchWithAuth("/systems", {
      method: "POST",
      body: JSON.stringify(systemData),
    });
  },

  async updateSystem(id: string, systemData: any) {
    return fetchWithAuth(`/systems/${id}`, {
      method: "PUT",
      body: JSON.stringify(systemData),
    });
  },

  async deleteSystem(id: string) {
    return fetchWithAuth(`/systems/${id}`, {
      method: "DELETE",
    });
  },
};

// Сервис для работы с заявками
export const applicationsService = {
  async getApplications(filters?: any) {
    const queryParams = filters
      ? `?${new URLSearchParams(filters).toString()}`
      : "";
    return fetchWithAuth(`/application${queryParams}`);
  },

  async getApplication(id: string) {
    return fetchWithAuth(`/application/${id}`);
  },

  async createApplication(applicationData: any) {
    return fetchWithAuth("/application", {
      method: "POST",
      body: JSON.stringify(applicationData),
    });
  },

  async deleteApplication(id: string) {
    return fetchWithAuth(`/application/${id}`, {
      method: "DELETE",
    });
  },
};

// Сервис для получения статистики
export const statisticsService = {
  async getDashboardStats() {
    // Заглушка для статистики, так как нет соответствующего API
    return Promise.resolve({
      totalUsers: 0,
      totalRevenue: 0,
      newOrders: 0,
      activeProducts: 24,
    });
  },
};
