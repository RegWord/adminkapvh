import React from "react";
import Header from "../components/website/Header";
import Footer from "../components/website/Footer";
import Calculator from "../components/website/Calculator";
import ContactForm from "../components/website/ContactForm";

const CalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <div className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Калькулятор стоимости</h1>
            <p className="text-gray-600 mt-2">
              Рассчитайте примерную стоимость окон
            </p>
          </div>
        </div>

        <Calculator />

        <section className="py-16 bg-white" id="contact-form">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Для получения точного расчета и оформления заказа
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CalculatorPage;
