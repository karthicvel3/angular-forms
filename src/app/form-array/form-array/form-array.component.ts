import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {

  skills = new FormArray([new FormControl()])

  formArraySample = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    marks: new FormArray([
      new FormGroup({
        test1: new FormControl(''),
        test2: new FormControl('')
      })
    ])
  })


  onAddSkill(){
    const customControls = new FormControl('');
    this.skills.push(customControls)
  }
  
  onSubmitSkill(){
    console.log(this.skills);
  }

  onMarks(){
    (this.formArraySample.get("marks") as FormArray).push(this.formGroupCustom());
  }

  formGroupCustom(){
    return new FormGroup({
      test1: new FormControl(''),
      test2: new FormControl('')
    })
  }

  get customControl(){
    return (this.formArraySample.get("marks") as FormArray)
  }

  onSubmit(){
    console.log(this.formArraySample)
  }

}
