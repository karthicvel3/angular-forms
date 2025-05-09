import { Component, ComponentRef, inject, QueryList, viewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { CreateDynamicComponent } from '../create-dynamic/create-dynamic.component';

@Component({
  selector: 'app-dynamic',
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {

  @ViewChildren('container') els: QueryList<any> | undefined;
  outputEvent =''
  viewChildRefernce = viewChild('container', {read:ViewContainerRef});
  componentRef?:ComponentRef<CreateDynamicComponent>;

  
  createComponents(){
    console.log(this.els)
    this.componentRef = this.viewChildRefernce()?.createComponent(CreateDynamicComponent)
    this.componentRef?.setInput("inputvalue", "Input Value")
    this.componentRef?.instance.outputvalue.subscribe(() => {
         this.outputEvent = 'Output Value'
    })
  }

  destoryComponents(){
    this.outputEvent=''
    this.viewChildRefernce()?.clear();
  }

}
