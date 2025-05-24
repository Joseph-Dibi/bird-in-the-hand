import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NestProfile, Registration } from './models/models';

@Injectable({
  providedIn: 'root',
})
export class BirdManagementService {


  private baseUrl = 'http://localhost:8080';
  private birdActions = '/bird-in-the-hand';


  constructor(private http: HttpClient) {}

  login(credentials: { username: any; password: any; }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.birdActions}/login`, credentials, {headers});
  }

  register(registration: Registration): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.birdActions}/registration`, registration, { headers });
  }

  // getNestProfile(): Observable<any[]> {
  //   return this.http.get<any>(`${this.baseUrl}/nest/${sessionStorage.getItem('username')}`);
  // }
  getNestProfile(): Observable<NestProfile> {
    const username = sessionStorage.getItem('username') ?? '';
    let params = new HttpParams()
      .set('username', username);
    return this.http.get<NestProfile>(`${this.birdActions}/nest-profile`, { params });
  }
  getBird(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }


  createBird(bird: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, bird);
  }

  updateBird(id: string, bird: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, bird);
  }

  deleteBird(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
