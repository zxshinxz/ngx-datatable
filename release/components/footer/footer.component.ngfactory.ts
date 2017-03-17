/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/components/footer/footer.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../../src/components/footer/pager.component';
import * as import10 from './pager.component.ngfactory';
import * as import11 from '@angular/core/src/security';
export class Wrapper_DataTableFooterComponent {
  /*private*/ _eventHandler:Function;
  context:import0.DataTableFooterComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.DataTableFooterComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_footerHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.footerHeight = currValue;
      this._expr_0 = currValue;
    }
  }
  check_rowCount(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.rowCount = currValue;
      this._expr_1 = currValue;
    }
  }
  check_pageSize(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.pageSize = currValue;
      this._expr_2 = currValue;
    }
  }
  check_offset(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.offset = currValue;
      this._expr_3 = currValue;
    }
  }
  check_pagerLeftArrowIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.pagerLeftArrowIcon = currValue;
      this._expr_4 = currValue;
    }
  }
  check_pagerRightArrowIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.pagerRightArrowIcon = currValue;
      this._expr_5 = currValue;
    }
  }
  check_pagerPreviousIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.pagerPreviousIcon = currValue;
      this._expr_6 = currValue;
    }
  }
  check_pagerNextIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.pagerNextIcon = currValue;
      this._expr_7 = currValue;
    }
  }
  check_totalMessage(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.totalMessage = currValue;
      this._expr_8 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.page.subscribe(_eventHandler.bind(view,'page'))); }
  }
}
var renderType_DataTableFooterComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_DataTableFooterComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.DataTableFooterComponent>;
  _DataTableFooterComponent_0_3:Wrapper_DataTableFooterComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableFooterComponent_Host0,renderType_DataTableFooterComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'datatable-footer',new import3.InlineArray2(2,'class','datatable-footer'),rootSelector,(null as any));
    this.compView_0 = new View_DataTableFooterComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTableFooterComponent_0_3 = new Wrapper_DataTableFooterComponent();
    this.compView_0.create(this._DataTableFooterComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._DataTableFooterComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTableFooterComponent) && (0 === requestNodeIndex))) { return this._DataTableFooterComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._DataTableFooterComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTableFooterComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DataTableFooterComponentNgFactory:import8.ComponentFactory<import0.DataTableFooterComponent> = new import8.ComponentFactory<import0.DataTableFooterComponent>('datatable-footer',View_DataTableFooterComponent_Host0,import0.DataTableFooterComponent);
const styles_DataTableFooterComponent:any[] = ([] as any[]);
var renderType_DataTableFooterComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_DataTableFooterComponent,{});
export class View_DataTableFooterComponent0 extends import2.AppView<import0.DataTableFooterComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  compView_6:import2.AppView<import9.DataTablePagerComponent>;
  _DataTablePagerComponent_6_3:import10.Wrapper_DataTablePagerComponent;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableFooterComponent0,renderType_DataTableFooterComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','page-count'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_1,'datatable-pager',new import3.InlineArray2(2,'class','datatable-pager'),(null as any));
    this.compView_6 = new import10.View_DataTablePagerComponent0(this.viewUtils,this,6,this._el_6);
    this._DataTablePagerComponent_6_3 = new import10.Wrapper_DataTablePagerComponent();
    this._text_7 = this.renderer.createText((null as any),'\n       ',(null as any));
    this.compView_6.create(this._DataTablePagerComponent_6_3.context);
    this._text_8 = this.renderer.createText(this._el_1,'\n     ',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_6,new import3.InlineArray2(2,'change',(null as any)),this.eventHandler(this.handleEvent_6));
    this._DataTablePagerComponent_6_3.subscribe(this,this.eventHandler(this.handleEvent_6),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.DataTablePagerComponent) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._DataTablePagerComponent_6_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_6_0_0:any = this.context.pagerLeftArrowIcon;
    this._DataTablePagerComponent_6_3.check_pagerLeftArrowIcon(currVal_6_0_0,throwOnChange,false);
    const currVal_6_0_1:any = this.context.pagerRightArrowIcon;
    this._DataTablePagerComponent_6_3.check_pagerRightArrowIcon(currVal_6_0_1,throwOnChange,false);
    const currVal_6_0_2:any = this.context.pagerPreviousIcon;
    this._DataTablePagerComponent_6_3.check_pagerPreviousIcon(currVal_6_0_2,throwOnChange,false);
    const currVal_6_0_3:any = this.context.pagerNextIcon;
    this._DataTablePagerComponent_6_3.check_pagerNextIcon(currVal_6_0_3,throwOnChange,false);
    const currVal_6_0_4:any = this.context.pageSize;
    this._DataTablePagerComponent_6_3.check_size(currVal_6_0_4,throwOnChange,false);
    const currVal_6_0_5:any = this.context.rowCount;
    this._DataTablePagerComponent_6_3.check_count(currVal_6_0_5,throwOnChange,false);
    const currVal_6_0_6:any = this.context.curPage;
    this._DataTablePagerComponent_6_3.check_page(currVal_6_0_6,throwOnChange,false);
    if (this._DataTablePagerComponent_6_3.ngDoCheck(this,this._el_6,throwOnChange)) { this.compView_6.markAsCheckOnce(); }
    const currVal_12:any = this.context.footerHeight;
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementStyle(this._el_1,'height',((this.viewUtils.sanitizer.sanitize(import11.SecurityContext.STYLE,currVal_12) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import11.SecurityContext.STYLE,currVal_12).toString() + 'px')));
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = import3.inlineInterpolate(2,'총 ',this.context.rowCount.toLocaleString(),'',this.context.totalMessage,'');
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_4,currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:boolean = !this.context.isVisible;
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementProperty(this._el_6,'hidden',currVal_14);
      this._expr_14 = currVal_14;
    }
    this.compView_6.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_6.destroy();
    this._DataTablePagerComponent_6_3.ngOnDestroy();
  }
  handleEvent_6(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'change')) {
      const pd_sub_0:any = ((<any>this.context.page.emit($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}