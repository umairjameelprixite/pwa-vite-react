interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ToastProps {
  id?: number;
  type: string;
  message: string;
  onClose: () => void;
}
