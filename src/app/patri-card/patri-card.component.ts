import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChildren,
  ElementRef,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';

// MAPPING = {
//   ""
// }

@Component({
  selector: 'app-patri-card',
  templateUrl: './patri-card.component.html',
  styleUrls: ['./patri-card.component.css'],
})
export class PatriCardComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() imgAutoWidth: boolean = true;
  @Input() data: any = {};
  @Input() showCategorie: boolean = true;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  public mapping: any = {
    monuments_lieux: 'natures',
    mobiliers_images: 'designations',
    personnes_morales: 'natures',
    personnes_physiques: 'professions',
  };
  public mousePosition = {
    x: 0,
    y: 0,
  };

  constructor(private _router: Router) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.imgs.forEach((img) => {
      img.nativeElement.ondragstart = () => {
        return false;
      };
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data']['currentValue']) {
      this.data.subtitle =
        this.data[
          this.mapping[changes['data']['currentValue']['meta_categorie']]
        ];
    }
  }

  onMouseDown($event: MouseEvent) {
    this.mousePosition.x = $event.screenX;
    this.mousePosition.y = $event.screenY;
  }

  nagigateToDetail($event: any, id: number, categorie: string) {
    if (
      this.mousePosition.x === $event.screenX &&
      this.mousePosition.y === $event.screenY
    ) {
      this._router.navigate(['detail', categorie, id]);
    }
  }
}
