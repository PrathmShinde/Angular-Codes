import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(public eobj: ElementRef) {

    eobj.nativeElement.style.background = 'yellow';
  }
}
