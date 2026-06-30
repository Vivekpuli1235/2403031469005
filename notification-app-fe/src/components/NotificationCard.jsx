import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Stack
  direction="row"
  sx={{
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
          <Typography variant="h6" fontWeight={600}>
            {notification.Type}
          </Typography>

          <Chip
            label={notification.Type}
            color="primary"
            size="small"
          />
        </Stack>

        <Typography
          variant="body1"
          sx={{ mt: 2 }}
        >
          {notification.Message}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mt: 2,
            display: "block",
          }}
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}