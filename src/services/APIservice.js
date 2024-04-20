import axios from 'axios';

const API_TIMEOUT = 60000; // 1 minute

const apiService = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: API_TIMEOUT,
});


export const fetchProducts = async () => {
  try {
    const response = await apiService.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products. Please try again later.');
  }
};