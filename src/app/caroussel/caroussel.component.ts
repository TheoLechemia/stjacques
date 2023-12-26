import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css'],
})
export class CarousselComponent {
  @Input() datas: Array<any>;
  @ViewChild('slider') slider: ElementRef;
  public mouseDown = false;
  public startX: any;
  public scrollLeft: any;

  left() {
    this.slider.nativeElement.scrollBy({
      left: 400,
      behavior: 'smooth',
    });
  }

  right() {
    this.slider.nativeElement.scrollBy({
      left: -400,
      behavior: 'smooth',
    });
  }

  startDragging(e: any, flag: boolean, slider: any) {
    e.stopPropagation();
    this.mouseDown = true;
    this.startX = e.pageX - slider.offsetLeft;
    this.scrollLeft = slider.scrollLeft;
  }
  stopDragging(e: any, flag: boolean) {
    e.stopPropagation();

    this.mouseDown = false;
  }
  moveEvent(e: any, slider: any) {
    if (!this.mouseDown) {
      return;
    }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - this.startX;
    slider.scrollLeft = this.scrollLeft - scroll;
  }
}
