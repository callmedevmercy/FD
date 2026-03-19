/**
 * Interface for Authentication Repository
 */
export class AuthRepository {
  async login(email, password) {
    throw new Error('Method not implemented');
  }

  async register(name, email, password) {
    throw new Error('Method not implemented');
  }

  async getCurrentUser() {
    throw new Error('Method not implemented');
  }
}
