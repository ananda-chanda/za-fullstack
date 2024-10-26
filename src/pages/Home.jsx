// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4 text-center">
        Welcome to the Channel Partner System
      </h1>
      <p className="text-base sm:text-lg text-center">
        <Link to="/login" className="text-blue-500 hover:text-blue-700 mr-2 sm:mr-4">Login</Link>
        or
        <Link to="/signup" className="text-blue-500 hover:text-blue-700 ml-2 sm:ml-4">Signup </Link>
        to continue.
      </p>
    </div>
  );
}

export default Home;
