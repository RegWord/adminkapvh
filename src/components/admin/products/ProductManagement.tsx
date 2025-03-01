import React, { useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import DeleteConfirmation from "./DeleteConfirmation";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState("windows");
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  // Sample data for each product type
  const windowsData = [
    {
      id: "w1",
      name: "Standard Double-Hung Window",
      description: "Traditional double-hung window with two operable sashes",
      category: "double-hung",
      status: "active",
      createdAt: "2023-05-15T10:30:00Z",
      updatedAt: "2023-06-20T14:45:00Z",
    },
    {
      id: "w2",
      name: "Casement Window",
      description: "Window that opens outward with a crank mechanism",
      category: "casement",
      status: "active",
      createdAt: "2023-04-10T09:15:00Z",
      updatedAt: "2023-06-18T11:20:00Z",
    },
    {
      id: "w3",
      name: "Bay Window",
      description: "Projecting window that forms a bay in a room",
      category: "bay",
      status: "inactive",
      createdAt: "2023-02-18T08:30:00Z",
      updatedAt: "2023-04-25T10:15:00Z",
    },
  ] as Product[];

  const materialsData = [
    {
      id: "m1",
      name: "Premium Glass",
      description: "High-quality triple-glazed glass material",
      category: "glass",
      status: "active",
      createdAt: "2023-04-10T09:15:00Z",
      updatedAt: "2023-06-18T11:20:00Z",
    },
    {
      id: "m2",
      name: "Aluminum Frame",
      description: "Durable aluminum window frame material",
      category: "aluminum",
      status: "active",
      createdAt: "2023-01-05T15:20:00Z",
      updatedAt: "2023-03-12T09:45:00Z",
    },
    {
      id: "m3",
      name: "Vinyl Siding",
      description: "Weather-resistant vinyl siding material",
      category: "vinyl",
      status: "active",
      createdAt: "2023-03-22T13:45:00Z",
      updatedAt: "2023-05-30T16:10:00Z",
    },
  ] as Product[];

  const systemsData = [
    {
      id: "s1",
      name: "Eco-Friendly System",
      description: "Energy-efficient window system",
      category: "residential",
      status: "active",
      createdAt: "2023-03-22T13:45:00Z",
      updatedAt: "2023-05-30T16:10:00Z",
    },
    {
      id: "s2",
      name: "Commercial Grade System",
      description: "Heavy-duty system for commercial buildings",
      category: "commercial",
      status: "active",
      createdAt: "2023-02-15T11:30:00Z",
      updatedAt: "2023-04-20T13:15:00Z",
    },
  ] as Product[];

  // Handle product edit
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  // Handle product delete
  const handleDeleteProduct = (product: Product) => {
    setProductToDelete(product);
    setShowDeleteDialog(true);
  };

  // Используем хук для работы с продуктами
  const { createProduct, updateProduct, deleteProduct } = useProducts(
    activeTab as "windows" | "materials" | "systems",
  );

  // Handle form submission
  const handleFormSubmit = async (data: any) => {
    try {
      if (editingProduct) {
        await updateProduct(activeTab, editingProduct.id, data);
      } else {
        await createProduct(activeTab, data);
      }
      setShowForm(false);
      setEditingProduct(null);
    } catch (err) {
      console.error("Error saving product:", err);
      // Здесь можно добавить отображение ошибки пользователю
    }
  };

  // Handle delete confirmation
  const handleDeleteConfirm = async () => {
    if (!productToDelete) return;

    try {
      await deleteProduct(activeTab, productToDelete.id);
      setShowDeleteDialog(false);
      setProductToDelete(null);
    } catch (err) {
      console.error("Error deleting product:", err);
      // Здесь можно добавить отображение ошибки пользователю
    }
  };

  // Get the appropriate product type based on active tab
  const getProductType = () => {
    switch (activeTab) {
      case "windows":
        return "window";
      case "materials":
        return "material";
      case "systems":
        return "system";
      default:
        return "window";
    }
  };

  // Get the appropriate product data based on active tab
  const getProductData = () => {
    switch (activeTab) {
      case "windows":
        return windowsData;
      case "materials":
        return materialsData;
      case "systems":
        return systemsData;
      default:
        return [];
    }
  };

  return (
    <div className="w-full h-full bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add New Product
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="windows">Windows</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="systems">Systems</TabsTrigger>
        </TabsList>

        <TabsContent value="windows">
          <ProductList
            products={windowsData}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            title="Windows"
          />
        </TabsContent>

        <TabsContent value="materials">
          <ProductList
            products={materialsData}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            title="Materials"
          />
        </TabsContent>

        <TabsContent value="systems">
          <ProductList
            products={systemsData}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            title="Systems"
          />
        </TabsContent>
      </Tabs>

      {/* Product Form Dialog */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="max-h-[90vh] overflow-y-auto">
            <ProductForm
              initialData={
                editingProduct
                  ? {
                      name: editingProduct.name,
                      description: editingProduct.description,
                      price: "0.00", // Assuming price is not in the Product interface
                      category: editingProduct.category,
                      status: editingProduct.status,
                      sku: "", // Assuming SKU is not in the Product interface
                    }
                  : undefined
              }
              productType={getProductType()}
              onSubmit={handleFormSubmit}
              onCancel={() => {
                setShowForm(false);
                setEditingProduct(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && productToDelete && (
        <DeleteConfirmation
          isOpen={showDeleteDialog}
          itemName={productToDelete.name}
          itemType={getProductType()}
          onConfirm={handleDeleteConfirm}
          onCancel={() => {
            setShowDeleteDialog(false);
            setProductToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default ProductManagement;
