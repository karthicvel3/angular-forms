import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './select/select.component';


export const routes: Routes = [
  { path: '',  component:SelectComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class SelectRoutingModule { }