import React, { useState } from "react";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
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

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

interface ProductListProps {
  products?: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (product: Product) => void;
  title?: string;
}

const ProductList = ({
  products = [
    {
      id: "1",
      name: "Standard Window",
      description: "A standard double-glazed window",
      category: "windows",
      status: "active",
      createdAt: "2023-05-15T10:30:00Z",
      updatedAt: "2023-06-20T14:45:00Z",
    },
    {
      id: "2",
      name: "Premium Glass",
      description: "High-quality triple-glazed glass material",
      category: "materials",
      status: "active",
      createdAt: "2023-04-10T09:15:00Z",
      updatedAt: "2023-06-18T11:20:00Z",
    },
    {
      id: "3",
      name: "Eco-Friendly System",
      description: "Energy-efficient window system",
      category: "systems",
      status: "active",
      createdAt: "2023-03-22T13:45:00Z",
      updatedAt: "2023-05-30T16:10:00Z",
    },
    {
      id: "4",
      name: "Bay Window",
      description: "Projecting window that forms a bay in a room",
      category: "windows",
      status: "inactive",
      createdAt: "2023-02-18T08:30:00Z",
      updatedAt: "2023-04-25T10:15:00Z",
    },
    {
      id: "5",
      name: "Aluminum Frame",
      description: "Durable aluminum window frame material",
      category: "materials",
      status: "active",
      createdAt: "2023-01-05T15:20:00Z",
      updatedAt: "2023-03-12T09:45:00Z",
    },
  ],
  onEdit = () => {},
  onDelete = () => {},
  title = "Products",
}: ProductListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    onEdit(product);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
    onDelete(product);
  };

  return (
    <div className="w-full bg-white rounded-md shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Button>Add New {title.slice(0, -1)}</Button>
      </div>

      <Table>
        <TableCaption>A list of {title.toLowerCase()}.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="capitalize">{product.category}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${product.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                >
                  {product.status}
                </span>
              </TableCell>
              <TableCell>{formatDate(product.createdAt)}</TableCell>
              <TableCell>{formatDate(product.updatedAt)}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEdit(product)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDelete(product)}>
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductList;
