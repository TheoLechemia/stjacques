import { Injectable } from '@angular/core';
import { UntypedFormBuilder, FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public form: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      countries: null,
      centuries: null,
      municipalities: null
    }
    )
  }
}
