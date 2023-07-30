import { Injectable } from '@angular/core';
import { AppConfigService } from './app.config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public API_ENDPOINT: string;
  constructor(
    private configService: AppConfigService,
    private http: HttpClient
  ) {
    this.API_ENDPOINT = this.configService.config.API_ENDPOINT;
  }
  public fetchObjects(): Observable<any> {
    return this.http.get(
      `${this.API_ENDPOINT}/api/v1/db/data/v1/StJACQ/TPersMorales/views/TPersMorales`
    );
  }
}
