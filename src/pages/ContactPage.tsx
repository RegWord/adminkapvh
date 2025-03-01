import React from "react";
import Header from "../components/website/Header";
import Footer from "../components/website/Footer";
import ContactForm from "../components/website/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <div className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Контакты</h1>
            <p className="text-gray-600 mt-2">
              Свяжитесь с нами для получения консультации
            </p>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Наши контакты</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Адрес</h3>
                      <p className="text-gray-600 mt-1">
                        г. Сочи, р-н Хостинский, ул. Дорога на Большой Ахун, 16,
                        кв. 88
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Телефон</h3>
                      <p className="text-gray-600 mt-1">
                        <a
                          href="tel:+79881499989"
                          className="hover:text-primary"
                        >
                          +7 (988) 149-99-89
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600 mt-1">
                        <a
                          href="mailto:mashtabss@mail.ru"
                          className="hover:text-primary"
                        >
                          mashtabss@mail.ru
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Режим работы</h3>
                      <p className="text-gray-600 mt-1">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-gray-600">Сб: 10:00 - 15:00</p>
                      <p className="text-gray-600">Вс: выходной</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-3">Карта</h3>
                  <div className="aspect-video bg-gray-200 rounded-md">
                    {/* Здесь будет карта, в реальном проекте можно использовать iframe с Яндекс или Google картами */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Карта с местоположением компании
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Заказать звонок</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
