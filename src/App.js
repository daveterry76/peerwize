import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPassword from './pages/Auth/ForgotPassword';
import LogIn from './pages/Auth/LogIn';
import SignUp from './pages/Auth/SignUp';
import './styles/main.scss'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
