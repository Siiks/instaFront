import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent {

  constructor(private authService: AuthService,
    private router: Router){}

    logout() {
      this.authService.logout();
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
}
