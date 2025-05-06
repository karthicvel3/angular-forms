import { Component, Inject, inject } from '@angular/core';
import { API_TOKEN } from '../injectiontoken.service';


export interface Enviroment{
  dev:string
  isDev:boolean
}
const ENV_URL: Enviroment ={
  dev:"Localhost",
  isDev:true
}

@Component({
  selector: 'app-usevalue',
  imports: [],
  providers:[ {provide:API_TOKEN, useValue:ENV_URL}],
  templateUrl: './usevalue.component.html',
  styleUrl: './usevalue.component.css'
})


export class UsevalueComponent {

  constructor(@Inject(API_TOKEN) public api: Enviroment){}

useValue=`
 import { InjectionToken, NgModule } from "@angular/core";

 export const  API_TOKEN = new InjectionToken<string>('API');
  `

useValueComponents=`

export interface Enviroment{
  dev:string
  isDev:boolean
}
const ENV_URL: Enviroment ={
  dev:"Localhost",
  isDev:true
}

@Component({
  selector: 'app-usevalue',
  providers:[ {provide:API_TOKEN, useValue:ENV_URL}],
  templateUrl: './usevalue.component.html',
  styleUrl: './usevalue.component.css'
})

constructor(@Inject(API_TOKEN) public api: Enviroment){}
  `

}
