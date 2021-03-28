/* This is a directive for edit Mode of product details */

import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[editMode]'
})
export class EditModeDirective {
  constructor(public tpl: TemplateRef<any>) { }
}