import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patri-card',
  templateUrl: './patri-card.component.html',
  styleUrls: ['./patri-card.component.css']
})
export class PatriCardComponent {

  @Input() imgAutoWidth: boolean = true;
}
