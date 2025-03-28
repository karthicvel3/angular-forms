import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';

export const routes: Routes = [
  { path: '',  component:FormGroupComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class FormGroupRoutingModule { }