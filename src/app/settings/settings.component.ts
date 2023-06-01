import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RegisterRequest } from '../models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  mostrarAjustes: boolean = false;

  user: RegisterRequest;
  successMessage: string = '';

  constructor(private authService: AuthService) {
    this.user = {
      email: null,
      password: null,
      tlf: null,
      username: null
    }
  }

  ngOnInit(): void {
    this.getMe();
  }

  async getMe() {
    this.user = await this.authService.getCurrentUser();
  }

  async edit() {
    this.successMessage = '';
    this.authService.editUser(this.user)
      .then((res) => {
        console.log(res);
        this.successMessage = "Usuario editado con exito";
      });
  }

}
