import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import OpenAccount from './components/OpenAccount';
import Accounts from './Customers/Accounts';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Login />} />       {/* Route for Login */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/openaccount" element={<OpenAccount/>} />
        <Route path="/accounts" element={<Accounts />} /> 
      </Routes>
    </Router>
  );
}

export default App;
