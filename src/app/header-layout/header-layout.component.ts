import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.checkLog();
  }

  async checkLog(){
    this.authService.isLoggedIn()
      .then((res) => {
        this.isLogged = res
      })
      .catch(() => {
        this.router.navigate(['']);
      })
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate([''])
          .then(() => {
            window.location.reload();
          });
      })
      .catch(() => {
        this.router.navigate([''])
          .then(() => {
            window.location.reload();
          });
      });
    localStorage.removeItem('token');
    localStorage.removeItem('user_id')
  }
}
