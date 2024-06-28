import React, {useContext, useState} from 'react';
import {NotificationContext} from '../context/NotificationContext';
import Notification from './Notification';
import {XCircleIcon} from '@heroicons/react/outline';

const NotificationModal: React.FC<{
  toggleModal: () => void;
}> = ({toggleModal}) => {
  const {notifications, markAllAsRead} = useContext(NotificationContext);
  const [view, setView] = useState('all');

  const filteredNotifications =
    view === 'unread' ? notifications.filter((n) => !n.read) : notifications;

  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center'>
      <div className='flex flex-col bg-black rounded-lg p-4 w-96'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-semibold'>Notifications</h2>
          <XCircleIcon
            className='h-8 w-8 cursor-pointer'
            onClick={toggleModal}
          />
        </div>
        <div className='flex justify-around mb-4'>
          <button onClick={() => markAllAsRead()} className='text-blue-500'>
            Mark all as read
          </button>
          <button
            onClick={() => setView('all')}
            className={`py-2 px-4 ${view === 'all' ? 'text-blue-500' : ''}`}
          >
            All
          </button>
          <button
            onClick={() => setView('unread')}
            className={`py-2 px-4 ${view === 'unread' ? 'text-blue-500' : ''}`}
          >
            Unread
          </button>
        </div>
        <div>
          {filteredNotifications.map((notification) => (
            <Notification notification={notification} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
