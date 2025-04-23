import { Injectable } from '@angular/core';
import { NewuseService } from './useclass-new.service';

@Injectable({
  providedIn: 'root',
  useClass: NewuseService
})
export class UseService extends NewuseService {

  constructor() {
    super()
   }

  override logger(){
     return "XML logger"
  }
}
