// src/components/PartnerDashboard/PartnerDashboard.js
import React, { useEffect, useState } from 'react';
import api from '../../utils/Api';

function PartnerDashboard() {
  const [openings, setOpenings] = useState([]);

  useEffect(() => {
    const fetchOpenings = async () => {
      try {
        const response = await api.get('/openings');
        console.log(response.data); // Log the data to see its structure
        setOpenings(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching openings:', error);
      }
    };
    
    fetchOpenings();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Partner Dashboard</h2>
      <div className="w-full max-w-lg space-y-4">
        {openings.length > 0 ? (
          openings.map((opening) => (
            <div
              key={opening._id} // Adjusted to use a unique identifier (_id)
              className="p-4 bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-medium text-gray-700">{opening.title}</h3>
              <button
                className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Apply
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No openings available.</p> // Fallback in case openings is empty
        )}
      </div>
    </div>
  );
}

export default PartnerDashboard;
