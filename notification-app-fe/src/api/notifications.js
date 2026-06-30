const BASE_URL = "http://4.224.186.213/evaluation-service";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDAzMDMxNDY5MDA1QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc4MjgxNTU0NSwiaWF0IjoxNzgyODE0NjQ1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNTFhMWZhYjMtM2FjZS00YTAyLWFjNjMtM2YyYjc0Yjc1NGVmIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHVsaSB2aXZlayIsInN1YiI6IjZjNmE5MjhmLTE2NGUtNDk4MC04OTIxLWJjNWZlNWJmYjczNCJ9LCJlbWFpbCI6IjI0MDMwMzE0NjkwMDVAcGFydWx1bml2ZXJzaXR5LmFjLmluIiwibmFtZSI6InB1bGkgdml2ZWsiLCJyb2xsTm8iOiIyNDAzMDMxNDY5MDA1IiwiYWNjZXNzQ29kZSI6ImNKcWFFQiIsImNsaWVudElEIjoiNmM2YTkyOGYtMTY0ZS00OTgwLTg5MjEtYmM1ZmU1YmZiNzM0IiwiY2xpZW50U2VjcmV0Ijoia0JZYlpNWndYcHVhdEhnVyJ9.Gf1jr_Bi3jRRAiVP5MAV0IEOxZtuN9AxJAEiQdcifQA"
export async function fetchNotifications(page = 1, limit = 10, type = "") {
  const url = new URL(`${BASE_URL}/notifications`);

  url.searchParams.append("page", page);
  url.searchParams.append("limit", limit);

  if (type && type !== "All") {
    url.searchParams.append("notification_type", type);
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return await response.json();
}