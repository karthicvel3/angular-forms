import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';


@Injectable({
  providedIn: 'root',
  useExisting:CounterService

})
export abstract class Counter2Service {

  increaseCounter(){  }
}
