// src/components/CompanyDashboard/CompanyDashboard.js
import React, { useState } from 'react';
import api from '../../utils/Api';

function CompanyDashboard() {
  const [formData, setFormData] = useState({ title: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/openings', formData);
      alert('Opening posted successfully');
    } catch (error) {
      console.error('Error posting opening:', error);
    }
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Company Dashboard</h2>
        <input
          type="text"
          name="title"
          placeholder="Opening Title"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Post Opening
        </button>
      </form>
    </div>
  );
}

export default CompanyDashboard;
