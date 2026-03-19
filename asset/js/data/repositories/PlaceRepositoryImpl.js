import apiClient from '../api/apiClient.js';
import { PlaceRepository } from '../../domain/repositories/PlaceRepository.js';
import { Place } from '../../domain/models/Place.js';

export class PlaceRepositoryImpl extends PlaceRepository {
  async getPlaces(filters) {
    try {
      // filters: { wheelchair: true, serviceAnimal: true }
      // Convert backend expected query params
      const response = await apiClient.get('/places/search', { params: filters });
      
      // Assuming response.data is an array of places
      return response.data.map(p => new Place({
        id: p.id,
        name: p.name,
        description: p.description,
        accessibilityFeatures: p.accessibilityFeatures,
        location: p.location,
        images: p.images
      }));
    } catch (error) {
      throw error;
    }
  }

  async getPlaceById(id) {
    try {
      const response = await apiClient.get(`/places/${id}`);
      const p = response.data;
        return new Place({
        id: p.id,
        name: p.name,
        description: p.description,
        accessibilityFeatures: p.accessibilityFeatures,
        location: p.location,
        images: p.images
      });
    } catch (error) {
      throw error;
    }
  }
}
