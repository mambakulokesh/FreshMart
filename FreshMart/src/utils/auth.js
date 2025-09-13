import axios from 'axios';
import { triggerAlert } from './alerts';

export const logout = async () => {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    const accessToken = localStorage.getItem('access_token');
    
    if (refreshToken && accessToken) {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/logout/`, 
        { refresh: refreshToken },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    }
    
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    await triggerAlert.success('Logged out successfully!');
    window.location.href = '/login';
  } catch (error) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login';
  }
};