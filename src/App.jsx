// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import PartnerDashboard from './components/partnerDashboard/PartnerDashboard.jsx';
import CompanyDashboard from './components/companyDashBoard/CompanyDashBoard.jsx';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/partner-dashboard" element={<PartnerDashboard />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
