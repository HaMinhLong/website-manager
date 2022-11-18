import { NotificationManager } from "react-notifications";

const createNotification = (
  type: "info" | "success" | "warning" | "error",
  message: string
) => {
  if (type === "success") return NotificationManager.success(message, "", 3000);
  else if (type === "info") return NotificationManager.info(message, "", 3000);
  else if (type === "warning") NotificationManager.warning(message, "", 3000);
  else if (type === "error") NotificationManager.error(message, "", 3000);
};

export default createNotification;
