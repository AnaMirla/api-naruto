import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api'; // La URL de tu API

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
