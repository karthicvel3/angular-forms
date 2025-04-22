import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./form-control/form-control.module').then(m => m.FormControlModule)},
  { path: 'formgroup', loadChildren: () => import('./form-group/form-group.module').then(m => m.FormGroupModule)},
  { path: 'formarray', loadChildren: () => import('./form-array/form-array.module').then(m => m.FormArrayModule)},
  { path: 'dynamicformarray', loadChildren: () => import('./dynamic-forms/dynamic-forms.module').then(m => m.DynamicFormsModule)},
  { path: 'checkbox', loadChildren: () => import('./checkbox/checkbox.module').then(m => m.CheckboxModule)},
  { path: 'select', loadChildren: () => import('./selectbox/select.module').then(m => m.SelectModule)},
  { path: '**', loadChildren: () => import('./form-control/form-control.module').then(m => m.FormControlModule)},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class ReactveFormModule { }