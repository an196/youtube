import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from 'app/interface/video.interface';
import { map, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { isDevMode } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VideoService {
    private readonly apiUrl: string = (!isDevMode() ? environment.localUrl : environment.baseUrl) + '/video';
   
    headers!: HttpHeaders;
    constructor(private http: HttpClient) { 
      this.headers = new HttpHeaders();
      this.headers = this.headers
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Access-Control-Allow-Headers', 'Content-Type')
        .set('X-Custom-Header', 'youtube')
    }

    getVideos(size: number = 10): Observable<Video[]> {
     
        return this.http.get<Video[]>(`${this.apiUrl}`, {headers: this.headers});
      }
    
   
}