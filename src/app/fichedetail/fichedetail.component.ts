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
  // champs au dessus du tableau
  public middleFields:any = {
    monuments_lieux: [
      {"key": "description", "label": "Description"},
      {"key": "histoire", "label": "Histoire"},
      {"key": "protection_commentaires", "label": "Commentaire sur la protection"},
    ],
    mobiliers_images: [
      {"key": "description", "label": "Description"},
      {"key": "historique", "label": "Historique"},
      {"key": "lieu_conservation", "label": "Lieu de conservation"},
      {"key": "lieu_origine", "label": "Lieu d'origine"},
      {"key": "protection_commentaires", "label": "COmmentaire sur la protection"},
    ],
    personnes_morales: [
      {"key": "historique", "label": "Historique"},
      {"key": "statuts", "label": "Statuts"},
      {"key": "text_statuts", "label": "Texte statuts"},
      {"key": "acte_fondation", "label": "Acte de fondation"},
      {"key": "commentaires", "label": "Commentaires"},

    ],
    personnes_physiques: [
      {"key": "elements_biographiques", "label": "Eléments bibliographiques"},
      {"key": "nature_evenement", "label": "Nature événement"},
      {"key": "attestation", "label": "Attestation"},
      {"key": "commutation_voeu", "label": "Communtation des voeux"},
      {"key": "elements_pelerinage", "label": "Eléments de pélerinage"},

    ],
  }
  // champs du tableau en bas
  public advancedFields: any = {
    monuments_lieux: [
      {"key": "geolocalisation", "label": "Géolocalisation"},
      {"key": "source", "label": "Source"},
      {"key": "bibliographie", "label": "Bibliographie"},
      {"key": "source", "label": "Source"},
    ],
    mobiliers_images: [
      {"key": "bibliographie", "label": "Bibliographie"},
      {"key": "source", "label": "Source"},
    ],
    personnes_morales: [
      {"key": "bibliographie", "label": "Bibliographie"},
      {"key": "source", "label": "Source"},
    ],
    personnes_physiques: [
      {"key": "bibliographie", "label": "Bibliographie"},
      {"key": "source", "label": "Source"},
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
      this.detailInfos = data

      this.album = this.detailInfos.medias.map((media: any) => {
        return {
          src: media.url,
          caption: media.titre,
          thumb: media.url + '&h=500&w=500',
        };
      });
    });
  }


  open(i: number) {
    this._lightBox.open(this.album, i);
  }
  close(): void {
    this._lightBox.close();
  }
}
