export interface User {
  id: string; // TypeORM usually uses number or string (uuid). Assuming string based on previous context, but will adapt.
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface AuthResponse {
  access_token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
}
