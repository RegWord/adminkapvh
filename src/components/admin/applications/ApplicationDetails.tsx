import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Package,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  submittedDate: string;
}

interface ProductItem {
  id: string;
  name: string;
  type: string;
  quantity: number;
  details: string;
}

interface ApplicationStatus {
  status: "pending" | "approved" | "rejected" | "in-progress";
  lastUpdated: string;
  notes?: string;
}

interface ApplicationDetailsProps {
  applicationId?: string;
  customerInfo?: CustomerInfo;
  products?: ProductItem[];
  status?: ApplicationStatus;
  onClose?: () => void;
}

const ApplicationDetails = ({
  applicationId = "APP-12345",
  customerInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, USA 12345",
    submittedDate: "2023-06-15T10:30:00Z",
  },
  products = [
    {
      id: "PROD-001",
      name: "Double-Hung Window",
      type: "Window",
      quantity: 4,
      details: 'White vinyl, energy efficient, 36" x 60"',
    },
    {
      id: "PROD-002",
      name: "Casement Window",
      type: "Window",
      quantity: 2,
      details: 'Black aluminum, sound insulation, 24" x 48"',
    },
    {
      id: "MAT-001",
      name: "Premium Glass",
      type: "Material",
      quantity: 6,
      details: "Triple-pane, UV protection",
    },
  ],
  status = {
    status: "in-progress",
    lastUpdated: "2023-06-18T14:45:00Z",
    notes: "Customer requested a follow-up call about installation timeline.",
  },
  onClose = () => console.log("Close application details"),
}: ApplicationDetailsProps) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Status badge color mapping
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge variant="secondary">Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "in-progress":
        return <Badge variant="default">In Progress</Badge>;
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Application Details</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Application ID: {applicationId}
          </span>
          {getStatusBadge(status.status)}
        </div>
      </div>

      <Tabs defaultValue="customer" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6 w-full max-w-md">
          <TabsTrigger value="customer">Customer Info</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="status">Status</TabsTrigger>
        </TabsList>

        <TabsContent value="customer" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>
                Details about the application customer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">{customerInfo.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p>{customerInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p>{customerInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p>{customerInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">
                    Submitted on {formatDate(customerInfo.submittedDate)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Selected Products</CardTitle>
              <CardDescription>
                Products included in this application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="border rounded-md p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-gray-500" />
                        <h3 className="font-medium">{product.name}</h3>
                      </div>
                      <Badge variant="outline">{product.type}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-2">
                      <div>Quantity: {product.quantity}</div>
                      <div>ID: {product.id}</div>
                    </div>
                    <p className="text-sm mt-2">{product.details}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                Total Items:{" "}
                {products.reduce((sum, product) => sum + product.quantity, 0)}
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="status" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
              <CardDescription>Current status and history</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Current Status</p>
                  <div className="mt-1">{getStatusBadge(status.status)}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">Last Updated</p>
                  <p className="text-sm text-gray-600">
                    {formatDate(status.lastUpdated)}
                  </p>
                </div>
              </div>
              {status.notes && (
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Notes</p>
                    <p className="text-sm text-gray-600">{status.notes}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApplicationDetails;
