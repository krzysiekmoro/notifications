import React, {useContext} from 'react';
import {BellIcon} from '@heroicons/react/outline';
import {NotificationContext} from '../context/NotificationContext';

const Navbar: React.FC = () => {
  const {notifications} = useContext(NotificationContext);
  const unreadCount = 2;

  return (
    <nav className='bg-gray-800 p-4 flex justify-between items-center'>
      <h1 className='text-white text-xl'>My App</h1>
      <div className='relative'>
        <BellIcon className='h-8 w-8 text-white cursor-pointer' />
        {unreadCount > 0 && (
          <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'>
            {unreadCount}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;