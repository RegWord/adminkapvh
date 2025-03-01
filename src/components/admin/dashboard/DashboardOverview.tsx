import React from "react";
import { Package, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatisticsCard from "./StatisticsCard";
import { QuickAccessCards } from "./QuickAccessCard";

interface DashboardOverviewProps {}

const DashboardOverview = ({}: DashboardOverviewProps) => {
  return (
    <div className="w-full h-full p-6 bg-gray-50">
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Панель управления
          </h1>
          <p className="text-muted-foreground mt-1">
            Добро пожаловать в панель управления.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatisticsCard
            title="Активные окна"
            value="24"
            description="Типы окон в каталоге"
            icon={Package}
            color="blue"
          />
          <StatisticsCard
            title="Материалы"
            value="15"
            description="Доступные материалы"
            icon={Package}
            color="green"
          />
          <StatisticsCard
            title="Заявки"
            value="42"
            description="Всего заявок от клиентов"
            icon={ShoppingCart}
            color="yellow"
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="recent">Последние действия</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Access Cards */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Быстрый доступ</CardTitle>
              </CardHeader>
              <CardContent>
                <QuickAccessCards />
              </CardContent>
            </Card>

            {/* Recent Activity Summary */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Последние действия</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ActivityItem
                    icon={<ShoppingCart className="h-5 w-5 text-yellow-600" />}
                    title="Новая заявка"
                    description="Иван Иванов оставил заявку на окна"
                    timestamp="2 часа назад"
                  />
                  <ActivityItem
                    icon={<Package className="h-5 w-5 text-green-600" />}
                    title="Обновление продукта"
                    description="Обновлен материал 'Премиум стекло'"
                    timestamp="Вчера"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Журнал действий</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <ActivityItem
                      key={i}
                      icon={<ActivityIcon index={i} />}
                      title={getActivityTitle(i)}
                      description={getActivityDescription(i)}
                      timestamp={getActivityTimestamp(i)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Helper components
const ActivityItem = ({
  icon,
  title,
  description,
  timestamp,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  timestamp: string;
}) => (
  <div className="flex items-start space-x-4 p-3 rounded-md hover:bg-gray-50">
    <div className="mt-0.5">{icon}</div>
    <div className="flex-1 space-y-1">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <div className="text-xs text-gray-400">{timestamp}</div>
  </div>
);

// Helper functions for generating sample data
const ActivityIcon = ({ index }: { index: number }) => {
  const icons = [
    <ShoppingCart className="h-5 w-5 text-yellow-600" />,
    <Package className="h-5 w-5 text-green-600" />,
  ];
  return icons[index % icons.length];
};

const getActivityTitle = (index: number) => {
  const titles = [
    "Новая заявка",
    "Обновление продукта",
    "Добавлен материал",
    "Изменена конфигурация системы",
    "Удален продукт",
    "Добавлено новое окно",
    "Обновлены характеристики окна",
    "Добавлена новая система",
  ];
  return titles[index % titles.length];
};

const getActivityDescription = (index: number) => {
  const descriptions = [
    "Иван Иванов оставил заявку на окна",
    "Обновлен материал 'Премиум стекло'",
    "Добавлен новый материал 'Алюминиевая рама'",
    "Обновлены параметры конфигурации окон",
    "Удален устаревший продукт из каталога",
    "Добавлено новое окно 'Панорамное'",
    "Обновлены технические характеристики окна 'Стандарт'",
    "Добавлена новая система 'Эко-стандарт'",
  ];
  return descriptions[index % descriptions.length];
};

const getActivityTimestamp = (index: number) => {
  const timestamps = [
    "2 часа назад",
    "4 часа назад",
    "Вчера",
    "2 дня назад",
    "3 дня назад",
    "Неделю назад",
    "2 недели назад",
    "Месяц назад",
  ];
  return timestamps[index % timestamps.length];
};

export default DashboardOverview;
