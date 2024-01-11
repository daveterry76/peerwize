import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ChatRoom from './components/Community/ChatRoom';
import ForgotPassword from './pages/Auth/ForgotPassword';
import LogIn from './pages/Auth/LogIn';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Dashboard';
import Community from './pages/Dashboard/Community';
import Profile from './pages/Dashboard/Profile';
import ResourceLibrary, { Resources, SavedCourses } from './pages/Dashboard/Resources';
import './styles/main.scss'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

        <Route path='/dashboard' element={<Dashboard title="Dashboard" />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/community' element={<Community />}>
          <Route exact path=':roomId' element={<ChatRoom />} />
        </Route>
        <Route path='/resourceLibrary' element={<ResourceLibrary />}>
          <Route exact path='/resourceLibrary/resource' element={<Resources />} />
          <Route exact path='/resourceLibrary/saved' element={<SavedCourses />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
