import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Eye, Filter, MoreHorizontal, RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import ApplicationFilters from "./ApplicationFilters";
import ApplicationDetails from "./ApplicationDetails";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Application {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  status: "pending" | "approved" | "rejected" | "in-progress";
  submittedDate: string;
  productCount: number;
}

interface ApplicationsListProps {
  applications?: Application[];
  isLoading?: boolean;
  onRefresh?: () => void;
  onExport?: () => void;
}

const ApplicationsList = ({
  applications = [
    {
      id: "APP-12345",
      customerName: "John Doe",
      email: "john.doe@example.com",
      phone: "(555) 123-4567",
      status: "pending",
      submittedDate: "2023-06-15T10:30:00Z",
      productCount: 3,
    },
    {
      id: "APP-12346",
      customerName: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "(555) 987-6543",
      status: "approved",
      submittedDate: "2023-06-14T09:15:00Z",
      productCount: 5,
    },
    {
      id: "APP-12347",
      customerName: "Robert Johnson",
      email: "robert.johnson@example.com",
      phone: "(555) 456-7890",
      status: "rejected",
      submittedDate: "2023-06-13T14:45:00Z",
      productCount: 2,
    },
    {
      id: "APP-12348",
      customerName: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "(555) 234-5678",
      status: "in-progress",
      submittedDate: "2023-06-12T11:20:00Z",
      productCount: 4,
    },
    {
      id: "APP-12349",
      customerName: "Michael Wilson",
      email: "michael.wilson@example.com",
      phone: "(555) 876-5432",
      status: "pending",
      submittedDate: "2023-06-11T16:10:00Z",
      productCount: 1,
    },
  ],
  isLoading = false,
  onRefresh = () => console.log("Refreshing applications"),
  onExport = () => console.log("Exporting applications"),
}: ApplicationsListProps) => {
  const [filteredApplications, setFilteredApplications] =
    useState<Application[]>(applications);
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Handle search filter
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredApplications(applications);
      return;
    }

    const filtered = applications.filter(
      (app) =>
        app.customerName.toLowerCase().includes(query.toLowerCase()) ||
        app.email.toLowerCase().includes(query.toLowerCase()) ||
        app.id.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredApplications(filtered);
  };

  // Handle status filter
  const handleStatusChange = (status: string) => {
    if (status === "all") {
      setFilteredApplications(applications);
      return;
    }

    const filtered = applications.filter((app) => app.status === status);
    setFilteredApplications(filtered);
  };

  // Handle date range filter
  const handleDateRangeChange = (dateRange: any) => {
    if (!dateRange?.from) {
      setFilteredApplications(applications);
      return;
    }

    const filtered = applications.filter((app) => {
      const appDate = new Date(app.submittedDate);
      const fromDate = new Date(dateRange.from);
      fromDate.setHours(0, 0, 0, 0);

      let toDate;
      if (dateRange.to) {
        toDate = new Date(dateRange.to);
        toDate.setHours(23, 59, 59, 999);
        return appDate >= fromDate && appDate <= toDate;
      }

      return appDate >= fromDate;
    });

    setFilteredApplications(filtered);
  };

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge variant="success" className="bg-green-100 text-green-800">
            Approved
          </Badge>
        );
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "in-progress":
        return <Badge variant="default">In Progress</Badge>;
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  // View application details
  const viewApplicationDetails = (application: Application) => {
    setSelectedApplication(application);
    setIsDetailsOpen(true);
  };

  return (
    <div className="w-full bg-white">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Customer Applications</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onRefresh}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button variant="outline" onClick={onExport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Filters */}
        <ApplicationFilters
          onSearch={handleSearch}
          onStatusChange={handleStatusChange}
          onDateRangeChange={handleDateRangeChange}
        />

        {/* Applications Table */}
        <div className="rounded-md border">
          <Table>
            <TableCaption>A list of all customer applications.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Application ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted Date</TableHead>
                <TableHead>Products</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10">
                    <div className="flex justify-center items-center">
                      <RefreshCw className="h-6 w-6 animate-spin text-gray-400 mr-2" />
                      <span>Loading applications...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredApplications.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10">
                    <p className="text-gray-500">No applications found</p>
                    <Button
                      variant="link"
                      onClick={() => {
                        setFilteredApplications(applications);
                      }}
                      className="mt-2"
                    >
                      Reset filters
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                filteredApplications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className="font-medium">
                      {application.id}
                    </TableCell>
                    <TableCell>{application.customerName}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{application.email}</div>
                        <div className="text-gray-500">{application.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(application.status)}</TableCell>
                    <TableCell>
                      {formatDate(application.submittedDate)}
                    </TableCell>
                    <TableCell>{application.productCount}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <Dialog
                            open={
                              isDetailsOpen &&
                              selectedApplication?.id === application.id
                            }
                            onOpenChange={setIsDetailsOpen}
                          >
                            <DialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={(e) => {
                                  e.preventDefault();
                                  viewApplicationDetails(application);
                                }}
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0">
                              {selectedApplication && (
                                <ApplicationDetails
                                  applicationId={selectedApplication.id}
                                  customerInfo={{
                                    name: selectedApplication.customerName,
                                    email: selectedApplication.email,
                                    phone: selectedApplication.phone,
                                    address: "123 Main St, Anytown, USA 12345", // Placeholder
                                    submittedDate:
                                      selectedApplication.submittedDate,
                                  }}
                                  status={{
                                    status: selectedApplication.status,
                                    lastUpdated:
                                      selectedApplication.submittedDate,
                                    notes:
                                      "Customer requested a follow-up call about installation timeline.",
                                  }}
                                  onClose={() => setIsDetailsOpen(false)}
                                />
                              )}
                            </DialogContent>
                          </Dialog>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsList;
