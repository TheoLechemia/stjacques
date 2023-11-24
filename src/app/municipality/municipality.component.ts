import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css'],
})
export class MunicipalityComponent implements OnInit {
  constructor(public api: ApiService) {}
  @Input() parentFormControl: any;
  public municipalities: Array<any> = [];
  public search: FormControl;
  public selectedMunicipalities: Array<any> = [];

  ngOnInit(): void {
    this.search = new FormControl();
    this.api.getObjects('communes', { limit: 50 }).subscribe((data) => {
      this.municipalities = data;
    });
    console.log(this.parentFormControl.valueChanges);

    this.parentFormControl.valueChanges.subscribe((idMun: any) => {
      const selectedMun = this.municipalities.find((mun) => mun.id == idMun);
      this.selectedMunicipalities.push(selectedMun);
    });
    this.search.valueChanges
      .pipe(
        debounceTime(400),
        filter((value) => value.length >= 3),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        console.log('YEP value', value);
        this.api
          .getObjects('communes', { limit: 50, name: value })
          .subscribe((data) => {
            this.municipalities = [];
            this.municipalities.push(...this.selectedMunicipalities);
            this.municipalities = data;
          });
      });
  }
}
