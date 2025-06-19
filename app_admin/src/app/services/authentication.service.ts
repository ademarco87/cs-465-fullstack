import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { Authresponse } from '../models/authresponse';
import { TripDataService } from './trip-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
  ) {}

  // variable to hold the response token
  authResp: Authresponse = new Authresponse();

  // Get JWT from localStorage
  public getToken(): string {
    const token = this.storage.getItem('travlr-token');
    return token ? token : '';
  }

  // Save JWT to localStorage
  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  // Remove JWT from localStorage (logout)
  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  // Check if the token is valid
  public isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    }
    return false;
  }

  // Get current user from token
  public getCurrentUser(): User {
    const token = this.getToken();
    if (token) {
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
    return { email: '', name: '' };
  }

  // Login and store token if successful
  public login(user: User, password: string): void {
    this.tripDataService.login(user, password).subscribe({
      next: (value: Authresponse) => {
        console.log(value);
        this.authResp = value;
        this.saveToken(this.authResp.token);
      },
      error: (err) => {
        console.error('Login Error:', err);
      }
    });
  }

  // Register and store token if successful
  public register(user: User, password: string): void {
    this.tripDataService.register(user, password).subscribe({
      next: (value: Authresponse) => {
        if (value && value.token) {
          console.log(value);
          this.authResp = value;
          this.saveToken(this.authResp.token);
        }
      },
      error: (err) => {
        console.error('Registration Error:', err);
      }
    });
  }
}
