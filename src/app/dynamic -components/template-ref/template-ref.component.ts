import {  AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  imports: [],
  templateUrl: './template-ref.component.html',
  styleUrl: './template-ref.component.css'
})
export class TemplateRefComponent implements AfterViewInit {

  @ViewChild('entry', {read: ViewContainerRef}) entry : ViewContainerRef | undefined;
  @ViewChild('tmpl',{ static:true}) tmpl : TemplateRef<any>;

  ngAfterViewInit() {
    
  }

  createEmbedded(){
    this.entry?.createEmbeddedView(this.tmpl);
  }

}
