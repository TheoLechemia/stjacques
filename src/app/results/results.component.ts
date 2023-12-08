import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormService } from '../form.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public formData: any;
  constructor(
    public dataService: DataService,
    public formService: FormService
  ) {
    this.formData = this.formService.form.value;
  }

  ngOnInit(): void {
    this.dataService.searchAllCategories();
  }
}
