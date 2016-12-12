import { Directive, TemplateRef, ContentChild, Input } from '@angular/core';
import { DataTableColumnDirective } from './column.directive';

@Directive({ selector: 'swui-datatable-checkbox-column' })
export class DatatableCheckboxColumnDirective extends DataTableColumnDirective {

  @Input() resizeable: boolean = false;
  @Input() sortable: boolean = false;
  @Input() draggable: boolean = false;
  @Input() canAutoResize: boolean = false;
  @Input() minWidth: number = 30;
  @Input() width: number = 30;
  @Input() maxWidth: number = 30;
  @Input() checkboxable: boolean = true;

}
