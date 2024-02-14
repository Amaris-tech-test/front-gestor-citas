export interface AuthContextType {
  token: string;
  user: User | undefined; 
  login: (newToken: string, user: User) => void;
  logout: () => void;
}


export interface User {
  email: string;
  id: string;
}