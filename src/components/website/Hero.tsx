import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Качественные окна для вашего дома
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Создайте комфортное пространство с нашими современными окнами.
            Широкий выбор материалов и профессиональный монтаж.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/calculator">Рассчитать стоимость</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/products">Каталог продукции</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gray-200 rounded-lg w-full aspect-video flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Современные окна"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
