// src/api/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://swapi.py4e.com/api',  // ← mirror de SWAPI con SSL ok
    timeout: 5000,
});

export default api;

