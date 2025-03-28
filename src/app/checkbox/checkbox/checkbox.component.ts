import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  checkboxesDataList = [
    {
      id: 'C001',
      label: 'Photography',
      isChecked: true
    },
    {
      id: 'C002',
      label: 'Writing',
      isChecked: true
    },
    {
      id: 'C003',
      label: 'Painting',
      isChecked: true
    },
    {
      id: 'C004',
      label: 'Knitting',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Dancing',
      isChecked: false
    },
    {
      id: 'C005',
      label: 'Gardening',
      isChecked: true
    },
    {
      id: 'C006',
      label: 'Drawing',
      isChecked: true
    },
    {
      id: 'C007',
      label: 'Gyming',
      isChecked: false
    },
    {
      id: 'C008',
      label: 'Cooking',
      isChecked: true
    },
    {
      id: 'C009',
      label: 'Scrapbooking',
      isChecked: false
    },
    {
      id: 'C010',
      label: 'Origami',
      isChecked: false
    }
  ]

  checkFormGroup = new FormGroup({
    checkboxFormControl: new FormArray([])
  })

  
  ngOnInit(){
    this.checkboxesDataList.forEach((data) => {
      (<FormArray>this.checkFormGroup.get("checkboxFormControl")).push(new FormControl(false))
    })
    console.log(this.checkFormGroup)
  }

  get checkBoxControl(){
    return (<FormArray>this.checkFormGroup.get("checkboxFormControl"));
  }

  updatCheckBox(){
    this.checkboxesDataList.forEach((data,index) => {
      this.checkBoxControl.controls[index].setValue(data.isChecked);
   })
  }

  clearCheckBox(){
    this.checkboxesDataList.forEach((data,index) => {
      this.checkBoxControl.controls[index].reset(false);;
   })

  }
}
