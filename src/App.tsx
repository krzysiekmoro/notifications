import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import NotificationProvider from './context/NotificationContext';
import Home from './pages/Home.tsx';
import RequestPage from './pages/RequestPage';
import StatusChangePage from './pages/StatusChange';
import NewFeaturePage from './pages/NewFeature';

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <Router>
        <Navbar />
        <div className='p-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/request' element={<RequestPage />} />
            <Route path='/status-change' element={<StatusChangePage />} />
            <Route path='/new-feature' element={<NewFeaturePage />} />
          </Routes>
        </div>
      </Router>
    </NotificationProvider>
  );
};

export default App;
