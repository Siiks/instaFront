import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RegisterRequest } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerRequest: RegisterRequest;
  successMessage: string;
  password2: string;

  constructor(private authService: AuthService) {
    this.registerRequest = {
      email: null,
      password: null,
      tlf: null,
      username: null
    }
    this.successMessage = '';
    this.password2 = '';
  }

  ngOnInit(): void {

  }

  register() {
    this.successMessage = '';
    if(this.password2 != this.registerRequest.password){
      this.successMessage = "Las contraseñas no coinciden"
      return;
    }
    this.authService.register(this.registerRequest)
      .then(res => {
        this.successMessage = res;
      })
  }
}
