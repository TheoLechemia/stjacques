import { Injectable } from '@angular/core';
import { AppConfigService } from './app.config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  public getObjects(endpoint: string, params:any= {}): Observable<any> {
    let queryString = new HttpParams();
    // eslint-disable-next-line guard-for-in
    for (const key in params) {
      queryString = queryString.set(key, params[key].toString());
    }
    return this.http.get(
      `${this.API_ENDPOINT}/api/v1/db/data/v1/StJACQ/${endpoint}`, {
        params: queryString,
      }
    );
  }
}
