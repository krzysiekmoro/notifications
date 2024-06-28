import React, {useContext} from 'react';
import {INotification} from '../types/Notification';
import {NotificationContext} from '../context/NotificationContext';

interface INotificationProps {
  notification: INotification;
}

const Notification: React.FC<INotificationProps> = ({notification}) => {
  const {markAsRead} = useContext(NotificationContext);

  return (
    <div
      className={`p-2 mb-2 ${
        notification.read ? 'bg-gray-200' : 'bg-white'
      } border rounded flex justify-between items-center`}
    >
      <p className='text-black'>{notification.message}</p>
      {!notification.read && (
        <button
          onClick={() => markAsRead(notification.id)}
          className='w-4 h-4 bg-blue-500 rounded-full'
        ></button>
      )}
    </div>
  );
};

export default Notification;
