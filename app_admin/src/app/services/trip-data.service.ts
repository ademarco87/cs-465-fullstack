import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { Authresponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiBaseUrl = 'http://localhost:3000/api';
  private tripsUrl = `${this.apiBaseUrl}/trips`;
  private loginUrl = `${this.apiBaseUrl}/login`;
  private registerUrl = `${this.apiBaseUrl}/register`;

  private storage: Storage = inject(BROWSER_STORAGE);

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.storage.getItem('travlr-token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  // -------- Trip Methods --------

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
  }

  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.tripsUrl}/${tripCode}`);
  }

  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.tripsUrl, formData, {
      headers: this.getAuthHeaders()
    });
  }

  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.tripsUrl}/${formData.code}`, formData, {
      headers: this.getAuthHeaders()
    });
  }

  // -------- Auth Methods --------

  login(user: User, password: string): Observable<Authresponse> {
      return this.http.post<Authresponse>(this.loginUrl, { email: user.email, password });
    }
  
    register(user: User, password: string): Observable<Authresponse> {
      return this.http.post<Authresponse>(this.registerUrl, { email: user.email, name: user.name, password });
    }
  
    private async makeAuthApiCall(urlPath: string, user: User): Promise<Authresponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    try {
        return await firstValueFrom(this.http.post<Authresponse>(url, user));
      } catch (error) {
        return this.handleError(error);
      }
    }


  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
