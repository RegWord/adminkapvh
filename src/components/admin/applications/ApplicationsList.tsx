import React, { useState, useEffect } from "react";
import { useApplications } from "../../../hooks/useApplications";
import { Link } from "react-router-dom";
import { Download, Eye, Trash, MoreHorizontal, RefreshCw } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Application {
  id: string;
  name: string;
  phone_number: string;
}

interface ApplicationsListProps {
  onExport?: () => void;
}

const ApplicationsList = ({
  onExport = () => console.log("Exporting applications"),
}: ApplicationsListProps) => {
  const {
    applications,
    isLoading,
    error,
    refreshApplications,
    filterApplications,
    getApplicationDetails,
    deleteApplication,
  } = useApplications();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [applicationToDelete, setApplicationToDelete] = useState<string | null>(
    null,
  );

  // Обработка поиска
  const handleSearch = () => {
    filterApplications({ search: searchQuery });
  };

  // Просмотр деталей заявки
  const viewApplicationDetails = (application: Application) => {
    setSelectedApplication(application);
    setIsDetailsOpen(true);
  };

  // Удаление заявки
  const handleDeleteClick = (id: string) => {
    setApplicationToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (applicationToDelete) {
      try {
        await deleteApplication(applicationToDelete);
        setIsDeleteDialogOpen(false);
        setApplicationToDelete(null);
      } catch (err) {
        console.error("Error deleting application:", err);
      }
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Заявки клиентов</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => refreshApplications()}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Обновить
            </Button>
            <Button variant="outline" onClick={onExport}>
              <Download className="mr-2 h-4 w-4" />
              Экспорт
            </Button>
          </div>
        </div>

        {/* Поиск */}
        <div className="flex gap-2">
          <Input
            placeholder="Поиск по имени или телефону"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
          <Button onClick={handleSearch}>Поиск</Button>
        </div>

        {/* Таблица заявок */}
        <div className="rounded-md border">
          <Table>
            <TableCaption>Список всех заявок клиентов.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Имя клиента</TableHead>
                <TableHead>Телефон</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-10">
                    <div className="flex justify-center items-center">
                      <RefreshCw className="h-6 w-6 animate-spin text-gray-400 mr-2" />
                      <span>Загрузка заявок...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : applications.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-10">
                    <p className="text-gray-500">Заявки не найдены</p>
                  </TableCell>
                </TableRow>
              ) : (
                applications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className="font-medium">
                      {application.id}
                    </TableCell>
                    <TableCell>{application.name}</TableCell>
                    <TableCell>{application.phone_number}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Открыть меню</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => viewApplicationDetails(application)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Просмотр
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDeleteClick(application.id)}
                            className="text-red-600"
                          >
                            <Trash className="mr-2 h-4 w-4" />
                            Удалить
                          </DropdownMenuItem>
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

      {/* Диалог просмотра деталей */}
      {selectedApplication && (
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="sm:max-w-md">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Детали заявки</h3>
              <div className="grid gap-2">
                <div className="font-medium">ID:</div>
                <div>{selectedApplication.id}</div>
              </div>
              <div className="grid gap-2">
                <div className="font-medium">Имя клиента:</div>
                <div>{selectedApplication.name}</div>
              </div>
              <div className="grid gap-2">
                <div className="font-medium">Телефон:</div>
                <div>{selectedApplication.phone_number}</div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Диалог подтверждения удаления */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Подтверждение удаления</AlertDialogTitle>
            <AlertDialogDescription>
              Вы уверены, что хотите удалить эту заявку? Это действие нельзя
              отменить.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Удалить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ApplicationsList;
