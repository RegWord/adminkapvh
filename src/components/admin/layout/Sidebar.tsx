import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Layers,
  Boxes,
  FileText,
  LogOut,
  ChevronDown,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarProps {
  onLogout?: () => void;
}

const Sidebar = ({
  onLogout = () => console.log("Logout clicked"),
}: SidebarProps) => {
  const location = useLocation();
  const [productsOpen, setProductsOpen] = React.useState(true);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const NavItem = ({
    to,
    icon: Icon,
    children,
  }: {
    to: string;
    icon: React.ElementType;
    children: React.ReactNode;
  }) => (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
        isActive(to)
          ? "bg-primary/10 text-primary"
          : "text-gray-600 hover:text-primary hover:bg-gray-100",
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </Link>
  );

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">Админ панель</h1>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        <NavItem to="/admin/dashboard" icon={LayoutDashboard}>
          Панель управления
        </NavItem>

        <div className="py-2">
          <Collapsible
            open={productsOpen}
            onOpenChange={setProductsOpen}
            className="w-full"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-100 rounded-md transition-colors">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5" />
                <span>Управление продуктами</span>
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  productsOpen ? "transform rotate-180" : "",
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-10 space-y-1 mt-1">
              <NavItem to="/admin/products/windows" icon={Layers}>
                Окна
              </NavItem>
              <NavItem to="/admin/products/materials" icon={Boxes}>
                Материалы
              </NavItem>
              <NavItem to="/admin/products/systems" icon={Package}>
                Системы
              </NavItem>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <NavItem to="/admin/applications" icon={FileText}>
          Заявки
        </NavItem>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Выход</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
