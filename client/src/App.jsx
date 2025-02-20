import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import LoginForm from './components/ui/LoginForm';
import SignupPage from './components/SignupPage';
import TwoInit from './components/pages/twoinit';

function App() {
  const [user, setUser] = useState();

  const signupHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/signup', data);
    if (res.status !== 200) alert('Ошибка регистрации');
    setUser(res.data.user);
  };

  return (
    <Router>
      <Layout user={user}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignupPage handleSignup={signupHandler} />} />
          <Route path="/twoinit" element={<TwoInit />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;




