import { Directive } from '@angular/core';
import { OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appOnHover]',
})
export class OnHoverDirective implements OnInit {

  @HostBinding('class.green')
  greenClass!: boolean;

  constructor() {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.greenClass = true;
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.greenClass = false;
  }
}