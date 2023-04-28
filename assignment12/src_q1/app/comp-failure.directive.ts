import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public eobj: ElementRef) {

    eobj.nativeElement.style.color = 'gray';

  }

  @HostListener('mouseenter') onmouseenter() {

    this.eobj.nativeElement.style.color = 'red';

  }
  @HostListener('mouseleave') onmouseleave() {

    this.eobj.nativeElement.style.color = 'black';
  }
}
