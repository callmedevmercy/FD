import apiClient from '../api/apiClient.js';
import { ProfileRepository } from '../../domain/repositories/ProfileRepository.js';
import { AccessibilityProfile } from '../../domain/models/AccessibilityProfile.js';

export class ProfileRepositoryImpl extends ProfileRepository {
  async getProfile() {
    try {
      const response = await apiClient.get('/profile/get');
      return new AccessibilityProfile(response.data);
    } catch (error) {
      throw error;
    }
  }

  async createProfile(profileData) {
    try {
      await apiClient.post('/profile/create', profileData);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async updateProfile(profileData) {
    try {
      await apiClient.put('/profile/update', profileData);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
