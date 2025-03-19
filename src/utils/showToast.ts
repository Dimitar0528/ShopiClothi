import { toast } from "react-toastify";

export default function showToast(
  message: string,
  message_type: "info" | "success" | "warning" | "error" | "default",
  autoCloseMs = 1500
) {
  toast(message, {
    type: message_type,
    position: "top-right",
    autoClose: autoCloseMs,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    pauseOnFocusLoss: false,
  });
}
