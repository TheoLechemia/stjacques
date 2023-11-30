import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

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
  constructor(private api: ApiService) {
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
}
