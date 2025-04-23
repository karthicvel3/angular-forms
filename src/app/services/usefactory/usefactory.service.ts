import { Injectable } from '@angular/core';
import { UseFactoryNewService } from './usefactory-new.service';
import { TestService } from './test.service';

@Injectable({
  providedIn: 'root',
  useFactory: (_testService: TestService) => {
    if (_testService.mode) {
      return new UseFactoryNewService
    } else {
      return new UseFactoryService
    }
  },
  deps:[TestService]
})

export class UseFactoryService {

  constructor() {
   }

  logger(){
     return "Use Factory"
  }
}
