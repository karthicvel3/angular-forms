import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  selectFormControl =  new FormControl('');
  
  selectBox =[
    {id:1, name:"one"},
    {id:2, name:"two"},
    {id:3, name:"three"},
    {id:4, name:"four"}
  ]
}
