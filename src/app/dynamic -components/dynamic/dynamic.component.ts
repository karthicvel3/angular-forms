import { Component, ComponentRef, inject, viewChild, ViewContainerRef } from '@angular/core';
import { CreateDynamicComponent } from '../create-dynamic/create-dynamic.component';

@Component({
  selector: 'app-dynamic',
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {

  outputEvent =''
  viewChildRefernce = viewChild('container', {read:ViewContainerRef});
  componentRef?:ComponentRef<CreateDynamicComponent>;

  _createReference = inject(ViewContainerRef);

  
  createComponents(){
    this.componentRef = this.viewChildRefernce()?.createComponent(CreateDynamicComponent)
    this.componentRef?.setInput("inputvalue", "Input Value")

    this.componentRef?.instance.outputvalue.subscribe(() => {
         this.outputEvent = 'Output Value'
    })
  }

  destoryComponents(){
    this.componentRef?.destroy()
  }

}
