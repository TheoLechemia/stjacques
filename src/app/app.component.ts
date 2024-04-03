import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog){}

  openDialog(): void {
    this.dialog.open(DialogLegalNotice, {
      // width: '500px',
    });
  }
}


@Component({
  selector: 'dialog-legal-notice',
  templateUrl: 'dialog-legal-notice.html',
  standalone: true,
  imports: [MatDialogModule],

})
export class DialogLegalNotice {
  constructor(public dialogRef: MatDialogRef<DialogLegalNotice>) {}
}