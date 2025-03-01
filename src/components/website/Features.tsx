import React from "react";
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Качественные материалы",
      description:
        "Используем только сертифицированные профили и фурнитуру от ведущих производителей",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: "Профессиональный монтаж",
      description:
        "Опытные специалисты выполнят установку окон с соблюдением всех технологий",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: "Гарантия качества",
      description:
        "Предоставляем гарантию на все виды работ и материалы до 5 лет",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Почему выбирают нас
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
