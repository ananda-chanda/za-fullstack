// src/utils/api.js
import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:5173/api', // Update this to match your backend URL
  headers: {
    'Content-Type': 'application/json',
  },            
});

export default Api;   
