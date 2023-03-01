import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Short } from '../interface/short.interface'; 
import { map, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { isDevMode } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShortService {
    private readonly apiUrl: string = (isDevMode() ? environment.localUrl2 : environment.secondUrl) + '/short';
   
    headers!: HttpHeaders;
    
    constructor(private http: HttpClient) { 
      this.headers = new HttpHeaders();
      this.headers = this.headers
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Access-Control-Allow-Headers', 'Content-Type')
        .set('X-Custom-Header', 'youtube')
    }

    getShorts(size: number = 10): Observable<Short[]> {
        return this.http.get<Short[]>(`${this.apiUrl}`, {headers: this.headers});
      }
    
      getShortById(id: string): Observable<Short[]> {
        return this.http.get<Short[]>(`${this.apiUrl}/${id}`, {headers: this.headers});
      }
   
}