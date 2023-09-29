import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {routes as RoutesConstants} from './constant.ts/routes';

const {  LOGIN,ADD,EDIT}=RoutesConstants

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
