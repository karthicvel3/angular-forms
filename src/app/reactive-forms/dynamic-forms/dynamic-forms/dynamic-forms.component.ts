import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  imports: [ReactiveFormsModule,CommonModule],
  providers:[],
  templateUrl: './dynamic-forms.component.html',
  styleUrl: './dynamic-forms.component.css'
})
export class DynamicFormsComponent {

  public dynamicForm: FormGroup = new FormGroup({});
  public formFields = [
    {label: 'Full Name', name: 'full_name', type: 'text'},
    {label: 'Email', name: 'email', type: 'text'},
    {label: 'Comments', name: 'comments', type: 'textarea'},
    {label: 'CheckBox', name: 'checkbox', type: 'checkbox'},
  ]
  
  constructor() { }

  ngOnInit() {
    let controls:any = {};
    this.formFields.map(field => {
      if(field.name=="checkbox"){
        controls[field.name] = new FormControl(false);
      }else{
        controls[field.name] = new FormControl();
      }
    });
 
    this.dynamicForm = new FormGroup(controls);
    console.log(this.dynamicForm);
  }

  onClickCheckBox(event:any){
    this.dynamicForm.get('checkbox')?.setValue(event.target.checked);
  }
}
