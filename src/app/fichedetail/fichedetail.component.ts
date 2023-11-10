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
      const src =
        'https://stjacq.jnld.xyz/dltemp/dfP2gVHiBDoW5tVN/1699648200000/noco/Patrimoine%20Jacquaire/TMedias/CheminMedia/oyTz5c8E1XUpsEjmuJ.png';
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
