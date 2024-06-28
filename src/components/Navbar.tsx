import React, {useContext, useState} from 'react';
import {BellIcon} from '@heroicons/react/outline';
import {NotificationContext} from '../context/NotificationContext';
import NotificationModal from './NotificationModal';

const Navbar: React.FC = () => {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const {notifications} = useContext(NotificationContext);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const toggleModal = () => {
    setModalVisibility((state) => !state);
  };

  return (
    <nav className='bg-gray-800 p-4 flex justify-between items-center w-screen'>
      <h1 className='text-white text-xl'>My App</h1>
      <div className='relative' onClick={toggleModal}>
        <BellIcon className='h-8 w-8 text-white cursor-pointer' />
        {unreadCount > 0 && (
          <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'>
            {unreadCount}
          </span>
        )}
      </div>
      {modalVisibility && <NotificationModal toggleModal={toggleModal} />}
    </nav>
  );
};

export default Navbar;
