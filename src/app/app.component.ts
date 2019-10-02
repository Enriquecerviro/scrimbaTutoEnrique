import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({ 
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
   <router-outlet></router-outlet>
     `
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#EBEBE9';
  }
}