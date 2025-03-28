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
  public fields = [
    {label: 'Full Name', name: 'full_name', type: 'text'},
    {label: 'Email', name: 'email', type: 'text'},
    {label: 'Comments', name: 'comments', type: 'textarea'},
    {label: 'CheckBox', name: 'checkbox', type: 'checkbox'},
  ]
  
  constructor() { }


  ngOnInit() {
    let controls:any = {};
    this.fields.map(field => {
       controls[field.name] = new FormControl();
    });
    console.log(controls);
    this.dynamicForm = new FormGroup(controls);

  }
}
