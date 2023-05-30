import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, RegisterRequest } from '../models/user';
import { enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  register(registerRequest: RegisterRequest): Promise<any> {
    return this.http.post<string>(`${this.url}/auth/signup` , registerRequest).toPromise();
  }

  login(loginRequest: LoginRequest): Promise<any> {
    return this.http.post(`${this.url}/auth/signin`, loginRequest).toPromise();
  }
}
