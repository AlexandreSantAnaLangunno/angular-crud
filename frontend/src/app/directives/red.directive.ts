import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';


@Directive({
    selector: '[appRed]',
    standalone: true
})
export class RedDirective {

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {
        console.log('KSAJDKSAJKDJAS')

    }
    @HostBinding('attr.role') role = 'button';
    @HostListener('click') onMouseEnter() {
        this.renderer.addClass(this.el.nativeElement, 'minhaClasse');
    }
}
