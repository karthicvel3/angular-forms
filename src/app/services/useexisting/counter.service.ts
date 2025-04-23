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
