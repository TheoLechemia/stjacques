import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit{
  constructor(public api: ApiService) {  }
  @Input() parentFormControl: FormControl;
  public municipalities: Array<any> = [];

  ngOnInit(): void {
    this.api.getObjects("LocCommunes").subscribe(data => {      
      this.municipalities = data.list;
      console.log(this.municipalities);
      
    })
  }

}
