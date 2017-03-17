/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './pager.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/common/src/directives/ng_if';
export class Wrapper_DataTablePagerComponent {
  /*private*/ _eventHandler:Function;
  context:import0.DataTablePagerComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.DataTablePagerComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_pagerLeftArrowIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.pagerLeftArrowIcon = currValue;
      this._expr_0 = currValue;
    }
  }
  check_pagerRightArrowIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.pagerRightArrowIcon = currValue;
      this._expr_1 = currValue;
    }
  }
  check_pagerPreviousIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.pagerPreviousIcon = currValue;
      this._expr_2 = currValue;
    }
  }
  check_pagerNextIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.pagerNextIcon = currValue;
      this._expr_3 = currValue;
    }
  }
  check_size(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.size = currValue;
      this._expr_4 = currValue;
    }
  }
  check_count(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.count = currValue;
      this._expr_5 = currValue;
    }
  }
  check_page(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.page = currValue;
      this._expr_6 = currValue;
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
    if (emit0) { (this.subscription0 = this.context.change.subscribe(_eventHandler.bind(view,'change'))); }
  }
}
var renderType_DataTablePagerComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_DataTablePagerComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.DataTablePagerComponent>;
  _DataTablePagerComponent_0_3:Wrapper_DataTablePagerComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTablePagerComponent_Host0,renderType_DataTablePagerComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'datatable-pager',new import3.InlineArray2(2,'class','datatable-pager'),rootSelector,(null as any));
    this.compView_0 = new View_DataTablePagerComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTablePagerComponent_0_3 = new Wrapper_DataTablePagerComponent();
    this.compView_0.create(this._DataTablePagerComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._DataTablePagerComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTablePagerComponent) && (0 === requestNodeIndex))) { return this._DataTablePagerComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._DataTablePagerComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTablePagerComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DataTablePagerComponentNgFactory:import8.ComponentFactory<import0.DataTablePagerComponent> = new import8.ComponentFactory<import0.DataTablePagerComponent>('datatable-pager',View_DataTablePagerComponent_Host0,import0.DataTablePagerComponent);
const styles_DataTablePagerComponent:any[] = ([] as any[]);
class View_DataTablePagerComponent1 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTablePagerComponent1,renderType_DataTablePagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray2(2,'src','assets/img/ic_pagenation_left2_no.png'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_DataTablePagerComponent2 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTablePagerComponent2,renderType_DataTablePagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray2(2,'src','assets/img/ic_pagenation_left2.png'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_DataTablePagerComponent3 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTablePagerComponent3,renderType_DataTablePagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray2(2,'src','assets/img/ic_pagenation_left_no.png'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_DataTablePagerComponent4 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTablePagerComponent4,renderType_DataTablePagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray2(2,'src','assets/img/ic_pagenation_left.png'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_DataTablePagerComponent5 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTablePagerComponent5,renderType_DataTablePagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray2(2,'src','assets/img/ic_pagenation_right_no.png'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_DataTablePagerComponent6 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTablePagerComponent6,renderType_DataTablePagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray2(2,'src','assets/img/ic_pagenation_right.png'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_DataTablePagerComponent7 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTablePagerComponent7,renderType_DataTablePagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray2(2,'src','assets/img/ic_pagenation_right2_no.png'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_DataTablePagerComponent8 extends import2.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTablePagerComponent8,renderType_DataTablePagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray2(2,'src','assets/img/ic_pagenation_right2.png'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_DataTablePagerComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_DataTablePagerComponent,{});
export class View_DataTablePagerComponent0 extends import2.AppView<import0.DataTablePagerComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import9.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import10.Wrapper_NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import9.ViewContainer;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import10.Wrapper_NgIf;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _anchor_17:any;
  /*private*/ _vc_17:import9.ViewContainer;
  _TemplateRef_17_5:any;
  _NgIf_17_6:import10.Wrapper_NgIf;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _vc_19:import9.ViewContainer;
  _TemplateRef_19_5:any;
  _NgIf_19_6:import10.Wrapper_NgIf;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _anchor_39:any;
  /*private*/ _vc_39:import9.ViewContainer;
  _TemplateRef_39_5:any;
  _NgIf_39_6:import10.Wrapper_NgIf;
  _text_40:any;
  _anchor_41:any;
  /*private*/ _vc_41:import9.ViewContainer;
  _TemplateRef_41_5:any;
  _NgIf_41_6:import10.Wrapper_NgIf;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _el_47:any;
  _text_48:any;
  _anchor_49:any;
  /*private*/ _vc_49:import9.ViewContainer;
  _TemplateRef_49_5:any;
  _NgIf_49_6:import10.Wrapper_NgIf;
  _text_50:any;
  _anchor_51:any;
  /*private*/ _vc_51:import9.ViewContainer;
  _TemplateRef_51_5:any;
  _NgIf_51_6:import10.Wrapper_NgIf;
  _text_52:any;
  _text_53:any;
  _text_54:any;
  _text_55:any;
  /*private*/ _expr_80:any;
  /*private*/ _expr_81:any;
  /*private*/ _expr_82:any;
  /*private*/ _expr_83:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTablePagerComponent0,renderType_DataTablePagerComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._expr_80 = import1.UNINITIALIZED;
    this._expr_81 = import1.UNINITIALIZED;
    this._expr_82 = import1.UNINITIALIZED;
    this._expr_83 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'ul',new import3.InlineArray2(2,'class','pager'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'a',new import3.InlineArray2(2,'href','javascript:void(0)'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._vc_7 = new import9.ViewContainer(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import11.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import10.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._vc_9 = new import9.ViewContainer(9,5,this,this._anchor_9);
    this._TemplateRef_9_5 = new import11.TemplateRef_(this,9,this._anchor_9);
    this._NgIf_9_6 = new import10.Wrapper_NgIf(this._vc_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_11 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_12 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_1,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_13,'a',new import3.InlineArray2(2,'href','javascript:void(0)'),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'\n          ',(null as any));
    this._anchor_17 = this.renderer.createTemplateAnchor(this._el_15,(null as any));
    this._vc_17 = new import9.ViewContainer(17,15,this,this._anchor_17);
    this._TemplateRef_17_5 = new import11.TemplateRef_(this,17,this._anchor_17);
    this._NgIf_17_6 = new import10.Wrapper_NgIf(this._vc_17.vcRef,this._TemplateRef_17_5);
    this._text_18 = this.renderer.createText(this._el_15,'\n          ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_15,(null as any));
    this._vc_19 = new import9.ViewContainer(19,15,this,this._anchor_19);
    this._TemplateRef_19_5 = new import11.TemplateRef_(this,19,this._anchor_19);
    this._NgIf_19_6 = new import10.Wrapper_NgIf(this._vc_19.vcRef,this._TemplateRef_19_5);
    this._text_20 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._text_21 = this.renderer.createText(this._el_13,'\n      ',(null as any));
    this._text_22 = this.renderer.createText(this._el_1,'\n      \n      ',(null as any));
    this._el_23 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','page-counter'),(null as any));
    this._text_24 = this.renderer.createText(this._el_23,'\n        ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_23,'li',new import3.InlineArray2(2,'class','current-page'),(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'',(null as any));
    this._text_27 = this.renderer.createText(this._el_23,'\n        ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_23,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'/',(null as any));
    this._text_30 = this.renderer.createText(this._el_23,'\n        ',(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_23,'li',new import3.InlineArray2(2,'class','total-page'),(null as any));
    this._text_32 = this.renderer.createText(this._el_31,'',(null as any));
    this._text_33 = this.renderer.createText(this._el_23,'\n      ',(null as any));
    this._text_34 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_35 = import3.createRenderElement(this.renderer,this._el_1,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_36 = this.renderer.createText(this._el_35,'\n        ',(null as any));
    this._el_37 = import3.createRenderElement(this.renderer,this._el_35,'a',new import3.InlineArray2(2,'href','javascript:void(0)'),(null as any));
    this._text_38 = this.renderer.createText(this._el_37,'\n          ',(null as any));
    this._anchor_39 = this.renderer.createTemplateAnchor(this._el_37,(null as any));
    this._vc_39 = new import9.ViewContainer(39,37,this,this._anchor_39);
    this._TemplateRef_39_5 = new import11.TemplateRef_(this,39,this._anchor_39);
    this._NgIf_39_6 = new import10.Wrapper_NgIf(this._vc_39.vcRef,this._TemplateRef_39_5);
    this._text_40 = this.renderer.createText(this._el_37,'\n          ',(null as any));
    this._anchor_41 = this.renderer.createTemplateAnchor(this._el_37,(null as any));
    this._vc_41 = new import9.ViewContainer(41,37,this,this._anchor_41);
    this._TemplateRef_41_5 = new import11.TemplateRef_(this,41,this._anchor_41);
    this._NgIf_41_6 = new import10.Wrapper_NgIf(this._vc_41.vcRef,this._TemplateRef_41_5);
    this._text_42 = this.renderer.createText(this._el_37,'\n        ',(null as any));
    this._text_43 = this.renderer.createText(this._el_35,'\n      ',(null as any));
    this._text_44 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_45 = import3.createRenderElement(this.renderer,this._el_1,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_46 = this.renderer.createText(this._el_45,'\n        ',(null as any));
    this._el_47 = import3.createRenderElement(this.renderer,this._el_45,'a',new import3.InlineArray2(2,'href','javascript:void(0)'),(null as any));
    this._text_48 = this.renderer.createText(this._el_47,'\n          ',(null as any));
    this._anchor_49 = this.renderer.createTemplateAnchor(this._el_47,(null as any));
    this._vc_49 = new import9.ViewContainer(49,47,this,this._anchor_49);
    this._TemplateRef_49_5 = new import11.TemplateRef_(this,49,this._anchor_49);
    this._NgIf_49_6 = new import10.Wrapper_NgIf(this._vc_49.vcRef,this._TemplateRef_49_5);
    this._text_50 = this.renderer.createText(this._el_47,'\n          ',(null as any));
    this._anchor_51 = this.renderer.createTemplateAnchor(this._el_47,(null as any));
    this._vc_51 = new import9.ViewContainer(51,47,this,this._anchor_51);
    this._TemplateRef_51_5 = new import11.TemplateRef_(this,51,this._anchor_51);
    this._NgIf_51_6 = new import10.Wrapper_NgIf(this._vc_51.vcRef,this._TemplateRef_51_5);
    this._text_52 = this.renderer.createText(this._el_47,'\n        ',(null as any));
    this._text_53 = this.renderer.createText(this._el_45,'\n      ',(null as any));
    this._text_54 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_55 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_5));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_15,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_15));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_37,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_37));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_47,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_47));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._anchor_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._anchor_39,
      this._text_40,
      this._anchor_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._el_47,
      this._text_48,
      this._anchor_49,
      this._text_50,
      this._anchor_51,
      this._text_52,
      this._text_53,
      this._text_54,
      this._text_55
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import12.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import11.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import12.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6.context; }
    if (((token === import11.TemplateRef) && (17 === requestNodeIndex))) { return this._TemplateRef_17_5; }
    if (((token === import12.NgIf) && (17 === requestNodeIndex))) { return this._NgIf_17_6.context; }
    if (((token === import11.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import12.NgIf) && (19 === requestNodeIndex))) { return this._NgIf_19_6.context; }
    if (((token === import11.TemplateRef) && (39 === requestNodeIndex))) { return this._TemplateRef_39_5; }
    if (((token === import12.NgIf) && (39 === requestNodeIndex))) { return this._NgIf_39_6.context; }
    if (((token === import11.TemplateRef) && (41 === requestNodeIndex))) { return this._TemplateRef_41_5; }
    if (((token === import12.NgIf) && (41 === requestNodeIndex))) { return this._NgIf_41_6.context; }
    if (((token === import11.TemplateRef) && (49 === requestNodeIndex))) { return this._TemplateRef_49_5; }
    if (((token === import12.NgIf) && (49 === requestNodeIndex))) { return this._NgIf_49_6.context; }
    if (((token === import11.TemplateRef) && (51 === requestNodeIndex))) { return this._TemplateRef_51_5; }
    if (((token === import12.NgIf) && (51 === requestNodeIndex))) { return this._NgIf_51_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:boolean = !this.context.canPrevious();
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_9_0_0:any = this.context.canPrevious();
    this._NgIf_9_6.check_ngIf(currVal_9_0_0,throwOnChange,false);
    this._NgIf_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    const currVal_17_0_0:boolean = !this.context.canPrevious();
    this._NgIf_17_6.check_ngIf(currVal_17_0_0,throwOnChange,false);
    this._NgIf_17_6.ngDoCheck(this,this._anchor_17,throwOnChange);
    const currVal_19_0_0:any = this.context.canPrevious();
    this._NgIf_19_6.check_ngIf(currVal_19_0_0,throwOnChange,false);
    this._NgIf_19_6.ngDoCheck(this,this._anchor_19,throwOnChange);
    const currVal_39_0_0:boolean = !this.context.canNext();
    this._NgIf_39_6.check_ngIf(currVal_39_0_0,throwOnChange,false);
    this._NgIf_39_6.ngDoCheck(this,this._anchor_39,throwOnChange);
    const currVal_41_0_0:any = this.context.canNext();
    this._NgIf_41_6.check_ngIf(currVal_41_0_0,throwOnChange,false);
    this._NgIf_41_6.ngDoCheck(this,this._anchor_41,throwOnChange);
    const currVal_49_0_0:boolean = !this.context.canNext();
    this._NgIf_49_6.check_ngIf(currVal_49_0_0,throwOnChange,false);
    this._NgIf_49_6.ngDoCheck(this,this._anchor_49,throwOnChange);
    const currVal_51_0_0:any = this.context.canNext();
    this._NgIf_51_6.check_ngIf(currVal_51_0_0,throwOnChange,false);
    this._NgIf_51_6.ngDoCheck(this,this._anchor_51,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    this._vc_17.detectChangesInNestedViews(throwOnChange);
    this._vc_19.detectChangesInNestedViews(throwOnChange);
    this._vc_39.detectChangesInNestedViews(throwOnChange);
    this._vc_41.detectChangesInNestedViews(throwOnChange);
    this._vc_49.detectChangesInNestedViews(throwOnChange);
    this._vc_51.detectChangesInNestedViews(throwOnChange);
    const currVal_80:boolean = !this.context.canPrevious();
    if (import3.checkBinding(throwOnChange,this._expr_80,currVal_80)) {
      this.renderer.setElementClass(this._el_3,'disabled',currVal_80);
      this._expr_80 = currVal_80;
    }
    const currVal_81:boolean = !this.context.canPrevious();
    if (import3.checkBinding(throwOnChange,this._expr_81,currVal_81)) {
      this.renderer.setElementClass(this._el_13,'disabled',currVal_81);
      this._expr_81 = currVal_81;
    }
    const currVal_82:any = import3.inlineInterpolate(1,'',this.context.page,'');
    if (import3.checkBinding(throwOnChange,this._expr_82,currVal_82)) {
      this.renderer.setText(this._text_26,currVal_82);
      this._expr_82 = currVal_82;
    }
    const currVal_83:any = import3.inlineInterpolate(1,'',this.context.totalPages,'');
    if (import3.checkBinding(throwOnChange,this._expr_83,currVal_83)) {
      this.renderer.setText(this._text_32,currVal_83);
      this._expr_83 = currVal_83;
    }
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this._vc_9.destroyNestedViews();
    this._vc_17.destroyNestedViews();
    this._vc_19.destroyNestedViews();
    this._vc_39.destroyNestedViews();
    this._vc_41.destroyNestedViews();
    this._vc_49.destroyNestedViews();
    this._vc_51.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 7)) { return new View_DataTablePagerComponent1(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    if ((nodeIndex == 9)) { return new View_DataTablePagerComponent2(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    if ((nodeIndex == 17)) { return new View_DataTablePagerComponent3(this.viewUtils,this,17,this._anchor_17,this._vc_17); }
    if ((nodeIndex == 19)) { return new View_DataTablePagerComponent4(this.viewUtils,this,19,this._anchor_19,this._vc_19); }
    if ((nodeIndex == 39)) { return new View_DataTablePagerComponent5(this.viewUtils,this,39,this._anchor_39,this._vc_39); }
    if ((nodeIndex == 41)) { return new View_DataTablePagerComponent6(this.viewUtils,this,41,this._anchor_41,this._vc_41); }
    if ((nodeIndex == 49)) { return new View_DataTablePagerComponent7(this.viewUtils,this,49,this._anchor_49,this._vc_49); }
    if ((nodeIndex == 51)) { return new View_DataTablePagerComponent8(this.viewUtils,this,51,this._anchor_51,this._vc_51); }
    return (null as any);
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.selectPage(1)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_15(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.prevPage()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_37(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.nextPage()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_47(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.selectPage(this.context.totalPages)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}