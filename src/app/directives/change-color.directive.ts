import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input() public set appChangeColor(value: boolean) {
    if (value) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'white'
      );
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
        'rgb(16, 97, 140)';
    } else {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'black'
      );
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
        'white';
    }
  }
}
