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

  register(registerRequest: RegisterRequest): Promise<string> {
    return this.http.post(`${this.url}/auth/signup`, registerRequest, {responseType: 'text'}).toPromise();
  }

  login(loginRequest: LoginRequest): Promise<any> {
    return this.http.post(`${this.url}/auth/signin`, loginRequest).toPromise();
  }

  logout(): Promise<any> {
    return this.http.post(`${this.url}/auth/logout`, {}).toPromise();
  }

  getCurrentUser(): Promise<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const requestOptions = { headers: headers };
    const id = localStorage.getItem('user_id');

    return this.http.get(`${this.url}/account/${id}`, requestOptions).toPromise();
  }

  async isLoggedIn(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const requestOptions = { headers: headers };
      return this.http.get<boolean>(`${this.url}/auth/check-auth`, requestOptions).toPromise();
    }
    return Promise.resolve(false);
  }

  async editUser(user: RegisterRequest): Promise<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const requestOptions = { headers: headers };
    const id = localStorage.getItem('user_id');

    return this.http.put(`${this.url}/update/account/${id}`, user, requestOptions).toPromise();
  }
}
