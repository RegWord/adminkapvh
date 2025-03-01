import React from "react";
import Header from "../components/website/Header";
import Footer from "../components/website/Footer";
import ProductCatalog from "../components/website/ProductCatalog";
import CallToAction from "../components/website/CallToAction";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <div className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Каталог продукции</h1>
            <p className="text-gray-600 mt-2">
              Широкий выбор окон и конструкций для любых задач
            </p>
          </div>
        </div>

        <ProductCatalog />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
