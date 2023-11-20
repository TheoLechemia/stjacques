import { Injectable } from '@angular/core';
import { AppConfigService } from './app.config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public API_ENDPOINT: string;
  public INTERNAL_API_ENDPOINT: string;
  constructor(
    private configService: AppConfigService,
    private http: HttpClient
  ) {
    this.API_ENDPOINT = this.configService.config.API_ENDPOINT;
    this.INTERNAL_API_ENDPOINT =
      this.configService.config.INTERNAL_API_ENDPOINT;
  }
  public getObjects(
    endpoint: string,
    params: any = {},
    fields = [],
    sort = 'asc'
  ): Observable<any> {
    let queryString = new HttpParams();
    // eslint-disable-next-line guard-for-in
    for (const key in params) {
      // const [operator, value] = params[key].split(',');
      // const formatedFilter = `(${key},${operator},${value})`;
      queryString = queryString.append(key, params[key]);
    }
    // always retreive publish data
    return this.http.get(`${this.INTERNAL_API_ENDPOINT}/${endpoint}`, {
      params: queryString,
    });
  }
}
