import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollToFirstError]'
})
export class ScrollToFirstErrorDirective implements OnInit {
  @Input() isFormInvalid: boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {}

  @HostListener('ngSubmit') onSubmit() {
    if (this.isFormInvalid) {
      const elementWithError = this.elementRef.nativeElement.querySelector('.ng-invalid').getBoundingClientRect();

      window.scrollTo({
        top: elementWithError.top,
        behavior: 'smooth'
      });
    }
  }
}
