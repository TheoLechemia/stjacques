import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { ApiService } from '../api.service';
import { AppConfigService } from '../app.config.service';

@Component({
  selector: 'app-fichedetail',
  templateUrl: './fichedetail.component.html',
  styleUrls: ['./fichedetail.component.css'],
})
export class FichedetailComponent implements OnInit {
  constructor(
    private _lightBox: Lightbox,
    private _routing: ActivatedRoute,
    private _api: ApiService,
    private _config: AppConfigService
  ) {}
  public album: Array<any> = [];
  public id: number;
  public categorie: string;
  public detailInfos: any = {};
  public mapping: any;
  public advancedFields: any = {
    monuments_lieux: [
      'geolocalisation',
      'source',
      'bibliographie',
      'auteurs',
      'geolocalisation',
    ],
    mobiliers_images: [
      'source',
      'bibliographie',
      'auteurs',
    ],
    personnes_morales: [
      'source',
      'bibliographie',
      'auteurs',
    ],
    personnes_physiques: [
      'source',
      'bibliographie',
      'auteurs',
    ],
  };

  ngOnInit() {
    this._routing.params.subscribe((params) => {
      this.id = params['id_fiche'];
      this.categorie = params['categorie'];
      this.loadData();
    });
    window.scroll(0, 0);
  }

  loadData() {
    this._api.getObjects(`${this.categorie}/${this.id}`).subscribe((data) => {
      this.detailInfos = this.formatData(data);

      this.album = this.detailInfos.medias.map((media: any) => {
        return {
          src: media.url,
          caption: media.titre,
          thumb: media.url + '&h=500&w=500',
        };
      });
    });
  }

  formatData(data: any) {
    const tmp: any = {};
    for (let key in data) {
      if (this.advancedFields[data.meta_categorie].includes(key)) {
        tmp[key] = data[key];
      }
    }
    data['advanced_fields'] = tmp;

    return data;
  }

  open(i: number) {
    this._lightBox.open(this.album, i);
  }
  close(): void {
    this._lightBox.close();
  }
}
