import axios from 'axios';

const api_url = "http://localhost:3000/api/auth";

export const signup = async (userData) => {
    return axios.post(`${api_url}/signup`, userData);
};

export const login = async (userData) => {
    return axios.post(`${api_url}/signin`, userData);
};