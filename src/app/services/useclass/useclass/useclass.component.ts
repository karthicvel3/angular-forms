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

}
