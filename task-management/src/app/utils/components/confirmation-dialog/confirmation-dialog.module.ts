import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [
    ConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    MaterialModule
  ],
  providers: [
    DialogService
  ]
})
export class ConfirmationDialogModule { }
