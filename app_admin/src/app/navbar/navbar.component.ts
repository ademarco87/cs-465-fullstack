import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public onLogout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }
}
