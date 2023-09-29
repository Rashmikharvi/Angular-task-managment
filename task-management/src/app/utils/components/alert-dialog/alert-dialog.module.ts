import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogComponent } from './alert-dialog.component';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { DialogModule } from '@angular/cdk/dialog';
import { MaterialModule } from 'src/app/material-module';



@NgModule({
  declarations: [
    AlertDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    MaterialModule
  ], providers: [
    DialogService
  ]
})
export class AlertDialogModule { }
