import { Directive, TemplateRef, ContentChild, ContentChildren, Input, QueryList } from '@angular/core';
import { DataTableColumnHeaderDirective } from './column-header.directive';
import { DataTableColumnCellDirective } from './column-cell.directive';

@Directive({
  selector: 'datatable-column'
})
export class DataTableColumnDirective {

  @Input() name;
  @Input() prop;
  @Input() frozenLeft;
  @Input() frozenRight;
  @Input() flexGrow;
  @Input() resizeable;
  @Input() comparator;
  @Input() pipe;
  @Input() sortable;
  @Input() draggable;
  @Input() canAutoResize;
  @Input() minWidth;
  @Input() width;
  @Input() maxWidth;

  @ContentChildren(TemplateRef) 
  set templates(val: QueryList<TemplateRef<any>>) {
    console.log('val', val);
  }

  @ContentChild(DataTableColumnCellDirective, { read: TemplateRef }) 
  cellTemplate: DataTableColumnCellDirective;

  @ContentChild(DataTableColumnHeaderDirective, { read: TemplateRef }) 
  headerTemplate: DataTableColumnHeaderDirective;

  ngAfterContentInit() {
    console.log('blah', this.cellTemplate, this.headerTemplate);
  }

}
