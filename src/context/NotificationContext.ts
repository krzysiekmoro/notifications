import {createContext} from 'react';
import { INotification } from '../types/Notification';

interface INotificationContextType {
  notifications: INotification[];
  markAsRead: (id: number) => void;
}

export const NotificationContext = createContext<INotificationContextType>({
  notifications: [],
  markAsRead: () => {},
});
