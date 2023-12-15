import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormService } from '../form.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public hiddenAdvanced = true;
  constructor(
    public dataService: DataService,
    public formService: FormService
  ) {}

  resetFilters() {
    this.formService.form.reset();
  }

  toggle() {
    this.hiddenAdvanced = !this.hiddenAdvanced;
  }
}
