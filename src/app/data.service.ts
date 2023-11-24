import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public objects: any;
  public pays: [];
  public siecles: [];
  public regions: [];
  public departements: [];
  public communes: [];
  public countries = [];
  constructor(private api: ApiService) {
    this.api.getObjects('pays').subscribe((data) => {
      this.pays = data;
    });
    this.api.getObjects('regions').subscribe((data) => {
      this.regions = data;
    });
    this.api.getObjects('departements').subscribe((data) => {
      this.departements = data;
    });
    // this.api.getObjects("BibSiecle", {limit:200}).subscribe((data => {
    //   this.centuries = data.list
    // }));
  }
}
