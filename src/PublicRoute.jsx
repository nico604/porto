import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './Home';

const PublicRoute = () => {
  
  return (
    <Routes>
      <Route path="/login" component={Login} />
      <Navigate to='/' />
    </Routes>
  )
}

export default PublicRoute;