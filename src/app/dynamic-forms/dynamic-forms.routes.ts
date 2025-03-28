import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

export const routes: Routes = [
  { path: '',  component:DynamicFormsComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class DynamicFormArrayRoutingModule { }