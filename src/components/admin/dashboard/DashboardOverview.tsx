import React from "react";
import {
  BarChart3,
  Package,
  Users,
  DollarSign,
  ShoppingCart,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import StatisticsCard, {
  TotalUsersCard,
  RevenueCard,
  OrdersCard,
} from "./StatisticsCard";
import { QuickAccessCards } from "./QuickAccessCard";

interface DashboardOverviewProps {
  statistics?: {
    totalUsers: number;
    totalRevenue: number;
    newOrders: number;
    activeProducts: number;
  };
}

const DashboardOverview = ({
  statistics = {
    totalUsers: 1234,
    totalRevenue: 45231,
    newOrders: 342,
    activeProducts: 156,
  },
}: DashboardOverviewProps) => {
  return (
    <div className="w-full h-full p-6 bg-gray-50">
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to your admin dashboard.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TotalUsersCard value={statistics.totalUsers.toLocaleString()} />
          <RevenueCard value={`$${statistics.totalRevenue.toLocaleString()}`} />
          <OrdersCard value={statistics.newOrders.toLocaleString()} />
          <StatisticsCard
            title="Active Products"
            value={statistics.activeProducts.toLocaleString()}
            description="+5.2% from last month"
            icon={Package}
            trend={{ value: 5.2, isPositive: true }}
            color="green"
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Access Cards */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <QuickAccessCards />
              </CardContent>
            </Card>

            {/* Recent Activity Summary */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ActivityItem
                    icon={<Users className="h-5 w-5 text-blue-600" />}
                    title="New user registered"
                    description="Jane Smith created a new account"
                    timestamp="2 hours ago"
                  />
                  <ActivityItem
                    icon={<ShoppingCart className="h-5 w-5 text-yellow-600" />}
                    title="New application submitted"
                    description="John Doe submitted a new application for windows"
                    timestamp="4 hours ago"
                  />
                  <ActivityItem
                    icon={<Package className="h-5 w-5 text-green-600" />}
                    title="Product updated"
                    description="Premium Glass material was updated"
                    timestamp="Yesterday"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Analytics Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
                  <div className="flex flex-col items-center text-center p-4">
                    <BarChart3 className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-lg font-medium">
                      Analytics Visualization
                    </p>
                    <p className="text-sm text-gray-500 max-w-md">
                      Charts and graphs would be displayed here to show
                      application trends, user activity, and product performance
                      metrics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity Log</CardTitle>
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
    <Users className="h-5 w-5 text-blue-600" />,
    <ShoppingCart className="h-5 w-5 text-yellow-600" />,
    <Package className="h-5 w-5 text-green-600" />,
    <DollarSign className="h-5 w-5 text-purple-600" />,
  ];
  return icons[index % icons.length];
};

const getActivityTitle = (index: number) => {
  const titles = [
    "New user registered",
    "New application submitted",
    "Product updated",
    "Payment received",
    "User profile updated",
    "New material added",
    "System configuration changed",
    "Customer feedback received",
  ];
  return titles[index % titles.length];
};

const getActivityDescription = (index: number) => {
  const descriptions = [
    "Jane Smith created a new account",
    "John Doe submitted a new application for windows",
    "Premium Glass material was updated",
    "Payment of $1,250 received for order #12345",
    "Michael Johnson updated their profile information",
    "New Aluminum Frame material added to inventory",
    "Window system configuration parameters updated",
    "Customer left a 5-star review for their recent order",
  ];
  return descriptions[index % descriptions.length];
};

const getActivityTimestamp = (index: number) => {
  const timestamps = [
    "2 hours ago",
    "4 hours ago",
    "Yesterday",
    "2 days ago",
    "3 days ago",
    "Last week",
    "2 weeks ago",
    "Last month",
  ];
  return timestamps[index % timestamps.length];
};

export default DashboardOverview;
