import { UUID } from 'crypto';
import { NotificationProps } from './INotification';

export interface UserProps {
  id: UUID;
  name: string;
  email: string;
  notifications: NotificationProps[];
}
