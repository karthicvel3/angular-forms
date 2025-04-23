import { Component } from '@angular/core';
import { UseService } from '../useclass.service';


@Component({
  selector: 'app-useclass',
  imports: [],
  templateUrl: './useclass.component.html',
  styleUrl: './useclass.component.css'
})
export class UseclassComponent {

  _logger = ''



  constructor(private _useService:UseService){}

  ngOnInit(){
     this._logger = this._useService.logger()
  }

  updateLogger(){
    
  }

  usenewService = `
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
  `;

  useService = `
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
  `;

  useComponent = `
    constructor(private _useService:UseService){}

    ngOnInit(){
      this._logger = this._useService.logger()
    } 
  `;

}
