import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Package, FileText } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuickAccessCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  linkTo?: string;
  linkText?: string;
}

const QuickAccessCard = ({
  title = "Управление продуктами",
  description = "Управление продуктами, материалами и системами",
  icon = <Package className="h-8 w-8 text-primary" />,
  linkTo = "/admin/products",
  linkText = "Управление продуктами",
}: QuickAccessCardProps) => {
  return (
    <Card className="w-full max-w-[380px] h-[200px] bg-white flex flex-col justify-between transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          {icon}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
          <Link to={linkTo} className="flex items-center gap-2 text-primary">
            {linkText} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const QuickAccessCards = () => {
  const cards = [
    {
      title: "Управление окнами",
      description: "Создание, редактирование и управление окнами",
      icon: <Layers className="h-8 w-8 text-primary" />,
      linkTo: "/admin/products/windows",
      linkText: "Управление окнами",
    },
    {
      title: "Управление материалами",
      description: "Управление всеми материалами в системе",
      icon: <Package className="h-8 w-8 text-primary" />,
      linkTo: "/admin/products/materials",
      linkText: "Управление материалами",
    },
    {
      title: "Заявки клиентов",
      description: "Просмотр и управление заявками клиентов",
      icon: <FileText className="h-8 w-8 text-primary" />,
      linkTo: "/admin/applications",
      linkText: "Просмотр заявок",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <QuickAccessCard key={index} {...card} />
      ))}
    </div>
  );
};

export default QuickAccessCard;
