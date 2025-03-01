import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Info } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">О компании</h3>
            <p className="text-sm text-gray-600 mb-4">
              ООО «МАСШТАБ-СТРОЙ СОЧИ», является производственной монтажной
              компанией по изготовлению и установке металлопластиковых и
              алюминиевых конструкций, противопожарных конструкций, стеклянных
              ограждений, роллет и секционных ворот.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Продукция</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/windows"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  ПВХ окна
                </Link>
              </li>
              <li>
                <Link
                  to="/products/aluminum"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Алюминиевые окна
                </Link>
              </li>
              <li>
                <Link
                  to="/products/fire"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Противопожарные конструкции
                </Link>
              </li>
              <li>
                <Link
                  to="/products/glass"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Стеклянные ограждения
                </Link>
              </li>
              <li>
                <Link
                  to="/products/shutters"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Роллеты и ворота
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/calculator"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Калькулятор стоимости
                </Link>
              </li>
              <li>
                <Link
                  to="/services/measurement"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Бесплатный замер
                </Link>
              </li>
              <li>
                <Link
                  to="/services/installation"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Установка конструкций
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <a
                  href="tel:+79881499989"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  +7 (988) 149-99-89
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <a
                  href="mailto:mashtabss@mail.ru"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  mashtabss@mail.ru
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">
                  г. Сочи, р-н Хостинский, ул. Дорога на Большой Ахун, 16, кв.
                  88
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© 2023 ООО «МАСШТАБ-СТРОЙ СОЧИ». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
