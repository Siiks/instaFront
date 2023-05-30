import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService,
    private router: Router) {
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
        this.router.navigate(['home']);
      })
      .catch(err => {
        this.errorMessage = err.message;
      })
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
