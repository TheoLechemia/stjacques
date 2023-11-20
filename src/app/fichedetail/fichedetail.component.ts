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

  ngOnInit() {
    this._routing.params.subscribe((params) => {
      this.id = params['id_fiche'];
      this.categorie = params['categorie'];
      this.mapping = this._config.config.DETAIL_MAPPING[this.categorie];
      this.loadData();
    });
    window.scroll(0, 0);
  }

  loadData() {
    this._api.getObjects(`${this.categorie}/${this.id}`).subscribe((data) => {
      this.detailInfos = data;
      this.detailInfos.medias.forEach((media: any) => {
        this.album.push({
          src: media.url,
          caption: media.titre,
          thumb: media.url + '&h=500&w=500',
        });
      });

      console.log(this.album);
    });
  }

  open(i: number) {
    this._lightBox.open(this.album, i);
  }
  close(): void {
    // close lightbox programmatically
    this._lightBox.close();
  }
}
