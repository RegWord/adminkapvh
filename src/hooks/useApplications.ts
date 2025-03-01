import { useState, useEffect, useCallback } from "react";
import { applicationsService } from "../services/api";

interface Application {
  id: string;
  name: string;
  phone_number: string;
}

interface ApplicationFilters {
  search?: string;
}

interface UseApplicationsResult {
  applications: Application[];
  isLoading: boolean;
  error: string | null;
  refreshApplications: () => Promise<void>;
  filterApplications: (filters: ApplicationFilters) => Promise<void>;
  getApplicationDetails: (id: string) => Promise<any>;
  deleteApplication: (id: string) => Promise<void>;
}

export function useApplications(): UseApplicationsResult {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ApplicationFilters>({});

  const fetchApplications = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await applicationsService.getApplications(filters);
      setApplications(data);
    } catch (err) {
      console.error("Error fetching applications:", err);
      setError(err instanceof Error ? err.message : "Ошибка загрузки заявок");
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const filterApplications = async (newFilters: ApplicationFilters) => {
    setFilters(newFilters);
    // fetchApplications будет вызван автоматически благодаря useEffect и зависимости от filters
  };

  const getApplicationDetails = async (id: string) => {
    try {
      setIsLoading(true);
      setError(null);

      return await applicationsService.getApplication(id);
    } catch (err) {
      console.error("Error fetching application details:", err);
      setError(
        err instanceof Error ? err.message : "Ошибка загрузки деталей заявки",
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteApplication = async (id: string) => {
    try {
      setIsLoading(true);
      setError(null);

      await applicationsService.deleteApplication(id);
      await fetchApplications(); // Обновляем список после удаления
    } catch (err) {
      console.error("Error deleting application:", err);
      setError(err instanceof Error ? err.message : "Ошибка удаления заявки");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    applications,
    isLoading,
    error,
    refreshApplications: fetchApplications,
    filterApplications,
    getApplicationDetails,
    deleteApplication,
  };
}
