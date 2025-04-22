import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
 
  selectBox =[
    {id:1, name:"one"},
    {id:2, name:"two"},
    {id:3, name:"three"},
    {id:4, name:"four"}
  ]
  selectboxfromgroup = new FormGroup({
    selectFormControl: new FormControl('')
  })

  onSelectBox(valuetext:any){
    this.selectboxfromgroup.get("selectFormControl")?.setValue(valuetext.target.value)
  }

}
