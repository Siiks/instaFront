import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RegisterRequest } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerRequest: RegisterRequest;
  successMessage: string = '';
  password2: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService,
    private router: Router) {
    this.registerRequest = {
      email: null,
      password: null,
      tlf: null,
      username: null
    }
  }

  ngOnInit(): void {

  }

  register() {
    this.successMessage = '';
    if (this.password2 != this.registerRequest.password) {
      this.errorMessage = "Las contraseñas no coinciden"
      return;
    }
    this.authService.register(this.registerRequest)
      .then((res: any) => {
        this.successMessage = res;
        this.router.navigate(['']);
      })
      .catch((err) => {
        this.errorMessage = err.message;
      })
  }
}
