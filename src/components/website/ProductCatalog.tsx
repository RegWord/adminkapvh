import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  brands?: string[];
  link: string;
}

const ProductCatalog = () => {
  // Примеры продуктов для каталога
  const products: Product[] = [
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
      </div>
    </section>
  );
};

export default ProductCatalog;
