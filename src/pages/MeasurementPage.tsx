import React from "react";
import Header from "../components/website/Header";
import Footer from "../components/website/Footer";
import ContactForm from "../components/website/ContactForm";
import { Clock, Ruler, FileText, CheckCircle, Calendar } from "lucide-react";

const MeasurementPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <div className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Профессиональный замер окон</h1>
            <p className="text-gray-600 mt-2">
              Точные замеры - основа качественной установки окон
            </p>
          </div>
        </div>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-6">
                  Профессиональный замер окон
                </h2>
                <p className="text-gray-600 mb-6">
                  Точные замеры - основа качественной установки окон. Наши
                  специалисты проведут профессиональный замер с учетом всех
                  особенностей вашего помещения и предоставят подробную
                  консультацию по выбору оптимального решения.
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Профессиональный замер окон"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700">
                    После проведения замера вы получите полную информацию о
                    подходящих вариантах окон и их стоимости. Это поможет вам
                    принять взвешенное решение о покупке.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <Ruler className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Профессиональный замер</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Точные измерения всех параметров окон с учетом
                      особенностей проема и фасада здания
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <FileText className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Бесплатная консультация</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Подробная консультация по выбору профиля, стеклопакета и
                      дополнительных опций
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Расчет стоимости</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Предварительный расчет стоимости окон и монтажных работ на
                      месте
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Выезд в удобное время</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Замерщик приедет в удобное для вас время, включая выходные
                      дни
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
              Как проходит замер?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Согласование времени
                </h3>
                <p className="text-gray-600">
                  Согласование удобного для вас времени визита специалиста
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Выезд специалиста
                </h3>
                <p className="text-gray-600">
                  Наш специалист приезжает на объект в назначенное время
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ruler className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Проведение измерений
                </h3>
                <p className="text-gray-600">
                  Тщательное измерение всех необходимых параметров
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Консультация</h3>
                <p className="text-gray-600">
                  Профессиональная консультация по выбору оптимального решения
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Расчет стоимости</h3>
                <p className="text-gray-600">
                  Предварительный расчет стоимости изделий и монтажа
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">
              Почему важен профессиональный замер?
            </h2>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6 text-center">
                Профессиональный замер окон - это не просто измерение габаритов
                оконного проема. Это комплексная услуга, включающая в себя
                оценку состояния проема, особенностей фасада, типа здания и
                множества других факторов, влияющих на выбор конструкции и
                способ монтажа.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">Точность размеров</h3>
                  <p className="text-gray-600">
                    Профессиональный замер гарантирует точное соответствие
                    размеров окон и проемов, что исключает проблемы при монтаже
                  </p>
                </div>

                <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">
                    Учет особенностей здания
                  </h3>
                  <p className="text-gray-600">
                    Специалист оценит состояние стен, особенности фасада и
                    другие факторы, влияющие на выбор конструкции
                  </p>
                </div>

                <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">Оптимальный выбор</h3>
                  <p className="text-gray-600">
                    Профессиональная консультация поможет выбрать оптимальный
                    тип окон, профиль и стеклопакет для ваших условий
                  </p>
                </div>

                <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">Экономия средств</h3>
                  <p className="text-gray-600">
                    Правильный замер позволяет избежать дополнительных расходов
                    на переделку или доработку конструкций
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6">
                Заказать бесплатный замер
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

export default MeasurementPage;
