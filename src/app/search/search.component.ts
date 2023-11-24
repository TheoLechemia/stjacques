import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormService } from '../form.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(
    public dataService: DataService,
    public formService: FormService
  ) {}
}
