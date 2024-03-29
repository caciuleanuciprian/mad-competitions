interface ToastProps {
  type: "success" | "error" | "warning" | "info";
  text: string;
  toast: any;
  id: string;
}

export const displayToast = ({ type, text, toast, id }: ToastProps) => {
  if (toast.isActive(id)) return;

  switch (type) {
    case "success":
      toast({
        id: id,
        title: "Success",
        description: text,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      break;
    case "error":
      toast({
        id: id,
        title: "Error",
        description: text,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      break;
    case "warning":
      toast({
        id: id,
        title: "Warning",
        description: text,
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      break;
    case "info":
      toast({
        id: id,
        title: "Info",
        description: text,
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      break;
  }
};
