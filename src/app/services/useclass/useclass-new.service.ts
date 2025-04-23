import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewuseService {

  constructor() { }

  logger(){
      return "HTTP Logger";
  }
}
