import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// MAPPING = {
//   ""
// }

@Component({
  selector: 'app-patri-card',
  templateUrl: './patri-card.component.html',
  styleUrls: ['./patri-card.component.css'],
})
export class PatriCardComponent implements OnInit {
  @Input() imgAutoWidth: boolean = true;
  @Input() data: any = {};
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  nagigateToDetail(id: number, categorie: string) {
    this._router.navigate(['detail', categorie, id]);
  }
}
