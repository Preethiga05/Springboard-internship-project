import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Backend URL

// Sign up API call
export const signUp = async (user) => {
    const response = await axios.post(`${API_URL}/auth/signup`, user);
    return response.data;
};

// Sign-in API call
export const signIn = async (loginDetails) => {
    const response = await axios.post(`${API_URL}/auth/signin`, loginDetails);
    return response.data;
};

// Function to check if the user is authenticated
export const getUserData = async (token) => {
    const response = await axios.get(`${API_URL}/user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
