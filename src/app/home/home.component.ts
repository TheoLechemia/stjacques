import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormService } from '../form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public dataService: DataService, public formService: FormService) {}

  ngOnInit(): void {
    
  }
}
