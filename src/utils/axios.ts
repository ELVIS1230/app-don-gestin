"use server";
import axios from 'axios';
import { cookies } from 'next/headers';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Cambia la URL base según sea necesario
  timeout: 5000,
});

// Interceptor de solicitud
axiosInstance.interceptors.request.use(
  async (config) => {
    const authCookie = cookies().get('authorization')?.value; // Obtener la cookie 'authorization'
    if (authCookie) {
      config.headers.Authorization = `Bearer ${authCookie}`; // Adjuntar el token al encabezado
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;