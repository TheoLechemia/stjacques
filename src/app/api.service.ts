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
      queryString = queryString.append(key, params[key]);
    }
    // always retreive publish data
    return this.http.get(`${this.INTERNAL_API_ENDPOINT}/${endpoint}`, {
      params: queryString,
    });
  }
  public getObjectswithPost(
    endpoint: string,
    data: any,
    queryString: any = {}
  ) {
    let params = new HttpParams();
    for (let param in queryString) {
      if (Array.isArray(queryString[param])) {
        queryString[param].forEach((el: string) => {
          params = params.append(param, el);
        });
      } else {
        params = params.set(param, queryString[param]);
      }
    }
    return this.http.post<any>(
      `${this.INTERNAL_API_ENDPOINT}/${endpoint}`,
      data,
      { params: params }
    );
  }
}
