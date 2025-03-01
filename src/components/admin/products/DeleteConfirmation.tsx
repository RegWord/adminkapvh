import React from "react";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface DeleteConfirmationProps {
  title?: string;
  description?: string;
  itemName?: string;
  itemType?: string;
  isOpen?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const DeleteConfirmation = ({
  title = "Delete Confirmation",
  description = "Are you sure you want to delete this item? This action cannot be undone.",
  itemName = "Product",
  itemType = "item",
  isOpen = true,
  onConfirm = () => console.log("Delete confirmed"),
  onCancel = () => console.log("Delete cancelled"),
}: DeleteConfirmationProps) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="sm"
          className="bg-red-600 hover:bg-red-700"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
            {itemName && (
              <span className="font-medium block mt-2">
                Item: <span className="text-red-600">{itemName}</span>
              </span>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Delete {itemType}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmation;
