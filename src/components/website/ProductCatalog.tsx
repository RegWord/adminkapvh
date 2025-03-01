import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { productsService } from "@/services/api";

interface Product {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  brands?: string[];
  link: string;
}

const ProductCatalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Примеры продуктов для каталога (используются как запасной вариант)
  const defaultProducts: Product[] = [
    {
      id: "pvh-1",
      title: "ПВХ окна",
      description:
        "Качественные окна из ПВХ профиля для жилых и коммерческих помещений",
      imagePath:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      brands: ["Rehau", "Brushox"],
      link: "/products/windows",
    },
    {
      id: "alum-1",
      title: "Алюминиевые окна",
      description:
        "Современные алюминиевые конструкции для фасадов и интерьеров",
      imagePath:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      brands: ["Краус", "Алютех"],
      link: "/products/aluminum",
    },
    {
      id: "fire-1",
      title: "Противопожарные окна",
      description:
        "Специализированные противопожарные конструкции для безопасности",
      imagePath:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      brands: ["Краус FireStop", "Краус FireBlock"],
      link: "/products/fire",
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Пытаемся получить данные с сервера
        const data = await productsService.getWindows();
        if (data && Array.isArray(data) && data.length > 0) {
          // Преобразуем данные в нужный формат
          const formattedProducts = data.map((item: any) => ({
            id: item.id,
            title: item.name,
            description: item.description,
            imagePath: item.imagePath || "",
            brands: item.brands || [],
            link: `/products/${item.id}`,
          }));
          setProducts(formattedProducts);
        } else {
          // Если данных нет, используем запасной вариант
          setProducts(defaultProducts);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        // В случае ошибки используем запасной вариант
        setProducts(defaultProducts);
        setError("Не удалось загрузить данные о продуктах");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Каталог продукции</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Широкий выбор окон и конструкций для любых задач. От классических
            ПВХ окон до специализированных противопожарных решений.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em]"></div>
            <p className="mt-4 text-gray-600">Загрузка продуктов...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                imagePath={product.imagePath}
                brands={product.brands}
                link={product.link}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-xl text-gray-600 mb-2">
              Товары пока не добавлены
            </p>
            <p className="text-gray-500">
              Как только товары появятся в каталоге, вы сможете их увидеть
              здесь.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
