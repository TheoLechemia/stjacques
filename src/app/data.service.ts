import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public objects: any;
  public pays = [];
  public siecles = [];
  public regions = [];
  public departements = [];
  public communes = [];
  public countries = [];
  public naturesMonu = [];
  public etatsConservations = [];
  public designationsMob = [];
  public techniquesMob = [];
  public naturesPersoMo = [];
  public professions = [];
  public deplacements = [];
  public mobiliersImages = [];
  public monumentsLieux = [];
  public personnesMorales = [];
  public personnesPhysiques = [];
  constructor(private api: ApiService, public formService: FormService) {
    this.api.getObjects('pays').subscribe((data) => {
      this.pays = data;
    });
    this.api.getObjects('regions').subscribe((data) => {
      this.regions = data;
    });
    this.api.getObjects('departements').subscribe((data) => {
      this.departements = data;
    });
    this.api.getObjects('siecles').subscribe((data) => {
      this.siecles = data;
    });
    this.api.getObjects('natures_monu').subscribe((data) => {
      this.naturesMonu = data;
    });
    this.api.getObjects('etats_conservation').subscribe((data) => {
      this.etatsConservations = data;
    });
    this.api.getObjects('designations_mob').subscribe((data) => {
      this.designationsMob = data;
    });
    this.api.getObjects('techniques_mob').subscribe((data) => {
      this.techniquesMob = data;
    });
    this.api.getObjects('natures_personnes_morales').subscribe((data) => {
      this.naturesPersoMo = data;
    });
    this.api.getObjects('professions').subscribe((data) => {
      this.professions = data;
    });
    this.api.getObjects('deplacements').subscribe((data) => {
      this.deplacements = data;
    });
    // this.api.getObjects("BibSiecle", {limit:200}).subscribe((data => {
    //   this.centuries = data.list
    // }));
  }

  cleanAndFormatForm(form: any, key: string) {
    let cleanedForm = { ...form[key], ...form['general'] };
    for (const [key, value] of Object.entries(cleanedForm)) {
      if (Array.isArray(value)) {
        cleanedForm[key] = value.map((el) => el.id);
      }
      if (value && (value as any).length == 0) {
        delete cleanedForm[key];
      }
    }
    return cleanedForm;
  }
  searchAllCategories() {
    this.monumentsLieux = [];
    this.mobiliersImages = [];
    this.personnesMorales = [];
    this.personnesPhysiques = [];
    const form = Object.assign({}, this.formService.form.value);
    if (form.searchOn.mobiliers_images) {
      let cleanedForm = this.cleanAndFormatForm(form, 'mobiliers_images');
      this.api
        .getObjectswithPost('mobiliers_images', cleanedForm, {
          fields: ['medias', 'siecles'],
        })
        .subscribe((data) => {
          this.mobiliersImages = data;
        });
    }
    if (form.searchOn.monuments_lieux) {
      let cleanedForm = this.cleanAndFormatForm(form, 'monuments_lieux');
      this.api
        .getObjectswithPost('monuments_lieux', cleanedForm, {
          fields: ['medias', 'siecles'],
        })
        .subscribe((data) => {
          this.monumentsLieux = data;
        });
    }
    if (form.searchOn.personnes_morales) {
      let cleanedForm = this.cleanAndFormatForm(form, 'personnes_morales');
      this.api
        .getObjectswithPost('personnes_morales', cleanedForm, {
          fields: ['medias', 'siecles'],
        })
        .subscribe((data) => {
          this.personnesMorales = data;
        });
    }
    if (form.searchOn.personnes_physiques) {
      let cleanedForm = this.cleanAndFormatForm(form, 'personnes_physiques');
      this.api
        .getObjectswithPost('personnes_physiques', cleanedForm, {
          fields: ['medias', 'siecles'],
        })
        .subscribe((data) => {
          this.personnesPhysiques = data;
        });
    }
  }
}
