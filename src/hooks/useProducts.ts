import { useState, useEffect, useCallback } from "react";
import { productsService } from "../services/api";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  status: string;
  price?: string;
  sku?: string;
  createdAt: string;
  updatedAt: string;
}

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  refreshProducts: () => Promise<void>;
  createProduct: (productType: string, productData: any) => Promise<void>;
  updateProduct: (
    productType: string,
    id: string,
    productData: any,
  ) => Promise<void>;
  deleteProduct: (productType: string, id: string) => Promise<void>;
}

export function useProducts(
  productType: "windows" | "materials" | "systems",
): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      let data;
      switch (productType) {
        case "windows":
          data = await productsService.getWindows();
          break;
        case "materials":
          data = await productsService.getMaterials();
          break;
        case "systems":
          data = await productsService.getSystems();
          break;
      }

      setProducts(data);
    } catch (err) {
      console.error(`Error fetching ${productType}:`, err);
      setError(
        err instanceof Error ? err.message : `Ошибка загрузки ${productType}`,
      );
    } finally {
      setIsLoading(false);
    }
  }, [productType]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const createProduct = async (type: string, productData: any) => {
    try {
      setIsLoading(true);
      setError(null);

      let result;
      switch (type) {
        case "windows":
          result = await productsService.createWindow(productData);
          break;
        case "materials":
          result = await productsService.createMaterial(productData);
          break;
        case "systems":
          result = await productsService.createSystem(productData);
          break;
        default:
          throw new Error("Неизвестный тип продукта");
      }

      await fetchProducts(); // Обновляем список после создания
      return result;
    } catch (err) {
      console.error(`Error creating ${type}:`, err);
      setError(err instanceof Error ? err.message : `Ошибка создания ${type}`);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (type: string, id: string, productData: any) => {
    try {
      setIsLoading(true);
      setError(null);

      let result;
      switch (type) {
        case "windows":
          result = await productsService.updateWindow(id, productData);
          break;
        case "materials":
          result = await productsService.updateMaterial(id, productData);
          break;
        case "systems":
          result = await productsService.updateSystem(id, productData);
          break;
        default:
          throw new Error("Неизвестный тип продукта");
      }

      await fetchProducts(); // Обновляем список после обновления
      return result;
    } catch (err) {
      console.error(`Error updating ${type}:`, err);
      setError(
        err instanceof Error ? err.message : `Ошибка обновления ${type}`,
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (type: string, id: string) => {
    try {
      setIsLoading(true);
      setError(null);

      let result;
      switch (type) {
        case "windows":
          result = await productsService.deleteWindow(id);
          break;
        case "materials":
          result = await productsService.deleteMaterial(id);
          break;
        case "systems":
          result = await productsService.deleteSystem(id);
          break;
        default:
          throw new Error("Неизвестный тип продукта");
      }

      await fetchProducts(); // Обновляем список после удаления
      return result;
    } catch (err) {
      console.error(`Error deleting ${type}:`, err);
      setError(err instanceof Error ? err.message : `Ошибка удаления ${type}`);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    products,
    isLoading,
    error,
    refreshProducts: fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
