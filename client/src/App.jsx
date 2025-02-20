import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import LoginForm from './components/ui/LoginForm';
import SignupPage from './components/ui/RegisterPage';
import InitDetail from './components/pages/InitDetail';
import axiosInstance, { setAccessToken } from './axiosInstance';
import { useState } from 'react';
import NavBar from './components/ui/NavBar';

function App() {
  const [user, setUser] = useState();

  const signupHandler = async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));

    const res = await axiosInstance.post('/auth/register', data);
    if (res.status !== 200) alert('Ошибка регистрации');
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
    // if(response.data && response.data.user){
    //   Navigate('/')
    //   }else{
    //     alert('error')
    //   }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    const res = await axiosInstance.post('/auth/login', data);
    if (res.status !== 200) alert('Ошибка входа');
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route element={<Layout user={user} />}>
          <Route element={<NavBar user={user} />} />
          <Route
            path="/register"
            element={<SignupPage signupHandler={signupHandler} user={user} />}
          />
          <Route path="/login" element={<LoginForm loginHandler={loginHandler} />} />
          <Route path="/card/:id" element={<InitDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
