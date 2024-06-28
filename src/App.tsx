import React from 'react';
import Navbar from './components/Navbar';
import NotificationProvider from './context/NotificationContext';

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <Navbar />
      <div className='p-4'></div>
    </NotificationProvider>
  );
};

export default App;
