import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formError: string = '';
  public submitted: boolean = false;

  public credentials = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    console.log('Sign in button clicked');

    this.formError = '';

    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required. Please try again.';
      console.log('Validation failed');
      return; // Stay on the same page; don’t redirect unnecessarily
    }

    console.log('Validation passed. Logging in...');
    this.doLogin();
  }

  private doLogin(): void {
    const user: User = {
      email: this.credentials.email
    };

    this.authenticationService.login(user, this.credentials.password);

    setTimeout(() => {
      if (this.authenticationService.isLoggedIn()) {
        this.router.navigate(['/list-trips']);
      } else {
        this.formError = 'Login failed. Please check your credentials.';
      }
    }, 500);
  }
}
