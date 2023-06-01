import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RegisterRequest } from '../models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  user: RegisterRequest;

  constructor(private authService: AuthService ){}

  ngOnInit(): void {
    this.getMe();
  }

 async getMe(){
   this.user = await this.authService.getCurrentUser();
  }

  
}
