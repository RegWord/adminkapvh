import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  brands?: string[];
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  imagePath,
  brands = [],
  link,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white">
      <div className="aspect-video bg-gray-200 relative">
        <img
          src={
            imagePath ||
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
          }
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        {brands && brands.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">Бренды:</p>
            <p className="text-sm">{brands.join(", ")}</p>
          </div>
        )}

        <Button
          asChild
          variant="ghost"
          className="p-0 hover:bg-transparent text-primary"
        >
          <Link to={link} className="flex items-center">
            Подробнее <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
