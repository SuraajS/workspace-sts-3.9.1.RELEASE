import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective {
    @HostBinding('class.open') toggleOn = false;
  @HostListener('click') toggleOpen() {
    this.toggleOn = !this.toggleOn;
  }
}
