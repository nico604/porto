import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './Home';

const PrivateRoute = () => {
  
  return (
    <Routes>
      <Route path="/private" component={Home} />
      <Navigate to='/private' />
    </Routes>
  )
}

export default PrivateRoute;