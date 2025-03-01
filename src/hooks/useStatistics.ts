import { useState, useEffect } from "react";
import { statisticsService } from "../services/api";

interface DashboardStatistics {
  totalUsers: number;
  totalRevenue: number;
  newOrders: number;
  activeProducts: number;
}

interface UseStatisticsResult {
  statistics: DashboardStatistics;
  isLoading: boolean;
  error: string | null;
  refreshStatistics: () => Promise<void>;
}

export function useStatistics(): UseStatisticsResult {
  const [statistics, setStatistics] = useState<DashboardStatistics>({
    totalUsers: 0,
    totalRevenue: 0,
    newOrders: 0,
    activeProducts: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatistics = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await statisticsService.getDashboardStats();
      setStatistics(data);
    } catch (err) {
      console.error("Error fetching statistics:", err);
      setError(
        err instanceof Error ? err.message : "Ошибка загрузки статистики",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  return {
    statistics,
    isLoading,
    error,
    refreshStatistics: fetchStatistics,
  };
}
