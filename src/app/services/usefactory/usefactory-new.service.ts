import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseFactoryNewService {

  constructor() {  }

  logger(){
     return "Use Factory New"
  }
}
