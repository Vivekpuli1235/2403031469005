import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(page = 1, filter = "All") {
  const [notifications, setNotifications] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchNotifications(page, 10, filter);

        setNotifications(data.notifications || []);

        if (data.totalPages) {
          setTotalPages(data.totalPages);
        } else if (data.total) {
          setTotalPages(Math.ceil(data.total / 10));
        } else {
          setTotalPages(1);
        }
      } catch (err) {
        setNotifications([]);
        setError(err.message || "Failed to fetch notifications");
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, [page, filter]);

  return {
    notifications,
    totalPages,
    loading,
    error,
  };
}