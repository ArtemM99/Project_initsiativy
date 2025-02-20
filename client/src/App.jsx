import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import LoginForm from './components/ui/LoginForm';
import SignupPage from './components/ui/RegisterForm';
import InitDetail from './components/pages/InitDetail';


function App() {
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
