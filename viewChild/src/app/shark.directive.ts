import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShark]'
})
export class SharkDirective {

  creature = 'Dolphin';

  constructor(public elem : ElementRef, public renderer : Renderer2){

  let shark = renderer.createText("i love india");
  renderer.appendChild(elem.nativeElement,shark);
  }


}
