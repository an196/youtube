import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from 'app/interface/video.interface';
import { map, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { isDevMode } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VideoService {
    private readonly apiUrl: string = (isDevMode() ? environment.localUrl : environment.baseUrl) + '/video';

    constructor(private http: HttpClient) { }

    getVideos(size: number = 10): Observable<Video[]> {
        return this.http.get<Video[]>(`${this.apiUrl}`);
      }
    
   
}