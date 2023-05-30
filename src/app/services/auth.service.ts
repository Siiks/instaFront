import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest, RegisterRequest } from '../models/user';
import { enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  register(registerRequest: RegisterRequest): Promise<any> {
    return this.http.post<string>(`${this.url}/auth/signup`, registerRequest).toPromise();
  }

  login(loginRequest: LoginRequest): Promise<any> {
    return this.http.post(`${this.url}/auth/signin`, loginRequest).toPromise();
  }

  logout(): Promise<any> {
    return this.http.post(`${this.url}/auth/logout`, {}).toPromise();
  }

  getCurrentUser(): Promise<any> {
    return this.http.get(`${this.url}/auth/me`).toPromise();
  }

  isLoggedIn(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const requestOptions = { headers: headers };
      return this.http.get<boolean>(`${this.url}/auth/check-auth`, requestOptions)
        .toPromise();
    }
    return Promise.resolve(false);
  }
}
