import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public objects: any;
  public countries: [];
  public centuries: [];
  constructor(private api: ApiService) {
    // this.api.getObjects("LocPays", {limit: 200}).subscribe((data => {
    //   this.countries = data.list
    // }));
    // this.api.getObjects("BibSiecle", {limit:200}).subscribe((data => {
    //   this.centuries = data.list
    // }));
  }
}
