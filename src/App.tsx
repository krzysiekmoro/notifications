import React from 'react';
import Navbar from './components/Navbar';
import {NotificationContext} from './context/NotificationContext';

const App: React.FC = () => {
  return (
    <NotificationContext.Provider value={{notifications: []}}>
      <Navbar />
      <div className='p-4'></div>
    </NotificationContext.Provider>
  );
};

export default App;
