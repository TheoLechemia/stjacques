import { Injectable } from '@angular/core';
import { UntypedFormBuilder, FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public form: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      general: this._formBuilder.group({
        pays: null,
        regions: null,
        departements: null,
        communes: null,
        siecles: null,
      }),
      monuments_lieux: this._formBuilder.group({
        nature: null,
        etat_conservation: null,
      }),
      mobiliers_images: this._formBuilder.group({
        designation: null,
        technique: null,
        etat_conservation: null,
      }),
      personnes_morales: this._formBuilder.group({
        natures: null,
      }),
      personnes_physiques: this._formBuilder.group({
        professions: null,
        mode_deplacement: null,
      }),
    });
  }
}
