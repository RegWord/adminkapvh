import React from "react";
import Header from "../components/website/Header";
import Footer from "../components/website/Footer";
import Hero from "../components/website/Hero";
import Features from "../components/website/Features";
import ProductCatalog from "../components/website/ProductCatalog";
import Calculator from "../components/website/Calculator";
import CallToAction from "../components/website/CallToAction";
import ContactForm from "../components/website/ContactForm";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <Hero />
        <Features />
        <ProductCatalog />
        <Calculator />
        <CallToAction />

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

export default HomePage;
