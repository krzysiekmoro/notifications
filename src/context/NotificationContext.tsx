import React, {createContext, useState, useEffect} from 'react';
import {INotification} from '../types/Notification';

interface INotificationContextType {
  notifications: INotification[];
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
}

export const NotificationContext = createContext<INotificationContextType>({
  notifications: [],
  markAsRead: () => {},
  markAllAsRead: () => {},
});

const NotificationProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    const savedNotifications = localStorage.getItem('notifications');
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? {...n, read: true} : n)),
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({...n, read: true})));
  };

  return (
    <NotificationContext.Provider
      value={{notifications, markAsRead, markAllAsRead}}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
