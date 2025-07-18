import axios from 'axios';

const API_URL = 'http://localhost:2123/auth';

export async function login(email: string, password: string) {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  if (res.data.access_token) {
    localStorage.setItem('token', res.data.access_token);
    return res.data;
  }
  throw new Error('Login failed');
}

export async function register(email: string, password: string, name: string, roleName?: string) {
  const res = await axios.post(`${API_URL}/register`, { email, password, name, roleName });
  if (res.data.access_token) {
    localStorage.setItem('token', res.data.access_token);
    return res.data;
  }
  throw new Error('Register failed');
}

export function logout() {
  localStorage.removeItem('token');
}

export function getToken() {
  return localStorage.getItem('token');
} 