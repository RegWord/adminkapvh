import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, ShoppingCart, DollarSign } from "lucide-react";

interface StatisticsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ElementType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: "default" | "blue" | "green" | "yellow" | "red";
}

const StatisticsCard = ({
  title = "Statistics",
  value = "0",
  description = "Description of this statistic",
  icon: Icon = Activity,
  trend = { value: 0, isPositive: true },
  color = "default",
}: StatisticsCardProps) => {
  // Map color to background and icon colors
  const colorMap = {
    default: {
      bgLight: "bg-gray-100",
      bgDark: "bg-gray-200",
      iconColor: "text-gray-700",
    },
    blue: {
      bgLight: "bg-blue-100",
      bgDark: "bg-blue-200",
      iconColor: "text-blue-700",
    },
    green: {
      bgLight: "bg-green-100",
      bgDark: "bg-green-200",
      iconColor: "text-green-700",
    },
    yellow: {
      bgLight: "bg-yellow-100",
      bgDark: "bg-yellow-200",
      iconColor: "text-yellow-700",
    },
    red: {
      bgLight: "bg-red-100",
      bgDark: "bg-red-200",
      iconColor: "text-red-700",
    },
  };

  const { bgLight, bgDark, iconColor } = colorMap[color];

  return (
    <Card className="w-full max-w-[280px] h-[150px] overflow-hidden shadow-md bg-white">
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-medium text-gray-500">
            {title}
          </CardTitle>
          <div className={`p-2 rounded-full ${bgLight}`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="flex flex-col space-y-1">
          <p className="text-2xl font-bold">{value}</p>
          <div className="flex items-center space-x-2">
            {trend && (
              <span
                className={`text-xs font-medium flex items-center ${trend.isPositive ? "text-green-600" : "text-red-600"}`}
              >
                {trend.isPositive ? "↑" : "↓"} {trend.value}%
              </span>
            )}
            <p className="text-xs text-gray-500">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Example usage components for demonstration
export const TotalUsersCard = (props: Partial<StatisticsCardProps>) => (
  <StatisticsCard
    title="Total Users"
    value="1,234"
    description="+12% from last month"
    icon={Users}
    trend={{ value: 12, isPositive: true }}
    color="blue"
    {...props}
  />
);

export const RevenueCard = (props: Partial<StatisticsCardProps>) => (
  <StatisticsCard
    title="Total Revenue"
    value="$45,231"
    description="+8.2% from last month"
    icon={DollarSign}
    trend={{ value: 8.2, isPositive: true }}
    color="green"
    {...props}
  />
);

export const OrdersCard = (props: Partial<StatisticsCardProps>) => (
  <StatisticsCard
    title="New Orders"
    value="342"
    description="-3.5% from last week"
    icon={ShoppingCart}
    trend={{ value: 3.5, isPositive: false }}
    color="yellow"
    {...props}
  />
);

export default StatisticsCard;
