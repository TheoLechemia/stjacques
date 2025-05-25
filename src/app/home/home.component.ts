import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { FormService } from '../form.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('slider') slider: ElementRef;

  public mouseDown = false;
  startX: any;
  scrollLeft: any;
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
    this.randomCards = [];
    [
      ['monuments_lieux', 'natures'],
      ['mobiliers_images', 'natures'],
      ['personnes_morales', 'natures'],
      ['personnes_physiques', 'professions'],
    ].forEach((params: Array<any>) => {
      this._api
        .getObjectswithPost(
          params[0],
          {},
          {
            limit: 3,
            random: 'true',
            fields: ['medias', 'siecles',
               //params[1] ? pas utilisé ?
              ],
            has_medias: true,
          }
        )
        .subscribe((data) => {
          this.randomCards.push(...data);
        });
    });
  }
}
