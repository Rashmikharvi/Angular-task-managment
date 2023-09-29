import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    // RouterModule
  ],
  exports: [
    LayoutComponent,
    TopbarComponent,
    SidebarComponent,
    // RouterModule
  ]
})
export class CoreModule { }
