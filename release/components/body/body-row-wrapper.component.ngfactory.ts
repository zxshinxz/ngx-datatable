/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/components/body/body-row-wrapper.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../../node_modules/@angular/common/src/directives/ng_template_outlet.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/common/src/directives/ng_template_outlet';
import * as import13 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '@angular/core/src/security';
export class Wrapper_DataTableRowWrapperComponent {
  /*private*/ _eventHandler:Function;
  context:import0.DataTableRowWrapperComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.DataTableRowWrapperComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_rowDetailTemplate(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.rowDetailTemplate = currValue;
      this._expr_0 = currValue;
    }
  }
  check_detailRowHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.detailRowHeight = currValue;
      this._expr_1 = currValue;
    }
  }
  check_expanded(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.expanded = currValue;
      this._expr_2 = currValue;
    }
  }
  check_row(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.row = currValue;
      this._expr_3 = currValue;
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
    if ((eventName == 'contextmenu')) {
      const pd_sub_0:any = ((<any>this.context.onContextmenu($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.rowContextmenu.subscribe(_eventHandler.bind(view,'rowContextmenu'))); }
  }
}
var renderType_DataTableRowWrapperComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_DataTableRowWrapperComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.DataTableRowWrapperComponent>;
  _DataTableRowWrapperComponent_0_3:Wrapper_DataTableRowWrapperComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableRowWrapperComponent_Host0,renderType_DataTableRowWrapperComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'datatable-row-wrapper',new import3.InlineArray2(2,'class','datatable-row-wrapper'),rootSelector,(null as any));
    this.compView_0 = new View_DataTableRowWrapperComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTableRowWrapperComponent_0_3 = new Wrapper_DataTableRowWrapperComponent();
    this.compView_0.create(this._DataTableRowWrapperComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'contextmenu',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._DataTableRowWrapperComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTableRowWrapperComponent) && (0 === requestNodeIndex))) { return this._DataTableRowWrapperComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DataTableRowWrapperComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTableRowWrapperComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DataTableRowWrapperComponent_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const DataTableRowWrapperComponentNgFactory:import8.ComponentFactory<import0.DataTableRowWrapperComponent> = new import8.ComponentFactory<import0.DataTableRowWrapperComponent>('datatable-row-wrapper',View_DataTableRowWrapperComponent_Host0,import0.DataTableRowWrapperComponent);
const styles_DataTableRowWrapperComponent:any[] = ([] as any[]);
class View_DataTableRowWrapperComponent3 extends import2.AppView<any> {
  _text_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTableRowWrapperComponent3,renderType_DataTableRowWrapperComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._text_0 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.init(this._text_0,((<any>this.renderer).directRenderer? (null as any): [this._text_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._text_0,ctx);
  }
}
class View_DataTableRowWrapperComponent2 extends import2.AppView<any> {
  _anchor_0:any;
  /*private*/ _vc_0:import9.ViewContainer;
  _TemplateRef_0_5:any;
  _NgTemplateOutlet_0_6:import10.Wrapper_NgTemplateOutlet;
  _el_1:any;
  _map_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTableRowWrapperComponent2,renderType_DataTableRowWrapperComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_5 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {row: p0};
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._anchor_0 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._vc_0 = new import9.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import11.TemplateRef_(this,0,this._anchor_0);
    this._NgTemplateOutlet_0_6 = new import10.Wrapper_NgTemplateOutlet(this._vc_0.vcRef);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._anchor_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import12.NgTemplateOutlet) && (0 === requestNodeIndex))) { return this._NgTemplateOutlet_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._map_5(this.parentView.parentView.context.row);
    this._NgTemplateOutlet_0_6.check_ngOutletContext(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.parentView.context.rowDetailTemplate;
    this._NgTemplateOutlet_0_6.check_ngTemplateOutlet(currVal_0_0_1,throwOnChange,false);
    this._NgTemplateOutlet_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 0)) { return new View_DataTableRowWrapperComponent3(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}
class View_DataTableRowWrapperComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import9.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import13.Wrapper_NgIf;
  _text_3:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTableRowWrapperComponent1,renderType_DataTableRowWrapperComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','datatable-row-detail'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import9.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import11.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import13.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import14.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.rowDetailTemplate;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    const currVal_7:any = this.parentView.context.detailRowHeight;
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementStyle(this._el_0,'height',((this.viewUtils.sanitizer.sanitize(import15.SecurityContext.STYLE,currVal_7) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import15.SecurityContext.STYLE,currVal_7).toString() + 'px')));
      this._expr_7 = currVal_7;
    }
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_DataTableRowWrapperComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
var renderType_DataTableRowWrapperComponent:import4.RenderComponentType = import3.createRenderComponentType('',1,import5.ViewEncapsulation.None,styles_DataTableRowWrapperComponent,{});
export class View_DataTableRowWrapperComponent0 extends import2.AppView<import0.DataTableRowWrapperComponent> {
  _text_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import9.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import13.Wrapper_NgIf;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableRowWrapperComponent0,renderType_DataTableRowWrapperComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.projectNodes(parentRenderNode,0);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_2 = new import9.ViewContainer(2,(null as any),this,this._anchor_2);
    this._TemplateRef_2_5 = new import11.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import13.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import14.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.expanded;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_DataTableRowWrapperComponent1(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}