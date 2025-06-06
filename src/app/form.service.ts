import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public form: FormGroup;
  constructor(private _formBuilder: NonNullableFormBuilder) {
    this.form = this._formBuilder.group({
      searchOn: this._formBuilder.group({
        monuments_lieux: true,
        mobiliers_images: true,
        personnes_morales: true,
        personnes_physiques: true,
      }),
      general: this._formBuilder.group({
        pays: [[]],
        regions: [[]],
        departements: [[]],
        communes: [[]],
        siecles: [[]],
      }),
      monuments_lieux: this._formBuilder.group({
        natures_monu: [[]],
        etats_conservation: [[]],
      }),
      mobiliers_images: this._formBuilder.group({
        natures: [[]],
        techniques: [[]],
        etats_conservation: [[]],
      }),
      personnes_morales: this._formBuilder.group({
        natures_pers: [[]],
      }),
      personnes_physiques: this._formBuilder.group({
        professions: [[]],
        modes_deplacement: [[]],
      }),
    });
  }
}
