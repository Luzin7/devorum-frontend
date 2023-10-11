export interface NotificationProps {
  title: string;
  content: string;
  recipientId: string;
  createdAt: Date;
  readAt: Date | null;
}
