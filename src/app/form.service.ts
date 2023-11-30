import { Injectable } from '@angular/core';
import { UntypedFormBuilder, FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public form: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      searchOn: this._formBuilder.group({
        monuments_lieux: true,
        mobiliers_images: true,
        personnes_morales: true,
        personnes_physiques: true,
      }),
      general: this._formBuilder.group({
        pays: null,
        regions: null,
        departements: null,
        communes: null,
        siecles: null,
      }),
      monuments_lieux: this._formBuilder.group({
        natures_monu: null,
        etats_conservations: null,
      }),
      mobiliers_images: this._formBuilder.group({
        designation: null,
        techniques: null,
        etats_conservations: null,
      }),
      personnes_morales: this._formBuilder.group({
        natures_pers: null,
      }),
      personnes_physiques: this._formBuilder.group({
        professions: null,
        modes_deplacement: null,
      }),
    });
  }
}
