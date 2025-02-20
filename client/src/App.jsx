import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import LoginForm from './components/ui/LoginForm';
import SignupPage from './components/ui/RegisterForm';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState();
  const signupHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/signup', data);
    // обработка ответа res (сюда допишем позже)
}
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/card/:id" element={<InitDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
