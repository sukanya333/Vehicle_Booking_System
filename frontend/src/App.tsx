// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import UsersPage from './pages/UserPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user/createUser" element={<UserForm />} />
        <Route path="/user/updateUser/:id" element={<UserForm />} />
        <Route path="/user/getUserById/:id" element={<UserForm />} />
        <Route path="/user/deleteUser/:id" element={<UserForm />} />
        <Route path="/user/bulkDeleteUsers" element={<UserForm />} />
      </Routes>
    </Router>
  );
};

export default App;
