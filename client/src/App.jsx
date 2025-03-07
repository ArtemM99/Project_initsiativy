import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import LoginForm from './components/ui/LoginForm';
import SignupPage from './components/ui/RegisterPage';
import InitDetail from './components/pages/InitDetail';
import axiosInstance, { setAccessToken } from './axiosInstance';
import { useEffect, useState } from 'react';
import NotFoundPage from './components/pages/NotFoundPage';

function App({handleFilterSelect}) {
  const [user, setUser] = useState();


  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const signupHandler = async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const res = await axiosInstance.post('/auth/register', data);
    if (res.status !== 200) alert('Ошибка регистрации');
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    window.location.href = '/'
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    const res = await axiosInstance.post('/auth/login', data);
    if (res.status !== 200) alert('Ошибка входа');
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    window.location.href = '/'
  };

  const logoutHandler = () => {
    axiosInstance.delete('/auth/logout').finally(() => {
      setUser(null);
      setAccessToken('');
      localStorage.removeItem('user');
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
          <Route path="/" element={<MainPage handleFilterSelect={handleFilterSelect}/>} />
          <Route
            path="/register"
            element={<SignupPage signupHandler={signupHandler} user={user} />}
          />
          <Route path="/login" element={<LoginForm loginHandler={loginHandler} />} />
          <Route path="/card/:id" element={<InitDetail />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
