import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 mode:boolean = true;
  constructor() {  }

  setMode(isMode:boolean){
    this.mode = isMode;
  }
}
