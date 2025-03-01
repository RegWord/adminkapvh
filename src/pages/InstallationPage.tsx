import React from "react";
import Header from "../components/website/Header";
import Footer from "../components/website/Footer";
import ContactForm from "../components/website/ContactForm";
import { Wrench, Shield, Clock, CheckCircle, Settings } from "lucide-react";

const InstallationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <div className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">
              Профессиональная установка окон
            </h1>
            <p className="text-gray-600 mt-2">
              Качественный монтаж окон - залог их долгой службы
            </p>
          </div>
        </div>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-6">
                  Профессиональная установка окон
                </h2>
                <p className="text-gray-600 mb-6">
                  Качественный монтаж окон - залог их долгой службы. Наши
                  специалисты выполнят установку окон любой сложности с
                  соблюдением всех технологических требований и гарантией
                  качества.
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Профессиональная установка окон"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <Wrench className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Профессиональный монтаж</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Установка окон в соответствии с ГОСТ и современными
                      технологиями монтажа
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Опытные мастера</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Работы выполняют сертифицированные специалисты с опытом от
                      5 лет
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Гарантия качества</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Предоставляем гарантию на монтажные работы до 5 лет
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Комплексный подход</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Демонтаж старых окон, установка новых, отделка откосов и
                      уборка мусора
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <Settings className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Современные материалы</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Использование качественных монтажных материалов от
                      проверенных производителей
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Чистота и порядок</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Защита помещения во время работ и уборка после завершения
                      монтажа
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">
              Этапы монтажа окон
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Подготовительные работы
                </h3>
                <p className="text-sm text-gray-600">
                  Защита помещения, демонтаж старых окон, подготовка оконных
                  проемов
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Монтаж оконной конструкции
                </h3>
                <p className="text-sm text-gray-600">
                  Установка окна по уровню, крепление анкерными болтами, монтаж
                  подоконника
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Герметизация</h3>
                <p className="text-sm text-gray-600">
                  Заполнение монтажной пеной, установка паро- и
                  гидроизоляционных материалов
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Отделочные работы
                </h3>
                <p className="text-sm text-gray-600">
                  Установка откосов, герметизация швов, финишная отделка
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Пусконаладка</h3>
                <p className="text-sm text-gray-600">
                  Регулировка фурнитуры, проверка работы створок, очистка окон
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold ml-4">Гарантия качества</h2>
              </div>
              <p className="text-gray-600 mt-6">
                Мы предоставляем гарантию на все монтажные работы сроком до 5
                лет. В течение гарантийного срока мы бесплатно устраним любые
                недостатки, связанные с качеством монтажа.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Гарантия на монтажные работы - 5 лет</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Гарантия на фурнитуру - от 1 до 3 лет</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Гарантия на профиль - до 10 лет</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>
                    Бесплатное сервисное обслуживание в течение 1 года
                  </span>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Гарантия качества"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">
              Почему выбирают нас?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Строгое соблюдение технологии монтажа
                </h3>
                <p className="text-gray-600">
                  Все работы выполняются в строгом соответствии с
                  технологическими требованиями и ГОСТ
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Использование качественных материалов
                </h3>
                <p className="text-gray-600">
                  Для монтажа используются только сертифицированные материалы от
                  проверенных производителей
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Опытные монтажники с профессиональным инструментом
                </h3>
                <p className="text-gray-600">
                  Наши специалисты имеют большой опыт работы и используют
                  профессиональный инструмент
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Выполнение работ в согласованные сроки
                </h3>
                <p className="text-gray-600">
                  Мы ценим ваше время и всегда выполняем работы в заранее
                  оговоренные сроки
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Официальная гарантия на работы
                </h3>
                <p className="text-gray-600">
                  Предоставляем официальную гарантию на все виды монтажных работ
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Доступные цены</h3>
                <p className="text-gray-600">
                  Предлагаем конкурентные цены на монтажные работы без ущерба
                  для качества
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6">
                Заказать установку окон
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Оставьте свои контактные данные, и мы свяжемся с вами в
                ближайшее время
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InstallationPage;
