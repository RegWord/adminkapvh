import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Готовы обсудить ваш проект?
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Наши специалисты помогут подобрать оптимальное решение под ваши задачи
          и бюджет
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+79881499989"
            className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            <Phone className="mr-2 h-5 w-5" />
            +7 (988) 149-99-89
          </a>

          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <Link to="/contact">Заказать звонок</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
