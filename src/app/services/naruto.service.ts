import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NarutoService {
  // Asegúrate de que esta URL sea la correcta de tu backend
  private apiURL = 'http://localhost:3000/api/characters'; // Reemplaza con la URL correcta de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener los personajes desde la API
  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL); // Especifica que el tipo de datos que se espera es un arreglo
  }
}
