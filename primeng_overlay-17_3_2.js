var R=Object.defineProperty;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var _=(n,s,e)=>s in n?R(n,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[s]=e,h=(n,s)=>{for(var e in s||={})k.call(s,e)&&_(n,e,s[e]);if(g)for(var e of g(s))I.call(s,e)&&_(n,e,s[e]);return n};import{style as x,animate as w,animation as T,useAnimation as C,transition as O,trigger as V}from"@angular/animations";import*as a from"@angular/common";import{isPlatformBrowser as A,DOCUMENT as M,CommonModule as j}from"@angular/common";import*as t from"@angular/core";import{forwardRef as Z,EventEmitter as d,PLATFORM_ID as z}from"@angular/core";import{NG_VALUE_ACCESSOR as H}from"@angular/forms";import*as v from"primeng/api";import{PrimeTemplate as N,SharedModule as b}from"primeng/api";import{DomHandler as l,ConnectedOverlayScrollHandler as F}from"primeng/dom";import{ObjectUtils as p,ZIndexUtils as f}from"primeng/utils";var K=["overlay"],Q=["content"];function B(n,s){n&1&&t.ɵɵelementContainer(0)}var P=(n,s,e)=>({showTransitionParams:n,hideTransitionParams:s,transform:e}),U=n=>({value:"visible",params:n}),q=n=>({mode:n}),G=n=>({$implicit:n});function Y(n,s){if(n&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"div",1,3),t.ɵɵlistener("click",function(o){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext(2);return t.ɵɵresetView(r.onOverlayContentClick(o))})("@overlayContentAnimation.start",function(o){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext(2);return t.ɵɵresetView(r.onOverlayContentAnimationStart(o))})("@overlayContentAnimation.done",function(o){t.ɵɵrestoreView(e);let r=t.ɵɵnextContext(2);return t.ɵɵresetView(r.onOverlayContentAnimationDone(o))}),t.ɵɵprojection(2),t.ɵɵtemplate(3,B,1,0,"ng-container",4),t.ɵɵelementEnd()}if(n&2){let e=t.ɵɵnextContext(2);t.ɵɵclassMap(e.contentStyleClass),t.ɵɵproperty("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",t.ɵɵpureFunction1(11,U,t.ɵɵpureFunction3(7,P,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),t.ɵɵadvance(3),t.ɵɵproperty("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",t.ɵɵpureFunction1(15,G,t.ɵɵpureFunction1(13,q,e.overlayMode)))}}var $=(n,s,e,i,o,r,c,y,m,u,S,E,D,L)=>({"p-overlay p-component":!0,"p-overlay-modal p-component-overlay p-component-overlay-enter":n,"p-overlay-center":s,"p-overlay-top":e,"p-overlay-top-start":i,"p-overlay-top-end":o,"p-overlay-bottom":r,"p-overlay-bottom-start":c,"p-overlay-bottom-end":y,"p-overlay-left":m,"p-overlay-left-start":u,"p-overlay-left-end":S,"p-overlay-right":E,"p-overlay-right-start":D,"p-overlay-right-end":L});function J(n,s){if(n&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"div",1,2),t.ɵɵlistener("click",function(){t.ɵɵrestoreView(e);let o=t.ɵɵnextContext();return t.ɵɵresetView(o.onOverlayClick())}),t.ɵɵtemplate(2,Y,4,17,"div",0),t.ɵɵelementEnd()}if(n&2){let e=t.ɵɵnextContext();t.ɵɵclassMap(e.styleClass),t.ɵɵproperty("ngStyle",e.style)("ngClass",t.ɵɵpureFunctionV(5,$,[e.modal,e.modal&&e.overlayResponsiveDirection==="center",e.modal&&e.overlayResponsiveDirection==="top",e.modal&&e.overlayResponsiveDirection==="top-start",e.modal&&e.overlayResponsiveDirection==="top-end",e.modal&&e.overlayResponsiveDirection==="bottom",e.modal&&e.overlayResponsiveDirection==="bottom-start",e.modal&&e.overlayResponsiveDirection==="bottom-end",e.modal&&e.overlayResponsiveDirection==="left",e.modal&&e.overlayResponsiveDirection==="left-start",e.modal&&e.overlayResponsiveDirection==="left-end",e.modal&&e.overlayResponsiveDirection==="right",e.modal&&e.overlayResponsiveDirection==="right-start",e.modal&&e.overlayResponsiveDirection==="right-end"])),t.ɵɵadvance(2),t.ɵɵproperty("ngIf",e.visible)}}var W=["*"],X={provide:H,useExisting:Z(()=>ie),multi:!0},ee=T([x({transform:"{{transform}}",opacity:0}),w("{{showTransitionParams}}")]),te=T([w("{{hideTransitionParams}}",x({transform:"{{transform}}",opacity:0}))]),ie=(()=>{class n{document;platformId;el;renderer;config;overlayService;cd;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return p.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return p.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return p.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return p.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get appendTo(){return this._appendTo||this.overlayOptions?.appendTo}set appendTo(e){this._appendTo=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}visibleChange=new d;onBeforeShow=new d;onShow=new d;onBeforeHide=new d;onHide=new d;onAnimationStart=new d;onAnimationDone=new d;templates;overlayViewChild;contentViewChild;contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_appendTo;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(A(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.window?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return h(h({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return h(h({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return l.getTargetElement(this.target,this.el?.nativeElement)}constructor(e,i,o,r,c,y,m,u){this.document=e,this.platformId=i,this.el=o,this.renderer=r,this.config=c,this.overlayService=y,this.cd=m,this.zone=u,this.window=this.document.defaultView}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&l.focus(this.targetEl),this.modal&&l.addClass(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&l.focus(this.targetEl),this.modal&&l.removeClass(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&l.alignOverlay(this.overlayEl,this.targetEl,this.appendTo)}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&f.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),l.appendOverlay(this.overlayEl,this.appendTo==="body"?this.document.body:this.appendTo,this.appendTo),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&l.addClass(this.overlayEl,"p-component-overlay-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let i=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.show(i,!0),this.bindListeners();break;case"void":this.hide(i,!0),this.unbindListeners(),l.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),f.clear(i),this.modalVisible=!1,this.cd.markForCheck();break}this.handleEvents("onAnimationDone",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new F(this.targetEl,e=>{(this.listener?this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let o=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&o}):o)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!l.isTouchDevice()}):!l.isTouchDevice())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.window,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!l.isTouchDevice()}):!l.isTouchDevice())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&(l.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),f.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static ɵfac=function(i){return new(i||n)(t.ɵɵdirectiveInject(M),t.ɵɵdirectiveInject(z),t.ɵɵdirectiveInject(t.ElementRef),t.ɵɵdirectiveInject(t.Renderer2),t.ɵɵdirectiveInject(v.PrimeNGConfig),t.ɵɵdirectiveInject(v.OverlayService),t.ɵɵdirectiveInject(t.ChangeDetectorRef),t.ɵɵdirectiveInject(t.NgZone))};static ɵcmp=t.ɵɵdefineComponent({type:n,selectors:[["p-overlay"]],contentQueries:function(i,o,r){if(i&1&&t.ɵɵcontentQuery(r,N,4),i&2){let c;t.ɵɵqueryRefresh(c=t.ɵɵloadQuery())&&(o.templates=c)}},viewQuery:function(i,o){if(i&1&&(t.ɵɵviewQuery(K,5),t.ɵɵviewQuery(Q,5)),i&2){let r;t.ɵɵqueryRefresh(r=t.ɵɵloadQuery())&&(o.overlayViewChild=r.first),t.ɵɵqueryRefresh(r=t.ɵɵloadQuery())&&(o.contentViewChild=r.first)}},hostAttrs:[1,"p-element"],inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options"},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[t.ɵɵProvidersFeature([X])],ngContentSelectors:W,decls:1,vars:1,consts:[[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"ngStyle","ngClass","click"],["overlay",""],["content",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(t.ɵɵprojectionDef(),t.ɵɵtemplate(0,J,3,20,"div",0)),i&2&&t.ɵɵproperty("ngIf",o.modalVisible)},dependencies:[a.NgClass,a.NgIf,a.NgTemplateOutlet,a.NgStyle],styles:[`@layer primeng{.p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}}
`],encapsulation:2,data:{animation:[V("overlayContentAnimation",[O(":enter",[C(ee)]),O(":leave",[C(te)])])]},changeDetection:0})}return n})(),Ce=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=t.ɵɵdefineNgModule({type:n});static ɵinj=t.ɵɵdefineInjector({imports:[j,b,b]})}return n})();export{X as OVERLAY_VALUE_ACCESSOR,ie as Overlay,Ce as OverlayModule};