import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }
  //  readonly is used to declare class-level constants
 private  readonly actionText='OK';
 private readonly duration=1000;

  openSnackBar(message: string, actionText:string='',duration:number=0) {
    this.snackbar.open(message, actionText ||this.actionText,{
      duration: duration || this.duration
    })
  }


}
