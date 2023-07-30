import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public objects: any;
  constructor(private api: ApiService) {
    this.api.fetchObjects().subscribe((data) => {
      console.log('wopppp', data);

      this.objects = data;
    });
  }
}
