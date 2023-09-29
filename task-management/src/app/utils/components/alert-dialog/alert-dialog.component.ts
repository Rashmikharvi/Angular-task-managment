import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  constructor(public dailogRef: MatDialogRef<AlertDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  public close(value: boolean = false) {
    this.dailogRef.close(value);
  }

  public confirm() {
    this.dailogRef.close(true);
  }

// for better user experience
  @HostListener('keydown.esc')
    escape(){
      this.dailogRef.close();
    }
  }


