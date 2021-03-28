/* This is a directive for View Mode of product details */
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[viewMode]'
})
export class ViewModeDirective {

  constructor(public tpl: TemplateRef<any>) { }

}