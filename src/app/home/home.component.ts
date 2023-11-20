import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormService } from '../form.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    public dataService: DataService,
    public formService: FormService,
    private _api: ApiService
  ) {}
  public randomCards: Array<any> = [];
  ngOnInit(): void {
    this.loadRandom();
  }

  loadRandom() {
    [
      'monuments_lieux',
      'mobiliers_images',
      'personnes_morales',
      'personnes_physiques',
    ].forEach((endpoint) => {
      this._api
        .getObjects(endpoint, {
          limit: 2,
          random: 'true',
          fields: 'medias',
        })
        .subscribe((data) => {
          this.randomCards.push(data);
        });
    });
  }
}
