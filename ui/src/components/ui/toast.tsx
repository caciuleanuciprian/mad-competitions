interface ToastProps {
  type: "success" | "error" | "warning" | "info";
  text: string;
  toast: any;
}

export const displayToast = ({ type, text, toast }: ToastProps) => {
  switch (type) {
    case "success":
      toast({
        title: "Success",
        description: text,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      break;
    case "error":
      toast({
        title: "Error",
        description: text,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      break;
    case "warning":
      toast({
        title: "Warning",
        description: text,
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      break;
    case "info":
      toast({
        title: "Info",
        description: text,
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      break;
  }
};
