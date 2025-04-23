import { ApplicationRef, Component } from '@angular/core';
import { UseFactoryService } from '../usefactory.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-usefactory',
  imports: [],
  templateUrl: './usefactory.component.html',
  styleUrl: './usefactory.component.css'
})
export class UsefactoryComponent {

  factoryValue =false
  displayLogger=''

  constructor(private _testService:TestService,private _useFactoryService:UseFactoryService,
    private app: ApplicationRef
  ){
  }


  updatService(){
    this.factoryValue =!this.factoryValue;
    this._testService.setMode(this.factoryValue)
    this.app.tick();
  }

  getUpdate(){
    this.displayLogger = this._useFactoryService.logger()
  }



}
