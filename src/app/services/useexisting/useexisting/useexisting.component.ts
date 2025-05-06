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

  counterService =`
import { Injectable } from '@angular/core';
import { Counter2Service } from './counter2.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {
 
  counter=0;
  public updateTrigger = new Subject()

  constructor() {  }

  increaseCounter(){
     this.counter++
     this.updateTrigger.next(true)
  }

  decreaseCounter(){
    return --this.counter
 }

 getCounterValue() : number {
    return this.counter
 }
}
`


  counterService2 = `
  import { Injectable } from '@angular/core';
  import { CounterService } from './counter.service';
  
  
  @Injectable({
    providedIn: 'root',
    useExisting:CounterService
  
  })
  export abstract class Counter2Service {
  
    increaseCounter(){  }
  }`

  useExistComponent =
  `
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
  `

}
