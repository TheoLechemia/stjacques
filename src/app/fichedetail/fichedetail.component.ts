import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-fichedetail',
  templateUrl: './fichedetail.component.html',
  styleUrls: ['./fichedetail.component.css'],
})
export class FichedetailComponent implements OnInit {
  constructor(private _lightBox: Lightbox) {}
  public album: Array<any> = [];

  ngOnInit() {
    window.scroll(0, 0);

    for (let i = 1; i <= 8; i++) {
      const src = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
      const img = {
        src: src,
      };

      this.album.push(img);
    }
  }

  open(i: number) {
    this._lightBox.open(this.album, i);
  }
  close(): void {
    // close lightbox programmatically
    this._lightBox.close();
  }
}
