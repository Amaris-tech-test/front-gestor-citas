import { jwtDecode } from "jwt-decode";

export function isLoggedIn(): boolean {

  const token = localStorage.getItem('token');
  console.log(token)
  return !token || isTokenExpired(token) ? false : true;
}

export function isTokenExpired(token:string) {
  const decoded:{exp:number} = jwtDecode(token);
  const expirationDate:number = decoded.exp * 1000;
  return Date.now() > expirationDate;
}