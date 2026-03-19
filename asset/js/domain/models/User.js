export class User {
  // 1. Add phone, location, and avatar to the destructuring
  constructor({ id, name, email, token, phone, location, avatar }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.token = token;
    
    // 2. Store them! (Use default empty strings if they are missing)
    this.phone = phone || ""; 
    this.location = location || "";
    this.avatar = avatar || null;
  }
}