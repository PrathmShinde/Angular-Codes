import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(public eobj: ElementRef) {

    eobj.nativeElement.style.color = 'gray';
  }

  @HostListener('mouseenter') onmouseenter() {

    this.eobj.nativeElement.style.color = 'green';
  }
  @HostListener('mouseleave') onmouseleave() {

    this.eobj.nativeElement.style.color = 'black';
  }
}
