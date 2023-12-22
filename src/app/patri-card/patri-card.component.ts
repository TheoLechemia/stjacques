import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

// MAPPING = {
//   ""
// }

@Component({
  selector: 'app-patri-card',
  templateUrl: './patri-card.component.html',
  styleUrls: ['./patri-card.component.css'],
})
export class PatriCardComponent implements OnInit, OnChanges {
  @Input() imgAutoWidth: boolean = true;
  @Input() data: any = {};
  @Input() showCategorie: boolean = true;
  public mapping: any = {
    monuments_lieux: 'natures',
    mobiliers_images: 'designations',
    personnes_morales: 'natures',
    personnes_physiques: 'professions',
  };
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data']['currentValue']) {
      this.data.subtitle =
        this.data[
          this.mapping[changes['data']['currentValue']['meta_categorie']]
        ];
    }
  }

  nagigateToDetail(id: number, categorie: string) {
    this._router.navigate(['detail', categorie, id]);
  }
}
