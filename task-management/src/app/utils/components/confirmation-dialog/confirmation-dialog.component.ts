import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  constructor(public dailogRef:MatDialogRef<ConfirmationDialogComponent>,@Inject(MAT_DIALOG_DATA)public data:any) { }

  public close(event: any, value: boolean = false) {
    if (this.data.stopEvent) {
      event.stopPropagation();
    }
    this.dailogRef.close(value);
  }

  public confirm(event: any) {
    this.close(event, true);
  }

  @HostListener("keydown.esc")
  public onEsc(event: any) {
    this.close(event);
  }

}
