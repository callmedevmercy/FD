export class Place {
  constructor({ id, name, description, accessibilityFeatures, location, images }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.accessibilityFeatures = accessibilityFeatures || {}; 
    // e.g., { wheelchair: true, serviceAnimal: true }
    this.location = location;
    this.images = images || [];
  }
}
