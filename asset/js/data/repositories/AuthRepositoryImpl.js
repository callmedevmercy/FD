import apiClient from '../api/apiClient.js';
import { AuthRepository } from '../../domain/repositories/AuthRepository.js';
import { User } from '../../domain/models/User.js';

export class AuthRepositoryImpl extends AuthRepository {
  async login(email, password) {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      const { token, user } = response.data;
      
      // Store token
      localStorage.setItem('token', token);
      
      return new User({ 
        id: user && user.id, 
        name: user && user.name, 
        email: user && user.email, 
        token 
      });
    } catch (error) {
      throw error;
    }
  }

  async register(name, email, password) {
    try {
      await apiClient.post('/auth/register', { name, email, password });
      // Implicitly, we might log them in or just return success.
      // Based on flow, we typically redirect to login or auto-login.
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const response = await apiClient.get('/auth/me');
      const user = response.data;
      return new User({
        id: user.id,
        name: user.name,
        email: user.email,
        token: localStorage.getItem('token') // Preserve existing token
      });
    } catch (error) {
      throw error;
    }
  }
}
