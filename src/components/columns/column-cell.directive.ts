import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[column-cell-template]'
})
export class DataTableColumnCellDirective {

  constructor(public template: TemplateRef<any>) { };
  
}
