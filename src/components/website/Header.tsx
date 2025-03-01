import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            МАСШТАБ-СТРОЙ СОЧИ
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-primary">
              Продукция <span className="ml-1">▼</span>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 hidden group-hover:block">
              <Link
                to="/products/windows"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                ПВХ окна
              </Link>
              <Link
                to="/products/aluminum"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Алюминиевые окна
              </Link>
              <Link
                to="/products/fire"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Противопожарные окна
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-primary">
              Услуги <span className="ml-1">▼</span>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 hidden group-hover:block">
              <Link
                to="/services/calculator"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Калькулятор стоимости
              </Link>
              <Link
                to="/services/measurement"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Бесплатный замер
              </Link>
              <Link
                to="/services/installation"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Установка конструкций
              </Link>
            </div>
          </div>

          <Link to="/calculator" className="text-gray-700 hover:text-primary">
            Калькулятор
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex flex-col items-end">
            <a href="tel:+79881499989" className="text-primary font-medium">
              +7 (988) 149-99-89
            </a>
          </div>

          <Button
            asChild
            variant="default"
            className="bg-primary hover:bg-primary/90"
          >
            <Link to="/contact">Заказать звонок</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
