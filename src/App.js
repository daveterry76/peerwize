import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPassword from './pages/Auth/ForgotPassword';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import './styles/main.scss'

function App() {

  useEffect(() => {
    document.title = 'Forgot Password'
  }, []);

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
