import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest;

  constructor(private authService: AuthService) {
    this.loginRequest = {
      password: null,
      username: null
    }
  }

  ngOnInit(): void {

  }

  login() {
    this.authService.login(this.loginRequest)
      .then(res => {
        localStorage.setItem('token', res.token)
        
      })
  }
}
