import { Directive, ElementRef, Renderer,HostListener } from '@angular/core';

@Directive({
  selector: '[type-color]'
})
export class TypeColorDirective {



  constructor(private ref : ElementRef, private renderer : Renderer) { 

  this.setBorder("rgba(124, 124, 124, 0.521)");
  this.setHeight("470px");

  }


  private setBorder(color : string) : void{

    this.renderer.setElementStyle(this.ref.nativeElement,'border','solid 1px '+color);

  }

private setHeight(h: string): void{

    this.renderer.setElementStyle(this.ref.nativeElement,'height',h);

}



@HostListener('mouseenter') onmouseenter(){

  this.setBorder("red");
}

@HostListener('mouseleave') onmouseleave(){

  this.setBorder("rgba(124, 124, 124, 0.521)");

}

}
