import { Component } from '@angular/core';
import { CounterService } from '../counter.service';
import { Counter2Service } from '../counter2.service';

@Component({
  selector: 'app-useexisting',
  imports: [],
  templateUrl: './useexisting.component.html',
  styleUrl: './useexisting.component.css'
})
export class UseexistingComponent {

  counter=0;
  constructor(private _counter2Service:Counter2Service, private _counterService:CounterService){}

  ngOnInit(){  
      this._counterService.updateTrigger.subscribe(() => {
          this.counter = this._counterService.getCounterValue()
      })
  }

  onSetValue(){
    this._counter2Service.increaseCounter()
  }

  onClearValue(){
    this.counter=0
    this._counterService.counter =0
  }

  ngOnDestory(){
    this._counterService.updateTrigger.unsubscribe()
  }

}
