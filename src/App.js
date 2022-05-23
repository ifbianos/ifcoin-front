import React from 'react';
import { LoginPage } from './pages/login-page/login-page';
import SignIpPage from './pages/signip-page/signip-page';

import './App.css';
import { LoginPassword } from './components/login-password/login-password';
function App() {
  return (
     <div className='app'>
       {/* <LoginPage /> */}
       <SignIpPage />
       {/* <LoginPassword /> */}
     </div>
  );
}

export default App;