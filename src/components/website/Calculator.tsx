import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Calculator = () => {
  const [windowType, setWindowType] = useState("single");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [profile, setProfile] = useState("");
  const [price, setPrice] = useState<number | null>(null);

  // Простая формула расчета стоимости для демонстрации
  const calculatePrice = () => {
    if (!width || !height || !profile) return;

    const w = parseFloat(width);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h)) return;

    let basePrice = 0;
    let multiplier = 1;

    // Базовая цена в зависимости от типа окна
    switch (windowType) {
      case "single":
        basePrice = 3000;
        break;
      case "double":
        basePrice = 5000;
        break;
      case "triple":
        basePrice = 7000;
        break;
      default:
        basePrice = 3000;
    }

    // Множитель в зависимости от профиля
    switch (profile) {
      case "economy":
        multiplier = 1;
        break;
      case "standard":
        multiplier = 1.2;
        break;
      case "premium":
        multiplier = 1.5;
        break;
      default:
        multiplier = 1;
    }

    // Расчет стоимости: базовая цена * площадь * множитель профиля
    const area = (w * h) / 10000; // площадь в м²
    const calculatedPrice = Math.round(basePrice * area * multiplier);

    setPrice(calculatedPrice);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Рассчитайте стоимость окон
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Используйте наш калькулятор для расчета примерной стоимости окон.
            Для получения точной цены и оформления заказа свяжитесь с нашими
            менеджерами.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Калькулятор стоимости окон</CardTitle>
            <CardDescription>
              Рассчитайте примерную стоимость окон. Для получения точной цены,
              пожалуйста, свяжитесь с нашими менеджерами.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Тип окна
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant={windowType === "single" ? "default" : "outline"}
                    onClick={() => setWindowType("single")}
                    className="w-full"
                  >
                    Одностворчатое
                  </Button>
                  <Button
                    variant={windowType === "double" ? "default" : "outline"}
                    onClick={() => setWindowType("double")}
                    className="w-full"
                  >
                    Двустворчатое
                  </Button>
                  <Button
                    variant={windowType === "triple" ? "default" : "outline"}
                    onClick={() => setWindowType("triple")}
                    className="w-full"
                  >
                    Трехстворчатое
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ширина (см)
                  </label>
                  <Input
                    type="number"
                    placeholder="Например: 100"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Высота (см)
                  </label>
                  <Input
                    type="number"
                    placeholder="Например: 150"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Профиль
                </label>
                <Select value={profile} onValueChange={setProfile}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите профиль" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Эконом</SelectItem>
                    <SelectItem value="standard">Стандарт</SelectItem>
                    <SelectItem value="premium">Премиум</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={calculatePrice}
                className="w-full bg-primary hover:bg-primary/90"
                disabled={!width || !height || !profile}
              >
                Рассчитать стоимость
              </Button>

              {price !== null && (
                <div className="mt-6 p-4 bg-gray-50 rounded-md border">
                  <p className="text-lg font-medium">Примерная стоимость:</p>
                  <p className="text-2xl font-bold text-primary">
                    {price.toLocaleString()} ₽
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Это ориентировочная стоимость. Для получения точного расчета
                    и оформления заказа, пожалуйста, свяжитесь с нашими
                    менеджерами.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Свяжитесь с нами</h3>
          <p className="text-gray-600 mb-6">
            Для получения точного расчета и оформления заказа
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="tel:+79881499989"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              +7 (988) 149-99-89
            </a>

            <Button asChild variant="outline">
              <a href="#contact-form">Заказать звонок</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
